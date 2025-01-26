// 'use client'

// import { Pathway_Gothic_One } from "next/font/google"

// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

// interface NodeData {
//   x: number
//   y: number
//   label: string
//   inventory: number
// }

// interface EdgeData {
//   startX: number
//   startY: number
//   endX: number
//   endY: number
//   active: boolean
//   cost: number
// }

// export function NetworkVisualization() {
//   const [nodes, setNodes] = useState<NodeData[]>([])
//   const [edges, setEdges] = useState<EdgeData[]>([])
//   const [loading, setLoading] = useState<boolean>(true)
//   const [error, setError] = useState<string | null>(null)
//   const [optimalCost, setOptimalCost] = useState<number | null>(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         var requestData = {
//           supplierToWarehouse: [
//             [1, 4, 3],
//             [2, 5, 4],
//             [3, 6, 5]
//           ],
//           warehouseToRetailer: [
//             [3, 2, 4],
//             [4, 3, 5],
//             [5, 4, 2]
//           ],
//           supplierInventory: [10, 15, 20],
//           warehouseInventory: [5, 10, 15],
//           retailerInventory: [8, 12, 18]
//         };

//         const response = await fetch('http://localhost:8000/api/path/optimal', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(requestData),
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Fetched data:', data);

//         const {
//           optimal_bitstring = '',
//           total_cost = '',
//         } = data;

//         const {
//           supplierInventory,
//           warehouseInventory,
//           retailerInventory,
//           supplierToWarehouse,
//           warehouseToRetailer,
//         } = requestData;

//         const supplierCount = supplierInventory.length
//         const warehouseCount = warehouseInventory.length
//         const retailerCount = retailerInventory.length

//         const width = 800
//         const height = 400
//         const startX = 100
//         const endX = width - 100
//         const spacing = (endX - startX) / 2
//         const verticalSpacing = height / (Math.max(supplierCount, warehouseCount, retailerCount) + 1)

//         const newNodes: NodeData[] = []
//         const newEdges: EdgeData[] = []

//         // Generate supplier nodes
//         supplierInventory.forEach((inventory: number, i: number) => {
//           newNodes.push({
//             x: startX,
//             y: (i + 1) * verticalSpacing,
//             label: `S${i + 1}`,
//             inventory,
//           })
//         })

//         // Generate warehouse nodes
//         warehouseInventory.forEach((inventory: number, i: number) => {
//           newNodes.push({
//             x: startX + spacing,
//             y: (i + 1) * verticalSpacing,
//             label: `W${i + 1}`,
//             inventory,
//           })
//         })

//         // Generate retailer nodes
//         retailerInventory.forEach((inventory: number, i: number) => {
//           newNodes.push({
//             x: startX + spacing * 2,
//             y: (i + 1) * verticalSpacing,
//             label: `R${i + 1}`,
//             inventory,
//           })
//         })

//         // Parse the optimal bitstring
//         const supplierToWarehouseBits = optimal_bitstring.slice(0, supplierCount * warehouseCount)
//         const warehouseToRetailerBits = optimal_bitstring.slice(supplierCount * warehouseCount)

//         // Generate edges between suppliers and warehouses
//         supplierToWarehouse.forEach((costs: number[], s: number) => {
//           costs.forEach((cost, w) => {
//             const bitIndex = s * warehouseCount + w
//             newEdges.push({
//               startX: newNodes[s].x,
//               startY: newNodes[s].y,
//               endX: newNodes[supplierCount + w].x,
//               endY: newNodes[supplierCount + w].y,
//               active: supplierToWarehouseBits[bitIndex] === '1',
//               cost,
//             })
//           })
//         })

//         // Generate edges between warehouses and retailers
//         warehouseToRetailer.forEach((costs: number[], w: number) => {
//           costs.forEach((cost, r) => {
//             const bitIndex = w * retailerCount + r
//             newEdges.push({
//               startX: newNodes[supplierCount + w].x,
//               startY: newNodes[supplierCount + w].y,
//               endX: newNodes[supplierCount + warehouseCount + r].x,
//               endY: newNodes[supplierCount + warehouseCount + r].y,
//               active: warehouseToRetailerBits[bitIndex] === '1',
//               cost,
//             })
//           })
//         })

//         setNodes(newNodes)
//         setEdges(newEdges)
//         setOptimalCost(total_cost)
//       } catch (err: any) {
//         setError(err.message || 'An error occurred while fetching data.')
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchData()
//   }, [])

//   return (
//     <Card className="w-full">
//       <CardHeader>
//         <CardTitle>Supply Chain Network</CardTitle>
//         <CardDescription>Optimal inventory management visualization</CardDescription>
//       </CardHeader>
//       <CardContent>
//         {error && <p className="text-red-500">Error: {error}</p>}
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <>
//             <div className="w-full overflow-x-auto mb-6">
//               <svg width="800" height="400" viewBox="0 0 800 400" className="w-full h-auto">
//                 <rect width="800" height="400" fill="#F0F9FF" rx="10" ry="10" />
//                 {edges.map((edge, index) => (
//                   <motion.g key={`edge-${index}`}>
//                     <motion.line
//                       x1={edge.startX}
//                       y1={edge.startY}
//                       x2={edge.endX}
//                       y2={edge.endY}
//                       stroke={edge.active ? '#22C55E' : '#E5E7EB'}
//                       strokeWidth={edge.active ? 2 : 1}
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{ duration: 1, ease: 'easeInOut' }}
//                     />
//                     {edge.active && (
//                       <text
//                         x={(edge.startX + edge.endX) / 2}
//                         y={(edge.startY + edge.endY) / 2}
//                         textAnchor="middle"
//                         fill="#22C55E"
//                         fontSize="12"
//                       >
//                         {edge.cost}
//                       </text>
//                     )}
//                   </motion.g>
//                 ))}
//                 {nodes.map((node, index) => (
//                   <motion.g
//                     key={`node-${index}`}
//                     initial={{ opacity: 0, scale: 0 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <circle cx={node.x} cy={node.y} r={40} fill="#60A5FA" />
//                     <text x={node.x} y={node.y} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
//                       {node.label}
//                     </text>
//                     <text x={node.x} y={node.y + 20} textAnchor="middle" fill="white" fontSize="12">
//                       Inv: {node.inventory}
//                     </text>
//                   </motion.g>
//                 ))}
//               </svg>
//             </div>
//             {optimalCost !== null && (
//               <div className="text-lg font-semibold text-center">
//                 Optimal Cost: ${optimalCost.toFixed(2)}
//               </div>
//             )}
//           </>
//         )}
//       </CardContent>
//     </Card>
//   )
// }




'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useAppSelector } from "@/lib/redux/hooks";

interface NodeData {
  x: number
  y: number
  label: string
  inventory: number
}

interface EdgeData {
  startX: number
  startY: number
  endX: number
  endY: number
  active: boolean
  cost: number
}

// Define the prop types
interface NetworkVisualizationProps {
  bitstring: string;
}

export function NetworkVisualization({ bitstring }: NetworkVisualizationProps) {
  const [nodes, setNodes] = useState<NodeData[]>([])
  const [edges, setEdges] = useState<EdgeData[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [optimalCost, setOptimalCost] = useState<number | null>(null)
  const result = useAppSelector((state) => state.visualisation);
  const formData = useAppSelector((state) => state.formData);

useEffect(()=>{
  console.log(`Result: ${JSON.stringify(result)}`);
  console.log(`Form Data: ${JSON.stringify(formData)}`);
},[result, formData])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = {
          supplierToWarehouse: [
            [1, 4, 3],
            [2, 5, 4],
            [3, 6, 5]
          ],
          warehouseToRetailer: [
            [3, 2, 4],
            [4, 3, 5],
            [5, 4, 2]
          ],
          supplierInventory: [10, 15, 20],
          warehouseInventory: [5, 10, 15],
          retailerInventory: [8, 12, 18]
        };

        const response = await fetch('http://localhost:8000/api/path/optimal', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        const {
          optimal_bitstring,
          total_cost,
        } = result;

        const {
          supplierInventory,
          warehouseInventory,
          retailerInventory,
          supplierToWarehouse,
          warehouseToRetailer,
        } = formData;

        const supplierCount = supplierInventory.length;
        const warehouseCount = warehouseInventory.length;
        const retailerCount = retailerInventory.length;

        const width = 800;
        const height = 400;
        const startX = 100;
        const endX = width - 100;
        const spacing = (endX - startX) / 2;
        const verticalSpacing = height / (Math.max(supplierCount, warehouseCount, retailerCount) + 1);

        const newNodes: NodeData[] = [];
        const newEdges: EdgeData[] = [];

        // Generate supplier nodes
        supplierInventory.forEach((inventory: number, i: number) => {
          newNodes.push({
            x: startX,
            y: (i + 1) * verticalSpacing,
            label: `S${i + 1}`,
            inventory,
          });
        });

        // Generate warehouse nodes
        warehouseInventory.forEach((inventory: number, i: number) => {
          newNodes.push({
            x: startX + spacing,
            y: (i + 1) * verticalSpacing,
            label: `W${i + 1}`,
            inventory,
          });
        });

        // Generate retailer nodes
        retailerInventory.forEach((inventory: number, i: number) => {
          newNodes.push({
            x: startX + spacing * 2,
            y: (i + 1) * verticalSpacing,
            label: `R${i + 1}`,
            inventory,
          });
        });

        // Parse the optimal bitstring or passed bitstring prop
        const finalBitstring = bitstring || optimal_bitstring;
        const supplierToWarehouseBits = finalBitstring.slice(0, supplierCount * warehouseCount);
        const warehouseToRetailerBits = finalBitstring.slice(supplierCount * warehouseCount);

        // Generate edges between suppliers and warehouses
        supplierToWarehouse.forEach((costs: number[], s: number) => {
          costs.forEach((cost, w) => {
            const bitIndex = s * warehouseCount + w;
            newEdges.push({
              startX: newNodes[s].x,
              startY: newNodes[s].y,
              endX: newNodes[supplierCount + w].x,
              endY: newNodes[supplierCount + w].y,
              active: supplierToWarehouseBits[bitIndex] === '1',
              cost,
            });
          });
        });

        // Generate edges between warehouses and retailers
        warehouseToRetailer.forEach((costs: number[], w: number) => {
          costs.forEach((cost, r) => {
            const bitIndex = w * retailerCount + r;
            newEdges.push({
              startX: newNodes[supplierCount + w].x,
              startY: newNodes[supplierCount + w].y,
              endX: newNodes[supplierCount + warehouseCount + r].x,
              endY: newNodes[supplierCount + warehouseCount + r].y,
              active: warehouseToRetailerBits[bitIndex] === '1',
              cost,
            });
          });
        });

        setNodes(newNodes);
        setEdges(newEdges);
        setOptimalCost(total_cost);
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [bitstring]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Supply Chain Network</CardTitle>
        <CardDescription>Optimal inventory management visualization</CardDescription>
      </CardHeader>
      <CardContent>
        {error && <p className="text-red-500">Error: {error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="w-full overflow-x-auto mb-6">
              <svg width="800" height="400" viewBox="0 0 800 400" className="w-full h-auto">
                <rect width="800" height="400" fill="#F0F9FF" rx="10" ry="10" />
                {edges.map((edge, index) => (
                  <motion.g key={`edge-${index}`}>
                    <motion.line
                      x1={edge.startX}
                      y1={edge.startY}
                      x2={edge.endX}
                      y2={edge.endY}
                      stroke={edge.active ? '#22C55E' : '#E5E7EB'}
                      strokeWidth={edge.active ? 2 : 1}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                    {edge.active && (
                      <text x={(edge.startX + edge.endX) / 2} y={(edge.startY + edge.endY) / 2} textAnchor="middle" fill="#22C55E" fontSize="12">
                        {edge.cost}
                      </text>
                    )}
                  </motion.g>
                ))}
                {nodes.map((node, index) => (
                  <motion.g key={`node-${index}`} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <circle cx={node.x} cy={node.y} r={40} fill="#60A5FA" />
                    <text x={node.x} y={node.y} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
                      {node.label}
                    </text>
                    <text x={node.x} y={node.y + 20} textAnchor="middle" fill="white" fontSize="12">
                      Inv: {node.inventory}
                    </text>
                  </motion.g>
                ))}
              </svg>
            </div>
            {optimalCost !== null && <div className="text-lg font-semibold text-center">Optimal Cost: ${optimalCost.toFixed(2)}</div>}
          </>
        )}
      </CardContent>
    </Card>
  );
}



// // hansal changes
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// interface NodeData {
//   x: number;
//   y: number;
//   label: string;
//   inventory: number;
// }

// interface EdgeData {
//   startX: number;
//   startY: number;
//   endX: number;
//   endY: number;
//   active: boolean;
//   cost: number;
// }

// interface NetworkVisualizationProps {
//   supplierToWarehouse: number[][];
//   warehouseToRetailer: number[][];
//   supplierInventory: number[];
//   warehouseInventory: number[];
//   retailerInventory: number[];
// }

// export function NetworkVisualization({
//   supplierToWarehouse = [],
//   warehouseToRetailer = [],
//   supplierInventory = [],
//   warehouseInventory = [],
//   retailerInventory = [],
// }: NetworkVisualizationProps) {
//   const [nodes, setNodes] = useState<NodeData[]>([]);
//   const [edges, setEdges] = useState<EdgeData[]>([]);
//   const [optimalCost, setOptimalCost] = useState<number | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (
//           !supplierToWarehouse.length ||
//           !warehouseToRetailer.length ||
//           !supplierInventory.length ||
//           !warehouseInventory.length ||
//           !retailerInventory.length
//         ) {
//           console.warn('Missing data for visualization');
//           return;
//         }

//         const requestData = {
//           supplierToWarehouse,
//           warehouseToRetailer,
//           supplierInventory,
//           warehouseInventory,
//           retailerInventory,
//         };

//         console.log('Sending request data:', requestData);

//         const response = await fetch('http://localhost:8000/api/path/optimal', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(requestData),
//         });

//         if (!response.ok) {
//           const errorResponse = await response.json();
//           console.error('Server response error:', errorResponse);
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log('Fetched data:', data);

//         const optimalBitstring = data.optimal_bitstring || '';
//         const totalCost = data.total_cost || 0;

//         setOptimalCost(totalCost);

//         const supplierCount = supplierInventory.length;
//         const warehouseCount = warehouseInventory.length;
//         const retailerCount = retailerInventory.length;

//         const width = 800;
//         const height = 400;
//         const spacing = width / 3;
//         const verticalSpacing = height / (Math.max(supplierCount, warehouseCount, retailerCount) + 1);

//         const newNodes: NodeData[] = [];
//         const newEdges: EdgeData[] = [];

//         supplierInventory.forEach((inventory, i) =>
//           newNodes.push({ x: spacing, y: (i + 1) * verticalSpacing, label: `S${i + 1}`, inventory })
//         );

//         warehouseInventory.forEach((inventory, i) =>
//           newNodes.push({ x: spacing * 2, y: (i + 1) * verticalSpacing, label: `W${i + 1}`, inventory })
//         );

//         setNodes(newNodes);
//         setEdges(newEdges);
//       } catch (err: any) {
//         console.error('Error fetching data:', err.message);
//       }
//     };

//     fetchData();
//   }, [supplierToWarehouse, warehouseToRetailer, supplierInventory, warehouseInventory, retailerInventory]);

//   return (
//     <Card className="w-full">
//       <CardHeader>
//         <CardTitle>Supply Chain Network</CardTitle>
//         <CardDescription>Optimal inventory management visualization</CardDescription>
//       </CardHeader>
//       <CardContent>
//         {optimalCost !== null && <div className="text-lg font-semibold text-center">Optimal Cost: ${optimalCost.toFixed(2)}</div>}
//       </CardContent>
//     </Card>
//   );
// }
