// "use client";

// import React, { useState } from "react";
// import { NetworkVisualization } from "@/components/ui/NetworkVisualization";
// import { OptimizationStats } from "@/components/ui/optimization-stats";
// import { InputSection } from "@/components/ui/input-section";
// import { Button } from "@/components/ui/button";

// const initialData = {
//   nodes: [
//     { id: 0, label: "Source" },
//         { id: 1, label: "DC 1" },
//         { id: 2, label: "DC 2" },
//         { id: 3, label: "DC 3" },
//         { id: 4, label: "DC 4" },
//         { id: 5, label: "DC 5" },
//         { id: 6, label: "Target" },
//   ],
//   edges: [{ source: 0, target: 1, cost: 10 },
//         { source: 1, target: 2, cost: 15 },
//         { source: 2, target: 3, cost: 20 },
//         { source: 3, target: 4, cost: 10 },
//         { source: 0, target: 2, cost: 25 },
//         { source: 1, target: 3, cost: 30 },
//         { source: 0, target: 3, cost: 35 },
//         { source: 4, target: 5, cost: 56 },
//         { source: 3, target: 5, cost: 12 },
//         { source: 2, target: 5, cost: 78 },
//         { source: 4, target: 6, cost: 45 },
//         { source: 5, target: 6, cost: 12 },
//   ],
     
//   optimalPath: [[0, 3] as [number, number],
//                 [3, 5] as [number, number],
//                 [5, 6] as [number, number],],
  
//   pathCosts: 59,
//   optimalCost: 59,
//   iterations: [1, 2, 3, 4],
//   edgeTimes: [2, 3, 4, 2, 5, 6, 7, 11, 2, 16, 9, 2],
//   totalTime: 0,
// };

// function Page() {
//   const [data, setData] = useState(initialData);

//   const handleInputSubmit = (nodes, edges, edgeCosts, edgeTimes) => {
//     const newNodes = Array.from({ length: nodes }, (_, i) => ({
//       id: i,
//       label: i === 0 ? "Source" : i === nodes - 1 ? "Target" : `DC ${i}`,
//     }));

//     const newEdges = edges.map((edge, i) => ({
//       source: edge[0],
//       target: edge[1],
//       cost: edgeCosts[i],
//       time: edgeTimes[i],
//     }));

//     setData({
//       ...data,
//       nodes: newNodes,
//       edges: newEdges,
//       edgeTimes: edgeTimes,
//     });
//   };

  
//   const handlePathOptimizationSubmit = () => {
//     // Add your path optimization logic here
//     console.log("Path optimization submitted");
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-4">
//       <h1 className="text-3xl font-bold">Supply Chain Path Optimization Dashboard</h1>
//       <p className="text-muted-foreground">
//         Visualizing optimal routes, costs, and times in your supply chain network using quantum computing
//         optimization
//       </p>
//       <div className="grid gap-4 md:grid-cols-2">
//         <InputSection onSubmit={handleInputSubmit} />
//         <NetworkVisualization
//           nodes={data.nodes}
//           edges={data.edges}
//           optimalPath={data.optimalPath}
//         />
//       </div>
//       <OptimizationStats
//         optimalCost={data.optimalCost}
//         pathCosts={data.pathCosts}
//         totalTime={data.totalTime}
//       />
//       <Button onClick={handlePathOptimizationSubmit}>
//         Run Path Optimization
//       </Button>
//     </div>
//   );
// }

// export default Page;










// "use client";

// import React, { useState } from "react";
// import { NetworkVisualization } from "@/components/ui/NetworkVisualization";
// import { OptimizationStats } from "@/components/ui/optimization-stats";
// import { InputSection } from "@/components/ui/input-section";
// import { Button } from "@/components/ui/button";

// const initialData = {
//   console.log("Nodes:", nodes);
//   console.log("Edges:", edges);
//   console.log("Edge Costs:", edgeCosts);
//   console.log("Edge Times:", edgeTimes);


//   optimalPath: [[0, 3] as [number, number],
//                 [3, 5] as [number, number],
//                 [5, 6] as [number, number],],
  
//   pathCosts: 59,
//   optimalCost: 59,
//   iterations: [1, 2, 3, 4],
//   edgeTimes: [2, 3, 4, 2, 5, 6, 7, 11, 2, 16, 9, 2],
//   totalTime: 0,
// };

// function Page() {
//   const [data, setData] = useState(initialData);

//   const handleInputSubmit = (nodes, edges, edgeCosts, edgeTimes) => {
//     const newNodes = Array.from({ length: nodes }, (_, i) => ({
//       id: i,
//       label: i === 0 ? "Source" : i === nodes - 1 ? "Target" : `DC ${i}`,
//     }));

//     const newEdges = edges.map((edge, i) => ({
//       source: edge[0],
//       target: edge[1],
//       cost: edgeCosts[i],
//       time: edgeTimes[i],
//     }));

//     setData({
//       ...data,
//       nodes: newNodes,
//       edges: newEdges,
//       edgeTimes: edgeTimes,
//     });
//   };

  
//   const handlePathOptimizationSubmit = () => {
//     // Add your path optimization logic here
//     console.log("Path optimization submitted");
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-4">
//       <h1 className="text-3xl font-bold">Supply Chain Path Optimization Dashboard</h1>
//       <p className="text-muted-foreground">
//         Visualizing optimal routes, costs, and times in your supply chain network using quantum computing
//         optimization
//       </p>
//       <div className="grid gap-4 md:grid-cols-2">
//         <InputSection onSubmit={handleInputSubmit} />
//         <NetworkVisualization
//           nodes={data.nodes}
//           edges={data.edges}
//           optimalPath={data.optimalPath}
//         />
//       </div>
//       <OptimizationStats
//         optimalCost={data.optimalCost}
//         pathCosts={data.pathCosts}
//         totalTime={data.totalTime}
//       />
//       <Button onClick={handlePathOptimizationSubmit}>
//         Run Path Optimization
//       </Button>
//     </div>
//   );
// }

// export default Page;




// "use client";

// import React, { useEffect, useState } from "react";
// import { NetworkVisualization } from "@/components/ui/NetworkVisualization";
// import { OptimizationStats } from "@/components/ui/optimization-stats";
// import { InputSection } from "@/components/ui/input-section";
// import { Button } from "@/components/ui/button";

// function Page() {
//   const [data, setData] = useState({
//     nodes: [],
//     edges: [],
//     optimalPath: [],
//     pathCosts: 0,
//     optimalCost: 0,
//     iterations: [],
//     edgeTimes: [],
//     totalTime: 0,
//   });

//   // Fetch data from API
//   const fetchData = async () => {
//     try {
//       const response = await fetch("/api/path/optimal_with_time", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch data from API");
//       }

//       const result = await response.json();

//       // Example data structure adjustment for visualization
//       const newNodes = Array.from({ length: result.nodes }, (_, i) => ({
//         id: i,
//         label: i === 0 ? "Source" : i === result.nodes - 1 ? "Target" : `DC ${i}`,
//       }));

//       const newEdges = result.edges.map((edge, i) => ({
//         source: edge[0],
//         target: edge[1],
//         cost: result.edgeCosts[i],
//         time: result.edgeTimes[i],
//       }));

//       setData({
//         nodes: newNodes,
//         edges: newEdges,
//         optimalPath: result.optimalPath || [],
//         pathCosts: result.pathCosts || 0,
//         optimalCost: result.optimalCost || 0,
//         iterations: result.iterations || [],
//         edgeTimes: result.edgeTimes || [],
//         totalTime: result.totalTime || 0,
//       });
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleInputSubmit = (nodes, edges, edgeCosts, edgeTimes) => {
//     const newNodes = Array.from({ length: nodes }, (_, i) => ({
//       id: i,
//       label: i === 0 ? "Source" : i === nodes - 1 ? "Target" : `DC ${i}`,
//     }));

//     const newEdges = edges.map((edge, i) => ({
//       source: edge[0],
//       target: edge[1],
//       cost: edgeCosts[i],
//       time: edgeTimes[i],
//     }));

//     setData({
//       ...data,
//       nodes: newNodes,
//       edges: newEdges,
//       edgeTimes: edgeTimes,
//     });
//   };

//   const handlePathOptimizationSubmit = () => {
//     // Add your path optimization logic here
//     console.log("Path optimization submitted");
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-4">
//       <h1 className="text-3xl font-bold">Supply Chain Path Optimization Dashboard</h1>
//       <p className="text-muted-foreground">
//         Visualizing optimal routes, costs, and times in your supply chain network using quantum computing
//         optimization
//       </p>
//       <div className="grid gap-4 md:grid-cols-2">
//         <InputSection onSubmit={handleInputSubmit} />
//         <NetworkVisualization
//           nodes={data.nodes}
//           edges={data.edges}
//           optimalPath={data.optimalPath}
//         />
//       </div>
//       <OptimizationStats
//         optimalCost={data.optimalCost}
//         pathCosts={data.pathCosts}
//         totalTime={data.totalTime}
//       />
//       <Button onClick={handlePathOptimizationSubmit}>
//         Run Path Optimization
//       </Button>
//     </div>
//   );
// }

// export default Page;




















"use client";

// import React, { useEffect, useState } from "react";
// import { NetworkVisualization } from "@/components/ui/NetworkVisualization";
// import { OptimizationStats } from "@/components/ui/optimization-stats";
// import { InputSection } from "@/components/ui/input-section";
// import { Button } from "@/components/ui/button";

// function Page() {
//   const [data, setData] = useState({
//     nodes: [],
//     edges: [],
//     optimalPath: [],
//     pathCosts: 0,
//     optimalCost: 0,
//     iterations: [],
//     edgeTimes: [],
//     totalTime: 0,
//   });

 
//   const handleInputSubmit = (nodes, edges, edgeCosts, edgeTimes) => {
//     const newNodes = Array.from({ length: nodes }, (_, i) => ({
//       id: i,
//       label: i === 0 ? "Source" : i === nodes - 1 ? "Target" : `DC ${i}`,
//     }));

//     const newEdges = edges.map((edge, i) => ({
//       source: edge[0],
//       target: edge[1],
//       cost: edgeCosts[i],
//       time: edgeTimes[i],
//     }));

//     setData({
//       ...data,
//       nodes: newNodes,
//       edges: newEdges,
//       edgeTimes: edgeTimes,
//     });
//   };
//   useEffect(() => {
//     // Optionally fetch initial data if required
//   }, []);

//   return (
//     <div className="container mx-auto p-4 space-y-4">
//       <h1 className="text-3xl font-bold">Supply Chain Path Optimization Dashboard</h1>
//       <p className="text-muted-foreground">
//         Visualizing optimal routes, costs, and times in your supply chain network using quantum computing
//         optimization
//       </p>
//       <div className="grid gap-4 md:grid-cols-2">
//         <InputSection onSubmit={handleInputSubmit} />
//         <NetworkVisualization
//           nodes={data.nodes}
//           edges={data.edges}
//           optimalPath={data.optimalPath}
//         />
//       </div>
//       <OptimizationStats
//         optimalCost={data.optimalCost}
//         pathCosts={data.pathCosts}
//         totalTime={data.totalTime}
//       />
//       <Button onClick={handlePathOptimizationSubmit}>
//         Run Path Optimization
//       </Button>
//     </div>
//   );
// }

// export default Page;









// import React, { useState } from "react";
// import { InputSection } from "@/components/ui/input-section";
// import { NetworkVisualization } from "@/components/ui/NetworkVisualization";
// import { Button } from "@/components/ui/button";

// function Page() {
//   const [data, setData] = useState({
//     nodes: [],
//     edges: [],
//     edgeCosts: [],
//     edgeTimes: [],
//     optimalCost: 0,
//     optimalPath: [],
//     totalTime: 0,
//   });

//   const handleInputSubmit = async (nodes, edges, edgeCosts, edgeTimes) => {
//     setData({ nodes, edges, edgeCosts, edgeTimes, optimalCost: 0, optimalPath: [], totalTime: 0 });

//     try {
//       const response = await fetch("/api/path/optimal_with_time", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ nodes, edges, edgeCosts, edgeTimes }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch optimization data.");
//       }

//       const result = await response.json();

//       // Log the data to the console
//       console.log("Optimal Cost:", result.optimal_cost);
//       console.log("Selected Edges:", result.selected_edges);
//       console.log("Total Time:", result.total_time);

//       // Update state with the fetched data
//       setData((prevData) => ({
//         ...prevData,
//         optimalCost: result.optimal_cost,
//         optimalPath: result.selected_edges,
//         totalTime: result.total_time,
//       }));
//     } catch (error) {
//       console.error("Error fetching optimization data:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-4">
//       <h1 className="text-3xl font-bold">Network Optimization</h1>
//       <InputSection onSubmit={handleInputSubmit} />
//       <div>
//         <h2>Results:</h2>
//         <p>Optimal Cost: {data.optimalCost}</p>
//         <p>Optimal Path: {JSON.stringify(data.optimalPath)}</p>
//         <p>Total Time: {data.totalTime}</p>
//       </div>
//       <NetworkVisualization
//         nodes={data.nodes}
//         edges={data.edges}
//         optimalPath={data.optimalPath}
//       />
//     </div>
//   );
// }

// export default Page;









// 'use client'

// import React, { useState, useCallback } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Textarea } from "@/components/ui/textarea"
// import { motion } from 'framer-motion'

// interface Node {
//   id: number;
//   label: string;
//   type: 'supplier' | 'warehouse' | 'retailer';
// }

// interface Edge {
//   source: number;
//   target: number;
//   cost: number;
//   time: number;
// }

// export default function NetworkDashboard() {
//   const [nodes, setNodes] = useState<Node[]>([])
//   const [edges, setEdges] = useState<Edge[]>([])
//   const [optimalPath, setOptimalPath] = useState<[number, number][]>([])
//   const [optimalCost, setOptimalCost] = useState<number>(0)
//   const [optimalTime, setOptimalTime] = useState<number>(0)

//   const [inputData, setInputData] = useState({
//     nodes: '4',
//     edges: '[(0, 1), (1, 2), (2, 3), (0, 2), (1, 3)]',
//     edge_costs: '[4, 2, 3, 5, 6]',
//     edge_times: '[10, 8, 7, 12, 15]',
//   })
//   export default function Page() {
//     const [nodes, setNodes] = useState("");
//     const [edges, setEdges] = useState("");
//     const [edgeCosts, setEdgeCosts] = useState("");
//     const [edgeTimes, setEdgeTimes] = useState("");
  
//     const updateNetwork = async () => {
//       try {
//         const parsedNodes = parseInt(nodes);
//         const parsedEdges = JSON.parse(edges);
//         const parsedEdgeCosts = JSON.parse(edgeCosts);
//         const parsedEdgeTimes = JSON.parse(edgeTimes);
  
//         const response = await fetch("/api/path/optimal_with_time", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             nodes: parsedNodes,
//             edges: parsedEdges,
//             edgeCosts: parsedEdgeCosts,
//             edgeTimes: parsedEdgeTimes,
//           }),
//         });
  
//         if (!response.ok) {
//           throw new Error("Failed to update network");
//         }
  
//         const result = await response.json();
  
//         // Log the response data
//         console.log("Optimal Cost:", result.optimal_cost);
//         console.log("Selected Edges:", result.selected_edges);
//         console.log("Total Time:", result.total_time);
//         console.log("Nodes:", nodes);
//         console.log("Edges:", edges);
//         console.log("Edge Costs:", edgeCosts);
//         console.log("Edge Times:", edgeTimes);
//       } catch (error) {
//         console.error("Error updating network:", error);
//       }
//     };
  
//     return (
//       <div className="container mx-auto p-4">
//         <div className="space-y-4">
//           <Input
//             placeholder="Number of Nodes"
//             value={nodes}
//             onChange={(e) => setNodes(e.target.value)}
//           />
//           <Textarea
//             placeholder="Edges (e.g., [[0,1],[1,2]])"
//             value={edges}
//             onChange={(e) => setEdges(e.target.value)}
//           />
//           <Input
//             placeholder="Edge Costs (e.g., [10,15,20])"
//             value={edgeCosts}
//             onChange={(e) => setEdgeCosts(e.target.value)}
//           />
//           <Input
//             placeholder="Edge Times (e.g., [2,3,4])"
//             value={edgeTimes}
//             onChange={(e) => setEdgeTimes(e.target.value)}
//           />
//           <Button onClick={updateNetwork}>Update Network</Button>
//         </div>
//       </div>
//     );
//   }

//   // const updateNetwork = useCallback(() => {
//   //   const numNodes = parseInt(inputData.nodes)
    
//   //   // Custom parsing for edge list
//   //   const edgeList = inputData.edges
//   //     .replace(/[\[\]]/g, '')
//   //     .split('),')
//   //     .map(pair => pair.replace(/[()]/g, '').split(',').map(Number));

//   //   const costs = JSON.parse(inputData.edge_costs)
//   //   const times = JSON.parse(inputData.edge_times)

//   //   const newNodes: Node[] = Array.from({ length: numNodes }, (_, i) => ({
//   //     id: i,
//   //     label: `Node ${i}`,
//   //     type: i < numNodes / 3 ? 'supplier' : i < 2 * numNodes / 3 ? 'warehouse' : 'retailer'
//   //   }))

//   //   const newEdges: Edge[] = edgeList.map(([source, target], index) => ({
//   //     source,
//   //     target,
//   //     cost: costs[index],
//   //     time: times[index]
//   //   }))

//   //   setNodes(newNodes)
//   //   setEdges(newEdges)
//   //   setOptimalPath([])
//   // }, [inputData])

//   // const optimizeNetwork = useCallback(() => {
//   //   // This is a placeholder for the actual optimization algorithm
//   //   // In a real-world scenario, you would call your API here
//   //   const dummyOptimalPath: [number, number][] = [[0, 1], [1, 2], [2, 3]]
//   //   setOptimalPath(dummyOptimalPath)

//   //   const optimalEdges = edges.filter(edge => 
//   //     dummyOptimalPath.some(([s, t]) => 
//   //       (s === edge.source && t === edge.target) || (s === edge.target && t === edge.source)
//   //     )
//   //   )

//   //   setOptimalCost(optimalEdges.reduce((sum, edge) => sum + edge.cost, 0))
//   //   setOptimalTime(optimalEdges.reduce((sum, edge) => sum + edge.time, 0))
//   // }, [edges])

//   // return (
//   //   <div className="container mx-auto p-4">
//   //     <h1 className="text-3xl font-bold mb-6">Network Dashboard</h1>
      
//   //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//   //       <Card>
//   //         <CardHeader>
//   //           <CardTitle>Network Configuration</CardTitle>
//   //         </CardHeader>
//   //         <CardContent>
//   //           <div className="space-y-4">
//   //             <div>
//   //               <Label htmlFor="nodes">Number of Nodes</Label>
//   //               <Input
//   //                 id="nodes"
//   //                 value={inputData.nodes}
//   //                 onChange={(e) => setInputData({...inputData, nodes: e.target.value})}
//   //               />
//   //             </div>
//   //             <div>
//   //               <Label htmlFor="edges">Edges</Label>
//   //               <Textarea
//   //                 id="edges"
//   //                 value={inputData.edges}
//   //                 onChange={(e) => setInputData({...inputData, edges: e.target.value})}
//   //                 rows={3}
//   //               />
//   //             </div>
//   //             <div>
//   //               <Label htmlFor="edge_costs">Edge Costs</Label>
//   //               <Input
//   //                 id="edge_costs"
//   //                 value={inputData.edge_costs}
//   //                 onChange={(e) => setInputData({...inputData, edge_costs: e.target.value})}
//   //               />
//   //             </div>
//   //             <div>
//   //               <Label htmlFor="edge_times">Edge Times</Label>
//   //               <Input
//   //                 id="edge_times"
//   //                 value={inputData.edge_times}
//   //                 onChange={(e) => setInputData({...inputData, edge_times: e.target.value})}
//   //               />
//   //             </div>
//   //             <Button onClick={updateNetwork}>Update Network</Button>
//   //           </div>
//   //         </CardContent>
//   //       </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Network Visualization</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <NetworkGraph nodes={nodes} edges={edges} optimalPath={optimalPath} />
//             <Button className="mt-4" onClick={optimizeNetwork}>Optimize Network</Button>
//           </CardContent>
//         </Card>
//       </div>

//       <Card className="mt-6">
//         <CardHeader>
//           <CardTitle>Optimization Results</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-2">
//             <p><strong>Optimal Cost:</strong> {optimalCost}</p>
//             <p><strong>Optimal Time:</strong> {optimalTime}</p>
//             <p><strong>Optimal Path:</strong></p>
//             <ul className="list-disc pl-5">
//               {optimalPath.map(([from, to], index) => (
//                 <li key={index}>
//                   {from} → {to}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// interface NetworkGraphProps {
//   nodes: Node[];
//   edges: Edge[];
//   optimalPath: [number, number][];
// }

// const NetworkGraph: React.FC<NetworkGraphProps> = ({ nodes, edges, optimalPath }) => {
//   const [highlightIndex, setHighlightIndex] = useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setHighlightIndex(prev => (prev + 1) % edges.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [edges.length]);

//   const calculateLabelPosition = (x1: number, y1: number, x2: number, y2: number) => {
//     return {
//       x: (x1 + x2) / 2,
//       y: (y1 + y2) / 2
//     };
//   };

//   const renderNodesAndEdges = () => {
//     const supplierX = 100;
//     const warehouseX = 400;
//     const retailerX = 700;
//     const yStep = 100;
//     const renderedNodes = [];
//     const renderedEdges = [];

//     nodes.forEach((node, index) => {
//       let x;
//       switch (node.type) {
//         case 'supplier':
//           x = supplierX;
//           break;
//         case 'warehouse':
//           x = warehouseX;
//           break;
//         case 'retailer':
//           x = retailerX;
//           break;
//       }
//       const y = (index % 3 + 1) * yStep;
      
//       renderedNodes.push(
//         <Node 
//           key={`node-${node.id}`} 
//           x={x} 
//           y={y} 
//           label={node.label} 
//           isOptimal={optimalPath.some(([s, t]) => s === node.id || t === node.id)}
//         />
//       );
//     });

//     edges.forEach((edge, index) => {
//       const sourceNode = nodes.find(n => n.id === edge.source);
//       const targetNode = nodes.find(n => n.id === edge.target);
//       if (!sourceNode || !targetNode) return;

//       let x1, x2;
//       switch (sourceNode.type) {
//         case 'supplier':
//           x1 = supplierX;
//           break;
//         case 'warehouse':
//           x1 = warehouseX;
//           break;
//         case 'retailer':
//           x1 = retailerX;
//           break;
//       }
//       switch (targetNode.type) {
//         case 'supplier':
//           x2 = supplierX;
//           break;
//         case 'warehouse':
//           x2 = warehouseX;
//           break;
//         case 'retailer':
//           x2 = retailerX;
//           break;
//       }
//       const y1 = ((nodes.findIndex(n => n.id === edge.source) % 3) + 1) * yStep;
//       const y2 = ((nodes.findIndex(n => n.id === edge.target) % 3) + 1) * yStep;

//       const labelPos = calculateLabelPosition(x1, y1, x2, y2);
//       const isOptimal = optimalPath.some(([s, t]) => (s === edge.source && t === edge.target) || (s === edge.target && t === edge.source));
      
//       renderedEdges.push(
//         <Edge
//           key={`edge-${edge.source}-${edge.target}`}
//           x1={x1}
//           y1={y1}
//           x2={x2}
//           y2={y2}
//           cost={edge.cost}
//           time={edge.time}
//           isOptimal={isOptimal}
//           isHighlighted={isOptimal && index === highlightIndex}
//           labelX={labelPos.x}
//           labelY={labelPos.y}
//         />
//       );
//     });

//     return { renderedNodes, renderedEdges };
//   };

//   const { renderedNodes, renderedEdges } = renderNodesAndEdges();

//   return (
//     <div className="relative">
//       <svg viewBox="0 0 800 450" className="w-full h-auto">
//         <rect width="800" height="450" fill="#F3F4F6" />
//         {renderedEdges}
//         {renderedNodes}
//       </svg>
//       <div className="absolute top-4 right-4 flex items-center gap-2">
//         <div className="flex items-center gap-1">
//           <div className="w-4 h-4 bg-green-400 rounded"></div>
//           <span className="text-sm">Optimal Path</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Node: React.FC<{ x: number; y: number; label: string; isOptimal: boolean }> = ({ 
//   x, y, label, isOptimal 
// }) => (
//   <motion.g 
//     initial={{ opacity: 0, scale: 0 }} 
//     animate={{ opacity: 1, scale: 1 }} 
//     transition={{ duration: 0.5 }}
//   >
//     <circle 
//       cx={x} 
//       cy={y} 
//       r="30" 
//       fill={isOptimal ? "#34D399" : "#60A5FA"}
//       className={isOptimal ? "animate-pulse" : ""}
//     />
//     <text x={x} y={y} textAnchor="middle" fill="white" fontSize="12" dy=".3em">{label}</text>
//   </motion.g>
// );

// const Edge: React.FC<{ 
//   x1: number; 
//   y1: number; 
//   x2: number; 
//   y2: number; 
//   cost: number;
//   time: number;
//   isOptimal: boolean;
//   isHighlighted: boolean;
//   labelX: number;
//   labelY: number;
// }> = ({
//   x1, y1, x2, y2, cost, time, isOptimal, isHighlighted, labelX, labelY
// }) => (
//   <motion.g 
//     initial={{ opacity: 0 }} 
//     animate={{ opacity: 1 }} 
//     transition={{ duration: 0.5 }}
//   >
//     <line
//       x1={x1} y1={y1} x2={x2} y2={y2}
//       stroke={isOptimal ? "#34D399" : "#D1D5DB"}
//       strokeWidth={isOptimal ? 3 : 1}
//       strokeDasharray={isHighlighted ? "10,10" : "0,0"}
//       className={isOptimal ? "animate-pulse" : ""}
//     >
//       {isHighlighted && (
//         <animate
//           attributeName="stroke-dashoffset"
//           from="0"
//           to="20"
//           dur="1s"
//           repeatCount="indefinite"
//         />
//       )}
//     </line>
//     <rect
//       x={labelX - 24}
//       y={labelY - 16}
//       width="48"
//       height="32"
//       fill="white"
//       opacity="0.8"
//       rx="4"
//     />
//     <text
//       x={labelX}
//       y={labelY - 4}
//       textAnchor="middle"
//       fill={isOptimal ? "#34D399" : "#6B7280"}
//       fontSize="10"
//       fontWeight={isOptimal ? "bold" : "normal"}
//     >
//       C: {cost}
//     </text>
//     <text
//       x={labelX}
//       y={labelY + 8}
//       textAnchor="middle"
//       fill={isOptimal ? "#34D399" : "#6B7280"}
//       fontSize="10"
//       fontWeight={isOptimal ? "bold" : "normal"}
//     >
//       T: {time}
//     </text>
//   </motion.g>
// );
























































// "use client";

// import React, { useState, useCallback } from "react";
// import { NetworkVisualization } from "@/components/ui/NetworkVisualization";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
// import { motion } from "framer-motion";

// interface Node {
//   id: number;
//   label: string;
//   type: "supplier" | "warehouse" | "retailer";
// }

// interface Edge {
//   source: Node;
//   target: Node;
//   cost: number;
//   time: number;
// }

// export default function NetworkDashboard() {
//   const [nodes, setNodes] = useState<Node[]>([]);
//   const [edges, setEdges] = useState<Edge[]>([]);
//   const [optimalPath, setOptimalPath] = useState<[number, number][]>([]);
//   const [optimalCost, setOptimalCost] = useState<number>(0);
//   const [optimalTime, setOptimalTime] = useState<number>(0);

//   const [inputData, setInputData] = useState({
//     nodes: "4",
//     edges: "[(0, 1), (1, 2), (2, 3), (0, 2), (1, 3)]",
//     edge_costs: "[4, 2, 3, 5, 6]",
//     edge_times: "[10, 8, 7, 12, 15]",
//   });

//   const updateNetwork = useCallback(async () => {
//     const numNodes = parseInt(inputData.nodes);
//     const edgeList = inputData.edges
//       .replace(/[\[\]]/g, "")
//       .split("),")
//       .map((pair) => pair.replace(/[()]/g, "").split(",").map(Number));
//     const costs = JSON.parse(inputData.edge_costs);
//     const times = JSON.parse(inputData.edge_times);

//     const newNodes: Node[] = Array.from({ length: numNodes }, (_, i) => ({
//       id: i,
//       label: `Node ${i}`,
//       type: i < numNodes / 3 ? "supplier" : i < (2 * numNodes) / 3 ? "warehouse" : "retailer",
//     }));

//     const newEdges: Edge[] = edgeList.map(([source, target], index) => ({
//       source: newNodes[source],
//       target: newNodes[target],
//       cost: costs[index],
//       time: times[index],
//     }));

//     setNodes(newNodes);
//     setEdges(newEdges);
//     setOptimalPath([]);

//     const updateNetwork = async () => {
//             try {
//               var opdata = {
//                 "nodes": numNodes,
//                 "edges": edgeList,
//                 "edgeCosts": costs,
//                 "edgeTimes": times,
                
//               };


//       const response = await fetch("/api/path/optimal_with_time", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(opdata),
//       });
//       console.log(opdata);

//       if (!response.ok) {
//         throw new Error("Failed to fetch optimization results.");
//       }

//       const result = await response.json();

//       console.log("Optimal Cost:", result.optimal_cost);
//       console.log("Selected Edges:", result.selected_edges);
//       console.log("Total Time:", result.total_time);
//       console.log("Nodes:", newNodes);
//       console.log("Edges:", newEdges);
//       console.log("Edge Costs:", costs);
//       console.log("Edge Times:", times);
//     } catch (error) {
//       console.error("Error updating network:", error);
//     }
//   }, [inputData]);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Network Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Network Configuration</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="nodes">Number of Nodes</Label>
//                 <Input
//                   id="nodes"
//                   value={inputData.nodes}
//                   onChange={(e) => setInputData({ ...inputData, nodes: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edges">Edges</Label>
//                 <Textarea
//                   id="edges"
//                   value={inputData.edges}
//                   onChange={(e) => setInputData({ ...inputData, edges: e.target.value })}
//                   rows={3}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edge_costs">Edge Costs</Label>
//                 <Input
//                   id="edge_costs"
//                   value={inputData.edge_costs}
//                   onChange={(e) => setInputData({ ...inputData, edge_costs: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edge_times">Edge Times</Label>
//                 <Input
//                   id="edge_times"
//                   value={inputData.edge_times}
//                   onChange={(e) => setInputData({ ...inputData, edge_times: e.target.value })}
//                 />
//               </div>
//               <Button onClick={updateNetwork}>Update Network</Button>
//             </div>
//           </CardContent>
//         </Card>

//         {/* The existing visualization component remains unchanged */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Network Visualization</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <NetworkVisualization nodes={nodes} edges={edges} optimalPath={optimalPath} />
//             <Button className="mt-4" onClick={() => {}}>Optimize Network</Button>
//           </CardContent>
//         </Card>
//       </div>

//       {/* The existing optimization results section */}
//       <Card className="mt-6">
//         <CardHeader>
//           <CardTitle>Optimization Results</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-2">
//             <p><strong>Optimal Cost:</strong> {optimalCost}</p>
//             <p><strong>Optimal Time:</strong> {optimalTime}</p>
//             <p><strong>Optimal Path:</strong></p>
//             <ul className="list-disc pl-5">
//               {optimalPath.map(([from, to], index) => (
//                 <li key={index}>
//                   {from} → {to}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }






// "use client";

// import React, { useState, useCallback } from "react";
// import { NetworkVisualization } from "@/components/ui/NetworkVisualization";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";
// import { motion } from "framer-motion";

// interface Node {
//   id: number;
//   label: string;
//   type: "supplier" | "warehouse" | "retailer";
// }

// interface Edge {
//   source: Node;
//   target: Node;
//   cost: number;
//   time: number;
// }

// export default function NetworkDashboard() {
//   const [nodes, setNodes] = useState<Node[]>([]);
//   const [edges, setEdges] = useState<Edge[]>([]);
//   const [optimalPath, setOptimalPath] = useState<[number, number][]>([]);
//   const [optimalCost, setOptimalCost] = useState<number>(0);
//   const [optimalTime, setOptimalTime] = useState<number>(0);

//   const [inputData, setInputData] = useState({
//     nodes: "",
//     edges: "",
//     edge_costs: "",
//     edge_times: "",
//   });
//   const updateNetwork = useCallback(async () => {
//     try {
//       const numNodes = parseInt(inputData.nodes);
//       const edgeList = inputData.edges
//         .replace(/[\[\]]/g, "")
//         .split("),")
//         .map((pair) => pair.replace(/[()]/g, "").split(",").map(Number));
//       const costs = JSON.parse(inputData.edge_costs);
//       const times = JSON.parse(inputData.edge_times);

//       const newNodes: Node[] = Array.from({ length: numNodes }, (_, i) => ({
//         id: i,
//         label: `Node ${i}`,
//         type: i < numNodes / 3 ? "supplier" : i < (2 * numNodes) / 3 ? "warehouse" : "retailer",
//       }));

//       const newEdges: Edge[] = edgeList.map(([source, target], index) => ({
//         source: newNodes[source],
//         target: newNodes[target],
//         cost: costs[index],
//         time: times[index],
//       }));

//       setNodes(newNodes);
//       setEdges(newEdges);
//       setOptimalPath([]);

//       const opdata = {
//         nodes: numNodes,
//         edges: edgeList,
//         edgeCosts: costs,
//         edgeTimes: times,
//       };

//       const response = await fetch("/api/path/optimal_with_time", {
//         method: "POST",
//         headers: {  "Content-Type": "application/json","Access-Control-Allow-Origin": "*" },
//         body: JSON.stringify(opdata),
//       });
//       console.log("Request data:", opdata);

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Failed to fetch optimization results: ${errorText}`);
//       }

//       const result = await response.json();
//       console.log("Optimization results:", result);
      
//       setOptimalCost(result.optimal_cost);
//       setOptimalTime(result.total_time);
//       setOptimalPath(result.selected_edges);

//     } catch (error) {
//       if (error instanceof Error) {
//         console.error("Error updating network:", error.message);
//       } else {
//         console.error("Error updating network:", error);
//       }
//     }
//   }, [inputData]);

//   // const updateNetwork = useCallback(async () => {
//   //   try {
//   //     const numNodes = parseInt(inputData.nodes);
//   //     const edgeList = inputData.edges
//   //       .replace(/[\[\]]/g, "")
//   //       .split("),")
//   //       .map((pair) => pair.replace(/[()]/g, "").split(",").map(Number));
//   //     const costs = JSON.parse(inputData.edge_costs);
//   //     const times = JSON.parse(inputData.edge_times);

//   //     const newNodes: Node[] = Array.from({ length: numNodes }, (_, i) => ({
//   //       id: i,
//   //       label: `Node ${i}`,
//   //       type: i < numNodes / 3 ? "supplier" : i < (2 * numNodes) / 3 ? "warehouse" : "retailer",
//   //     }));

//   //     const newEdges: Edge[] = edgeList.map(([source, target], index) => ({
//   //       source: newNodes[source],
//   //       target: newNodes[target],
//   //       cost: costs[index],
//   //       time: times[index],
//   //     }));

//   //     setNodes(newNodes);
//   //     setEdges(newEdges);
//   //     setOptimalPath([]);

//   //     const updateNetwork = async () => {
//   //       try {
//   //         var opdata = {
//   //           nodes: numNodes,
//   //           edges: edgeList,
//   //           edgeCosts: costs,
//   //           edgeTimes: times,
//   //         };
    

     

//   //     const response = await fetch("/api/path/optimal_with_time", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify(opdata),
//   //     });
//   //     console.log(opdata);

//   //     if (!response.ok) {
//   //       throw new Error("Failed to fetch optimization results.");
//   //     }

//   //     if (!response.ok) {
//   //       const errorText = await response.text();
//   //       throw new Error(`Failed to fetch optimization results: ${errorText}`);
//   //     }

//   //     const result = await response.json();
//   //     console.log( result);
//   //     setOptimalCost(result.optimal_cost);
//   //     setOptimalTime(result.total_time);
//   //     setOptimalPath(result.selected_edges);

     
//   //   } catch (error) {
//   //     if (error instanceof Error) {
//   //       console.error("Error updating network:", error.message);
//   //     } else {
//   //       console.error("Error updating network:", error);
//   //     }
//   //   }
//   // }, [inputData]);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Network Dashboard</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Network Configuration</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="nodes">Number of Nodes</Label>
//                 <Input
//                   id="nodes"
//                   placeholder="Enter number of nodes"
//                   value={inputData.nodes}
//                   onChange={(e) => setInputData({ ...inputData, nodes: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edges">Edges</Label>
//                 <Textarea
//                   id="edges"
//                   placeholder="Enter edges in format [(0,1), (1,2)]"
//                   value={inputData.edges}
//                   onChange={(e) => setInputData({ ...inputData, edges: e.target.value })}
//                   rows={3}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edge_costs">Edge Costs</Label>
//                 <Input
//                   id="edge_costs"
//                   placeholder="Enter costs in format [1, 2, 3]"
//                   value={inputData.edge_costs}
//                   onChange={(e) => setInputData({ ...inputData, edge_costs: e.target.value })}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edge_times">Edge Times</Label>
//                 <Input
//                   id="edge_times"
//                   placeholder="Enter times in format [1, 2, 3]"
//                   value={inputData.edge_times}
//                   onChange={(e) => setInputData({ ...inputData, edge_times: e.target.value })}
//                 />
//               </div>
//               <Button onClick={updateNetwork}>Update Network</Button>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Network Visualization</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <NetworkVisualization nodes={nodes} edges={edges} optimalPath={optimalPath} />
//             <Button className="mt-4" onClick={updateNetwork}>Optimize Network</Button>
//           </CardContent>
//         </Card>
//       </div>

//       <Card className="mt-6">
//         <CardHeader>
//           <CardTitle>Optimization Results</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-2">
//             <p><strong>Optimal Cost:</strong> {optimalCost}</p>
//             <p><strong>Optimal Time:</strong> {optimalTime}</p>
//             <p><strong>Optimal Path:</strong></p>
//             <ul className="list-disc pl-5">
//               {optimalPath.map(([from, to], index) => (
//                 <li key={index}>
//                   {from} → {to}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




// 'use client'

// import React, { useState, useCallback, JSX } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Textarea } from "@/components/ui/textarea"
// import { motion } from 'framer-motion'

// interface Node {
//   id: number;
//   label: string;
//   type: 'supplier' | 'warehouse' | 'retailer';
// }

// interface Edge {
//   source: number;
//   target: number;
//   cost: number;
//   time: number;
// }

// export default function NetworkDashboard() {
//   const [nodes, setNodes] = useState<Node[]>([])
//   const [edges, setEdges] = useState<Edge[]>([])
//   const [optimalPath, setOptimalPath] = useState<[number, number][]>([])
//   const [optimalCost, setOptimalCost] = useState<number>(0)
//   const [optimalTime, setOptimalTime] = useState<number>(0)

//   const [inputData, setInputData] = useState({
//     nodes: '4',
//     edges: '[(0, 1), (1, 2), (2, 3), (0, 2), (1, 3)]',
//     edge_costs: '[4, 2, 3, 5, 6]',
//     edge_times: '[10, 8, 7, 12, 15]',
//   })

//   const updateNetwork = useCallback(() => {
//     try {
//       var opdata = {
//         "nodes": JSON.parse(inputData.nodes),
//         "edges": JSON.parse(inputData.edges),
//         "edge_costs": JSON.parse(inputData.edge_costs),
//         "edge_times": JSON.parse(inputData.edge_times)
//       };
//       const numNodes = parseInt(inputData.nodes);
      
//       // Custom parsing for edge list
//       const edgeList = inputData.edges
//         .replace(/[\[\]]/g, '')
//         .split('),')
//         .map(pair => pair.replace(/[()]/g, '').split(',').map(Number));

//       const costs = JSON.parse(inputData.edge_costs);
//       const times = JSON.parse(inputData.edge_times);

//       const newNodes: Node[] = Array.from({ length: numNodes }, (_, i) => ({
//         id: i,
//         label: `Node ${i}`,
//         type: i < numNodes / 3 ? 'supplier' : i < 2 * numNodes / 3 ? 'warehouse' : 'retailer'
//       }));

//       const newEdges: Edge[] = edgeList.map(([source, target], index) => ({
//         source,
//         target,
//         cost: costs[index],
//         time: times[index]
//       }));

//       setNodes(newNodes);
//       setEdges(newEdges);
//       setOptimalPath([]);
//     } catch (error) {
//       console.error("Error updating network:", error);
//     }
//   }, [inputData]);

//   const optimizeNetwork = useCallback(() => {
//     // This is a placeholder for the actual optimization algorithm
//     // In a real-world scenario, you would call your API here
//     const dummyOptimalPath: [number, number][] = [[0, 1], [1, 2], [2, 3]]
//     setOptimalPath(dummyOptimalPath)

//     const optimalEdges = edges.filter(edge => 
//       dummyOptimalPath.some(([s, t]) => 
//         (s === edge.source && t === edge.target) || (s === edge.target && t === edge.source)
//       )
//     )

//     setOptimalCost(optimalEdges.reduce((sum, edge) => sum + edge.cost, 0))
//     setOptimalTime(optimalEdges.reduce((sum, edge) => sum + edge.time, 0))
//   }, [edges])

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Network Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Network Configuration</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="nodes">Number of Nodes</Label>
//                 <Input
//                   id="nodes"
//                   value={inputData.nodes}
//                   onChange={(e) => setInputData({...inputData, nodes: e.target.value})}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edges">Edges</Label>
//                 <Textarea
//                   id="edges"
//                   value={inputData.edges}
//                   onChange={(e) => setInputData({...inputData, edges: e.target.value})}
//                   rows={3}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edge_costs">Edge Costs</Label>
//                 <Input
//                   id="edge_costs"
//                   value={inputData.edge_costs}
//                   onChange={(e) => setInputData({...inputData, edge_costs: e.target.value})}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edge_times">Edge Times</Label>
//                 <Input
//                   id="edge_times"
//                   value={inputData.edge_times}
//                   onChange={(e) => setInputData({...inputData, edge_times: e.target.value})}
//                 />
//               </div>
//               <Button onClick={updateNetwork}>Update Network</Button>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Network Visualization</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <NetworkGraph nodes={nodes} edges={edges} optimalPath={optimalPath} />
//             <Button className="mt-4" onClick={optimizeNetwork}>Optimize Network</Button>
//           </CardContent>
//         </Card>
//       </div>

//       <Card className="mt-6">
//         <CardHeader>
//           <CardTitle>Optimization Results</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-2">
//             <p><strong>Optimal Cost:</strong> {optimalCost}</p>
//             <p><strong>Optimal Time:</strong> {optimalTime}</p>
//             <p><strong>Optimal Path:</strong></p>
//             <ul className="list-disc pl-5">
//               {optimalPath.map(([from, to], index) => (
//                 <li key={index}>
//                   {from} → {to}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// interface NetworkGraphProps {
//   nodes: Node[];
//   edges: Edge[];
//   optimalPath: [number, number][];
// }

// const NetworkGraph: React.FC<NetworkGraphProps> = ({ nodes, edges, optimalPath }) => {
//   const [highlightIndex, setHighlightIndex] = useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setHighlightIndex(prev => (prev + 1) % edges.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [edges.length]);

//   const calculateLabelPosition = (x1: number, y1: number, x2: number, y2: number) => {
//     return {
//       x: (x1 + x2) / 2,
//       y: (y1 + y2) / 2
//     };
//   };

//   const renderNodesAndEdges = () => {
//     const supplierX = 100;
//     const warehouseX = 400;
//     const retailerX = 700;
//     const yStep = 100;
//     const renderedNodes: JSX.Element[] = [];
//     const renderedEdges: JSX.Element[] = [];

//     nodes.forEach((node, index) => {
//       let x;
//       switch (node.type) {
//         case 'supplier':
//           x = supplierX;
//           break;
//         case 'warehouse':
//           x = warehouseX;
//           break;
//         case 'retailer':
//           x = retailerX;
//           break;
//       }
//       const y = (index % 3 + 1) * yStep;
      
//       renderedNodes.push(
//         <Node 
//           key={`node-${node.id}`} 
//           x={x} 
//           y={y} 
//           label={node.label} 
//           isOptimal={optimalPath.some(([s, t]) => s === node.id || t === node.id)}
//         />
//       );
//     });

//     edges.forEach((edge, index) => {
//       const sourceNode = nodes.find(n => n.id === edge.source);
//       const targetNode = nodes.find(n => n.id === edge.target);
//       if (!sourceNode || !targetNode) return;

//       let x1, x2;
//       switch (sourceNode.type) {
//         case 'supplier':
//           x1 = supplierX;
//           break;
//         case 'warehouse':
//           x1 = warehouseX;
//           break;
//         case 'retailer':
//           x1 = retailerX;
//           break;
//       }
//       switch (targetNode.type) {
//         case 'supplier':
//           x2 = supplierX;
//           break;
//         case 'warehouse':
//           x2 = warehouseX;
//           break;
//         case 'retailer':
//           x2 = retailerX;
//           break;
//       }
//       const y1 = ((nodes.findIndex(n => n.id === edge.source) % 3) + 1) * yStep;
//       const y2 = ((nodes.findIndex(n => n.id === edge.target) % 3) + 1) * yStep;

//       const labelPos = calculateLabelPosition(x1, y1, x2, y2);
//       const isOptimal = optimalPath.some(([s, t]) => (s === edge.source && t === edge.target) || (s === edge.target && t === edge.source));
      
//       renderedEdges.push(
//         <Edge
//           key={`edge-${edge.source}-${edge.target}`}
//           x1={x1}
//           y1={y1}
//           x2={x2}
//           y2={y2}
//           cost={edge.cost}
//           time={edge.time}
//           isOptimal={isOptimal}
//           isHighlighted={isOptimal && index === highlightIndex}
//           labelX={labelPos.x}
//           labelY={labelPos.y}
//         />
//       );
//     });

//     return { renderedNodes, renderedEdges };
//   };

//   const { renderedNodes, renderedEdges } = renderNodesAndEdges();

//   return (
//     <div className="relative">
//       <svg viewBox="0 0 800 450" className="w-full h-auto">
//         <rect width="800" height="450" fill="#F3F4F6" />
//         {renderedEdges}
//         {renderedNodes}
//       </svg>
//       <div className="absolute top-4 right-4 flex items-center gap-2">
//         <div className="flex items-center gap-1">
//           <div className="w-4 h-4 bg-green-400 rounded"></div>
//           <span className="text-sm">Optimal Path</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Node: React.FC<{ x: number; y: number; label: string; isOptimal: boolean }> = ({ 
//   x, y, label, isOptimal 
// }) => (
//   <motion.g 
//     initial={{ opacity: 0, scale: 0 }} 
//     animate={{ opacity: 1, scale: 1 }} 
//     transition={{ duration: 0.5 }}
//   >
//     <circle 
//       cx={x} 
//       cy={y} 
//       r="30" 
//       fill={isOptimal ? "#34D399" : "#60A5FA"}
//       className={isOptimal ? "animate-pulse" : ""}
//     />
//     <text x={x} y={y} textAnchor="middle" fill="white" fontSize="12" dy=".3em">{label}</text>
//   </motion.g>
// );

// const Edge: React.FC<{ 
//   x1: number; 
//   y1: number; 
//   x2: number; 
//   y2: number; 
//   cost: number;
//   time: number;
//   isOptimal: boolean;
//   isHighlighted: boolean;
//   labelX: number;
//   labelY: number;
// }> = ({
//   x1, y1, x2, y2, cost, time, isOptimal, isHighlighted, labelX, labelY
// }) => (
//   <motion.g 
//     initial={{ opacity: 0 }} 
//     animate={{ opacity: 1 }} 
//     transition={{ duration: 0.5 }}
//   >
//     <line
//       x1={x1} y1={y1} x2={x2} y2={y2}
//       stroke={isOptimal ? "#34D399" : "#D1D5DB"}
//       strokeWidth={isOptimal ? 3 : 1}
//       strokeDasharray={isHighlighted ? "10,10" : "0,0"}
//       className={isOptimal ? "animate-pulse" : ""}
//     >
//       {isHighlighted && (
//         <animate
//           attributeName="stroke-dashoffset"
//           from="0"
//           to="20"
//           dur="1s"
//           repeatCount="indefinite"
//         />
//       )}
//     </line>
//     <rect
//       x={labelX - 24}
//       y={labelY - 16}
//       width="48"
//       height="32"
//       fill="white"
//       opacity="0.8"
//       rx="4"
//     />
//     <text
//       x={labelX}
//       y={labelY - 4}
//       textAnchor="middle"
//       fill={isOptimal ? "#34D399" : "#6B7280"}
//       fontSize="10"
//       fontWeight={isOptimal ? "bold" : "normal"}
//     >
//       C: {cost}
//     </text>
//     <text
//       x={labelX}
//       y={labelY + 8}
//       textAnchor="middle"
//       fill={isOptimal ? "#34D399" : "#6B7280"}
//       fontSize="10"
//       fontWeight={isOptimal ? "bold" : "normal"}
//     >
//       T: {time}
//     </text>
//   </motion.g>
// );









// 'use client'

// import React, { useState, useCallback } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Textarea } from "@/components/ui/textarea"
// import { motion } from 'framer-motion'

// interface Node {
//   id: number;
//   label: string;
//   type: 'supplier' | 'warehouse' | 'retailer';
// }

// interface Edge {
//   source: number;
//   target: number;
//   cost: number;
//   time: number;
// }

// export default function NetworkDashboard() {
//   const [nodes, setNodes] = useState<Node[]>([])
//   const [edges, setEdges] = useState<Edge[]>([])
//   const [optimalPath, setOptimalPath] = useState<[number, number][]>([])
//   const [optimalCost, setOptimalCost] = useState<number>(0)
//   const [optimalTime, setOptimalTime] = useState<number>(0)

//   const [inputData, setInputData] = useState({
//     nodes: '4',
//     edges: '[(0, 1), (1, 2), (2, 3), (0, 2), (1, 3)]',
//     edge_costs: '[4, 2, 3, 5, 6]',
//     edge_times: '[10, 8, 7, 12, 15]',
//   })

//   const updateNetwork = useCallback(() => {
//     const numNodes = parseInt(inputData.nodes)
    
//     // Custom parsing for edge list
//     const edgeList = inputData.edges
//       .replace(/[\[\]]/g, '')
//       .split('),')
//       .map(pair => pair.replace(/[()]/g, '').split(',').map(Number));

//     const costs = JSON.parse(inputData.edge_costs)
//     const times = JSON.parse(inputData.edge_times)

//     const newNodes: Node[] = Array.from({ length: numNodes }, (_, i) => ({
//       id: i,
//       label: `Node ${i}`,
//       type: i < numNodes / 3 ? 'supplier' : i < 2 * numNodes / 3 ? 'warehouse' : 'retailer'
//     }))

//     const newEdges: Edge[] = edgeList.map(([source, target], index) => ({
//       source,
//       target,
//       cost: costs[index],
//       time: times[index]
//     }))

//     setNodes(newNodes)
//     setEdges(newEdges)
//     setOptimalPath([])
//   }, [inputData])

//   const optimizeNetwork = useCallback(() => {
//     // This is a placeholder for the actual optimization algorithm
//     // In a real-world scenario, you would call your API here
//     const dummyOptimalPath: [number, number][] = [[0, 1], [1, 2], [2, 3]]
//     setOptimalPath(dummyOptimalPath)

//     const optimalEdges = edges.filter(edge => 
//       dummyOptimalPath.some(([s, t]) => 
//         (s === edge.source && t === edge.target) || (s === edge.target && t === edge.source)
//       )
//     )

//     setOptimalCost(optimalEdges.reduce((sum, edge) => sum + edge.cost, 0))
//     setOptimalTime(optimalEdges.reduce((sum, edge) => sum + edge.time, 0))
//   }, [edges])

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Network Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <Card>
//           <CardHeader>
//             <CardTitle>Network Configuration</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div>
//                 <Label htmlFor="nodes">Number of Nodes</Label>
//                 <Input
//                   id="nodes"
//                   value={inputData.nodes}
//                   onChange={(e) => setInputData({...inputData, nodes: e.target.value})}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edges">Edges</Label>
//                 <Textarea
//                   id="edges"
//                   value={inputData.edges}
//                   onChange={(e) => setInputData({...inputData, edges: e.target.value})}
//                   rows={3}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edge_costs">Edge Costs</Label>
//                 <Input
//                   id="edge_costs"
//                   value={inputData.edge_costs}
//                   onChange={(e) => setInputData({...inputData, edge_costs: e.target.value})}
//                 />
//               </div>
//               <div>
//                 <Label htmlFor="edge_times">Edge Times</Label>
//                 <Input
//                   id="edge_times"
//                   value={inputData.edge_times}
//                   onChange={(e) => setInputData({...inputData, edge_times: e.target.value})}
//                 />
//               </div>
//               <Button onClick={updateNetwork}>Update Network</Button>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Network Visualization</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <NetworkGraph nodes={nodes} edges={edges} optimalPath={optimalPath} />
//             <Button className="mt-4" onClick={optimizeNetwork}>Optimize Network</Button>
//           </CardContent>
//         </Card>
//       </div>

//       <Card className="mt-6">
//         <CardHeader>
//           <CardTitle>Optimization Results</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-2">
//             <p><strong>Optimal Cost:</strong> {optimalCost}</p>
//             <p><strong>Optimal Time:</strong> {optimalTime}</p>
//             <p><strong>Optimal Path:</strong></p>
//             <ul className="list-disc pl-5">
//               {optimalPath.map(([from, to], index) => (
//                 <li key={index}>
//                   {from} → {to}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }









































// "use client";

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from   "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// function Page() {
//   const [nodes, setNodes] = useState<string>("");
//   const [edges, setEdges] = useState<string>("");
//   const [edgeCosts, setEdgeCosts] = useState<string>("");
//   const [edgeTimes, setEdgeTimes] = useState<string>("");

//   const updateNetwork = async () => {
//     try {
//       var dataa = {
//       "parsedNodes" : JSON.stringify(nodes),
//       "parsedEdges" : JSON.stringify(edges),
//       "parsedEdgeCosts" : JSON.stringify(edgeCosts),
//       "parsedEdgeTimes" : JSON.stringify(edgeTimes),
//     };

//       const response = await fetch("/api/path/optimal_with_time", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(dataa),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to update network");
//       }

//     } catch (error) {
//       console.error("Error updating network:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold">Network Optimization</h1>
//       <Input
//         placeholder="Number of Nodes"
//         value={nodes}
//         onChange={(e) => setNodes(e.target.value)}
//       />
//       <Textarea
//         placeholder="Edges (e.g., [[0,1],[1,2]])"
//         value={edges}
//         onChange={(e) => setEdges(e.target.value)}
//       />
//       <Input
//         placeholder="Edge Costs (e.g., [10,15,20])"
//         value={edgeCosts}
//         onChange={(e) => setEdgeCosts(e.target.value)}
//       />
//       <Input
//         placeholder="Edge Times (e.g., [2,3,4])"
//         value={edgeTimes}
//         onChange={(e) => setEdgeTimes(e.target.value)}
//       />
//       <Button onClick={updateNetwork}>Update Network</Button>
//     </div>
//   );
// }

// export default Page;



// interface NetworkGraphProps {
//   nodes: Node[];
//   edges: Edge[];
//   optimalPath: [number, number][];
// }

// const NetworkGraph: React.FC<NetworkGraphProps> = ({ nodes, edges, optimalPath }) => {
//   const [highlightIndex, setHighlightIndex] = useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setHighlightIndex(prev => (prev + 1) % edges.length);
//     }, 2000);
//     return () => clearInterval(interval);
//   }, [edges.length]);

//   const calculateLabelPosition = (x1: number, y1: number, x2: number, y2: number) => {
//     return {
//       x: (x1 + x2) / 2,
//       y: (y1 + y2) / 2
//     };
//   };

//   const renderNodesAndEdges = () => {
//     const supplierX = 100;
//     const warehouseX = 400;
//     const retailerX = 700;
//     const yStep = 100;
//     const renderedNodes = [];
//     const renderedEdges = [];

//     nodes.forEach((node, index) => {
//       let x;
//       switch (node.type) {
//         case 'supplier':
//           x = supplierX;
//           break;
//         case 'warehouse':
//           x = warehouseX;
//           break;
//         case 'retailer':
//           x = retailerX;
//           break;
//       }
//       const y = (index % 3 + 1) * yStep;
      
//       renderedNodes.push(
//         <Node 
//           key={`node-${node.id}`} 
//           x={x} 
//           y={y} 
//           label={node.label} 
//           isOptimal={optimalPath.some(([s, t]) => s === node.id || t === node.id)}
//         />
//       );
//     });

//     edges.forEach((edge, index) => {
//       const sourceNode = nodes.find(n => n.id === edge.source);
//       const targetNode = nodes.find(n => n.id === edge.target);
//       if (!sourceNode || !targetNode) return;

//       let x1, x2;
//       switch (sourceNode.type) {
//         case 'supplier':
//           x1 = supplierX;
//           break;
//         case 'warehouse':
//           x1 = warehouseX;
//           break;
//         case 'retailer':
//           x1 = retailerX;
//           break;
//       }
//       switch (targetNode.type) {
//         case 'supplier':
//           x2 = supplierX;
//           break;
//         case 'warehouse':
//           x2 = warehouseX;
//           break;
//         case 'retailer':
//           x2 = retailerX;
//           break;
//       }
//       const y1 = ((nodes.findIndex(n => n.id === edge.source) % 3) + 1) * yStep;
//       const y2 = ((nodes.findIndex(n => n.id === edge.target) % 3) + 1) * yStep;

//       const labelPos = calculateLabelPosition(x1, y1, x2, y2);
//       const isOptimal = optimalPath.some(([s, t]) => (s === edge.source && t === edge.target) || (s === edge.target && t === edge.source));
      
//       renderedEdges.push(
//         <Edge
//           key={`edge-${edge.source}-${edge.target}`}
//           x1={x1}
//           y1={y1}
//           x2={x2}
//           y2={y2}
//           cost={edge.cost}
//           time={edge.time}
//           isOptimal={isOptimal}
//           isHighlighted={isOptimal && index === highlightIndex}
//           labelX={labelPos.x}
//           labelY={labelPos.y}
//         />
//       );
//     });

//     return { renderedNodes, renderedEdges };
//   };

//   const { renderedNodes, renderedEdges } = renderNodesAndEdges();

//   return (
//     <div className="relative">
//       <svg viewBox="0 0 800 450" className="w-full h-auto">
//         <rect width="800" height="450" fill="#F3F4F6" />
//         {renderedEdges}
//         {renderedNodes}
//       </svg>
//       <div className="absolute top-4 right-4 flex items-center gap-2">
//         <div className="flex items-center gap-1">
//           <div className="w-4 h-4 bg-green-400 rounded"></div>
//           <span className="text-sm">Optimal Path</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Node: React.FC<{ x: number; y: number; label: string; isOptimal: boolean }> = ({ 
//   x, y, label, isOptimal 
// }) => (
//   <motion.g 
//     initial={{ opacity: 0, scale: 0 }} 
//     animate={{ opacity: 1, scale: 1 }} 
//     transition={{ duration: 0.5 }}
//   >
//     <circle 
//       cx={x} 
//       cy={y} 
//       r="30" 
//       fill={isOptimal ? "#34D399" : "#60A5FA"}
//       className={isOptimal ? "animate-pulse" : ""}
//     />
//     <text x={x} y={y} textAnchor="middle" fill="white" fontSize="12" dy=".3em">{label}</text>
//   </motion.g>
// );

// const Edge: React.FC<{ 
//   x1: number; 
//   y1: number; 
//   x2: number; 
//   y2: number; 
//   cost: number;
//   time: number;
//   isOptimal: boolean;
//   isHighlighted: boolean;
//   labelX: number;
//   labelY: number;
// }> = ({
//   x1, y1, x2, y2, cost, time, isOptimal, isHighlighted, labelX, labelY
// }) => (
//   <motion.g 
//     initial={{ opacity: 0 }} 
//     animate={{ opacity: 1 }} 
//     transition={{ duration: 0.5 }}
//   >
//     <line
//       x1={x1} y1={y1} x2={x2} y2={y2}
//       stroke={isOptimal ? "#34D399" : "#D1D5DB"}
//       strokeWidth={isOptimal ? 3 : 1}
//       strokeDasharray={isHighlighted ? "10,10" : "0,0"}
//       className={isOptimal ? "animate-pulse" : ""}
//     >
//       {isHighlighted && (
//         <animate
//           attributeName="stroke-dashoffset"
//           from="0"
//           to="20"
//           dur="1s"
//           repeatCount="indefinite"
//         />
//       )}
//     </line>
//     <rect
//       x={labelX - 24}
//       y={labelY - 16}
//       width="48"
//       height="32"
//       fill="white"
//       opacity="0.8"
//       rx="4"
//     />
//     <text
//       x={labelX}
//       y={labelY - 4}
//       textAnchor="middle"
//       fill={isOptimal ? "#34D399" : "#6B7280"}
//       fontSize="10"
//       fontWeight={isOptimal ? "bold" : "normal"}
//     >
//       C: {cost}
//     </text>
//     <text
//       x={labelX}
//       y={labelY + 8}
//       textAnchor="middle"
//       fill={isOptimal ? "#34D399" : "#6B7280"}
//       fontSize="10"
//       fontWeight={isOptimal ? "bold" : "normal"}
//     >
//       T: {time}
//     </text>
//   </motion.g>
// );





















































































































// "use client";

// import { useState } from "react";
// import { InputSection } from "@/components/ui/input-section";
// import { Button } from "@/components/ui/button";

// function Page() {
//   interface Node {
//     id: number;
//     label: string;
//   }

//   interface Edge {
//     source: number;
//     target: number;
//     cost: number;
//     time?: number;
//   }

//   interface Data {
//     nodes: Node[];
//     edges: Edge[];
//     edgeCosts: number[];
//     edgeTimes: number[];
//     optimalPath: [number, number][];
//     optimalCost: number;
//     totalTime: number;
//   }

//   const [data, setData] = useState<Data>({
//     nodes: [],
//     edges: [],
//     edgeCosts: [],
//     edgeTimes: [],
//     optimalPath: [],
//     optimalCost: 0,
//     totalTime: 0,
//   });

//   const handleInputSubmit = (nodes: number, edges: [number, number][], edgeCosts: number[], edgeTimes: number[]) => {
//     console.log("Submitted Network Data:");
//     console.log("Nodes:", nodes);
//     console.log("Edges:", edges);
//     console.log("Edge Costs:", edgeCosts);
//     console.log("Edge Times:", edgeTimes);

//     const newNodes = Array.from({ length: nodes }, (_, i) => ({
//       id: i,
//       label: i === 0 ? "Source" : i === nodes - 1 ? "Target" : `DC ${i}`,
//     }));

//     const newEdges = edges.map((edge, i) => ({
//       source: edge[0],
//       target: edge[1],
//       cost: edgeCosts[i],
//       time: edgeTimes[i],
//     }));

//     setData({ ...data, nodes: newNodes, edges: newEdges, edgeCosts, edgeTimes });
//   };

//   const handlePathOptimizationSubmit = async () => {
//     try {
//       var pathData = {
//         nodes: data.nodes.map((node) => node.id),
//         edges: data.edges.map((edge) => [edge.source, edge.target]),
//         edgeCosts: data.edgeCosts,
//         edgeTimes: data.edgeTimes,
//       };
//       const response = await fetch("http://127.0.0.1:8000/api/path/optimal", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           nodes: data.nodes.length,
//           edges: data.edges,
//           edgeCosts: data.edgeCosts,
//           edgeTimes: data.edgeTimes,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch optimization results");
//       }

//       const result = await response.json();
//       console.log("Optimization Results:", result);

//       setData({
//         ...data,
//         optimalPath: result.selected_edges,
//         optimalCost: result.optimal_cost,
//         totalTime: result.total_time,
//       });
//     } catch (error) {
//       console.error("Error optimizing path:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 space-y-4">
//       <h1 className="text-3xl font-bold">Supply Chain Path Optimization Dashboard</h1>
//       <InputSection onSubmit={handleInputSubmit} />
//       <div className="mt-4">
//         <Button onClick={handlePathOptimizationSubmit}>Run Path Optimization</Button>
//       </div>
//     </div>
//   );
// }

// export default Page;





















































// "use client";

// import React, { useState, useEffect } from "react"
// import { NetworkVisualization } from "@/components/ui/NetworkVisualization"
// import { OptimizationStats } from "@/components/ui/optimization-stats"
// import { InputSection } from "@/components/ui/input-section"
// import { Button } from "@/components/ui/button"
// import { motion } from "framer-motion"
// import { Loader2 } from 'lucide-react'

// // Initial sample data
// const initialData = {
//   nodes: [
//     { id: 0, label: "Source" },
//     { id: 1, label: "DC 1" },
//     { id: 2, label: "DC 2" },
//     { id: 3, label: "DC 3" },
//     { id: 4, label: "DC 4" },
//     { id: 5, label: "DC 5" },
//     { id: 6, label: "Target" },
//   ],
//   edges: [
//     { source: 0, target: 1, cost: 10 },
//     { source: 1, target: 2, cost: 15 },
//     { source: 2, target: 3, cost: 20 },
//     { source: 3, target: 4, cost: 10 },
//     { source: 0, target: 2, cost: 25 },
//     { source: 1, target: 3, cost: 30 },
//     { source: 0, target: 3, cost: 35 },
//     { source: 4, target: 5, cost: 56 },
//     { source: 3, target: 5, cost: 12 },
//     { source: 2, target: 5, cost: 78 },
//     { source: 4, target: 6, cost: 45 },
//     { source: 5, target: 6, cost: 12 },
//   ],
//   optimalPath: [
//     [0, 3] as [number, number],
//     [3, 5] as [number, number],
//     [5, 6] as [number, number],
//   ],
//   optimalCost: 59,
//   pathCosts: [100, 85, 70, 59],
//   iterations: [1, 2, 3, 4],
//   edgeTimes: [2, 3, 4, 2, 5, 6, 7, 11, 2, 16, 9, 2],
//   totalTime: 0,
// }

// const DashboardPage = () => {
//   const [data, setData] = useState(initialData)
//   const [isLoading, setIsLoading] = useState(false)
//   const [animateOptimalPath, setAnimateOptimalPath] = useState(false)

//   useEffect(() => {
//     if (animateOptimalPath) {
//       const timer = setTimeout(() => setAnimateOptimalPath(false), 2000)
//       return () => clearTimeout(timer)
//     }
//   }, [animateOptimalPath])

//   const handlePathOptimizationSubmit = async () => {
//     setIsLoading(true)
//     try {
//       const response = await fetch("/api/path/optimal", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           nodes: data.nodes.length,
//           edges: data.edges.map(e => [e.source, e.target]),
//           edgeCosts: data.edges.map(e => e.cost),
//           edgeTimes: data.edgeTimes,
//         }),
//       });

//       if (!response.ok) throw new Error("Failed to fetch path optimization results.");

//       const result = await response.json();
//       setData((prev) => ({
//         ...prev,
//         optimalPath: result.selected_edges.map((e: [number, number]) => ({ source: e[0], target: e[1] })),
//         optimalCost: result.optimal_cost,
//         totalTime: result.total_time,
//       }));
//       setAnimateOptimalPath(true)
//     } catch (error) {
//       console.error("Error in Path Optimization:", error);
//     } finally {
//       setIsLoading(false)
//     }
//   };

//   const handleInputSubmit = (nodes: number, edges: [number, number][], edgeCosts: number[], edgeTimes: number[]) => {
//     const newNodes = Array.from({ length: nodes }, (_, i) => ({
//       id: i,
//       label: i === 0 ? "Source" : i === nodes - 1 ? "Target" : `DC ${i}`,
//     }))

//     const newEdges = edges.map((edge, i) => ({
//       source: edge[0],
//       target: edge[1],
//       cost: edgeCosts[i],
//     }))

//     setData({
//       ...data,
//       nodes: newNodes,
//       edges: newEdges,
//       edgeTimes: edgeTimes,
//     })
//   }

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="container mx-auto p-4 space-y-4"
//     >
//       <h1 className="text-3xl font-bold">Supply Chain Path Optimization Dashboard</h1>
//       <p className="text-muted-foreground">
//         Visualizing optimal routes, costs, and times in your supply chain network using quantum computing optimization
//       </p>
//       <div className="grid gap-4 md:grid-cols-2">
//         <InputSection onSubmit={handleInputSubmit} />
//         <NetworkVisualization
//           nodes={data.nodes}
//           edges={data.edges}
//           optimalPath={data.optimalPath}
//           animate={animateOptimalPath}
//         />
//       </div>
//       <OptimizationStats
//         optimalCost={data.optimalCost}
//         totalTime={data.totalTime}
//         pathCosts={data.pathCosts}
//         iterations={data.iterations}
//       />
//       <Button 
//         onClick={handlePathOptimizationSubmit}
//         disabled={isLoading}
//         className="w-full"
//       >
//         {isLoading ? (
//           <>
//             <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//             Optimizing...
//           </>
//         ) : (
//           'Optimize Path'
//         )}
//       </Button>
//     </motion.div>
//   )
// }

// export default DashboardPage;

































































































































































































































































































































































// import React, { useState } from "react";
// import { Button } from "@mui/material";

// interface Edge {
//   source: number;
//   target: number;
//   cost: number;
// }

// interface Data {
//   nodes: number;
//   edges: Edge[];
//   optimalPath?: number[];
//   optimalCost?: number;
// }

// const handlePathOptimizationSubmit = async () => {
//     try {
//       var jsonData = {
//         "nodes": nodes,
//         "edges": edges,
//         "edge_costs": edge_Costs,
//       };
//     const response = await fetch("http://127.0.0.1:8000/api/path/optimal", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(jsonData),
//       // body: JSON.stringify({
//       //   supplier_to_warehouse_cost: supplierToWarehouseCost,
//       //   warehouse_to_retailer_cost: warehouseToRetailerCost,
//       //   supplier_inventory: supplierInventory,
//       //   warehouse_inventory: warehouseInventory,
//       //   retailer_inventory: retailerInventory,
//       // }),
//     });
//     console.log(jsonData);

//     if (!response.ok) throw new Error("Failed to fetch cost optimization results.");

//     const result = await response.json();
//     console.log(result);
//     nodes(result.nodes);
//     edges(result.edges);
//     edge_costs(result.edge_costs);
//   } catch (error) {
//     console.error("Error in Cost Optimization:", error);
//   }


// // const App = () => {
// //   const [data, setData] = useState<Data>({ nodes: 0, edges: [] });

// //   const handlePathOptimizationSubmit = async (nodes: number, edges: [number, number][], edgeCosts: number[]) => {
// //     try {
// //       const response = await fetch("http://localhost:8000/api/path/optimal", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ nodes, edges, edgeCosts }),
// //       });

// //       if (!response.ok) throw new Error("Failed to fetch path optimization results.");

// //       const result = await response.json();
// //       setData((prev) => ({
// //         ...prev,
// //         optimalPath: result.selected_edges,
// //         optimalCost: result.optimal_cost,
// //       }));
// //     } catch (error) {
// //       console.error("Error in Path Optimization:", error);
// //     }
// //   };

//   return (
//     <div>
//       {/* ... other UI elements ... */}
//       <Button onClick={handlePathOptimizationSubmit}>Optimize Path</Button>
//       {/* ... other UI elements ... */}
//     </div>
//   );
//  };

// export default App;







'use client'

import React, { useState, useCallback, JSX } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { motion } from 'framer-motion'

interface Node {
  id: number;
  label: string;
  type: 'supplier' | 'warehouse' | 'retailer';
}

interface Edge {
  source: number;
  target: number;
  cost: number;
  time: number;
}

export default function NetworkDashboard() {
  const [nodes, setNodes] = useState<Node[]>([])
  const [edges, setEdges] = useState<Edge[]>([])
  const [optimalPath, setOptimalPath] = useState<[number, number][]>([])
  const [optimalCost, setOptimalCost] = useState<number>(0)
  const [optimalTime, setOptimalTime] = useState<number>(0)

  const [inputData, setInputData] = useState({
    nodes: '4',
    edges: '[(0, 1), (1, 2), (2, 3), (0, 2), (1, 3)]',
    edge_costs: '[4, 2, 3, 5, 6]',
    edge_times: '[10, 8, 7, 12, 15]',
  })

  const updateNetwork = useCallback(() => {
    const numNodes = parseInt(inputData.nodes)
    
    // Custom parsing for edge list
    const edgeList = inputData.edges
      .replace(/[\[\]]/g, '')
      .split('),')
      .map(pair => pair.replace(/[()]/g, '').split(',').map(Number));

    const costs = JSON.parse(inputData.edge_costs)
    const times = JSON.parse(inputData.edge_times)

    const newNodes: Node[] = Array.from({ length: numNodes }, (_, i) => ({
      id: i,
      label: `Node ${i}`,
      type: i < numNodes / 3 ? 'supplier' : i < 2 * numNodes / 3 ? 'warehouse' : 'retailer'
    }))

    const newEdges: Edge[] = edgeList.map(([source, target], index) => ({
      source,
      target,
      cost: costs[index],
      time: times[index]
    }))

    setNodes(newNodes)
    setEdges(newEdges)
    setOptimalPath([])
  }, [inputData])

  const optimizeNetwork = useCallback(() => {
    // This is a placeholder for the actual optimization algorithm
    // In a real-world scenario, you would call your API here
    const dummyOptimalPath: [number, number][] = [[0, 1], [1, 2], [2, 3]]
    setOptimalPath(dummyOptimalPath)

    const optimalEdges = edges.filter(edge => 
      dummyOptimalPath.some(([s, t]) => 
        (s === edge.source && t === edge.target) || (s === edge.target && t === edge.source)
      )
    )

    setOptimalCost(optimalEdges.reduce((sum, edge) => sum + edge.cost, 0))
    setOptimalTime(optimalEdges.reduce((sum, edge) => sum + edge.time, 0))
  }, [edges])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Network Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Network Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="nodes">Number of Nodes</Label>
                <Input
                  id="nodes"
                  value={inputData.nodes}
                  onChange={(e) => setInputData({...inputData, nodes: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edges">Edges</Label>
                <Textarea
                  id="edges"
                  value={inputData.edges}
                  onChange={(e) => setInputData({...inputData, edges: e.target.value})}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="edge_costs">Edge Costs</Label>
                <Input
                  id="edge_costs"
                  value={inputData.edge_costs}
                  onChange={(e) => setInputData({...inputData, edge_costs: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="edge_times">Edge Times</Label>
                <Input
                  id="edge_times"
                  value={inputData.edge_times}
                  onChange={(e) => setInputData({...inputData, edge_times: e.target.value})}
                />
              </div>
              

                {/* <Button onClick={async () => {
                try {
                  
                  const response = await fetch("http://127.0.0.1:8000/api/path/optimal_with_time", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(inputData),
                  });
                  console

                  if (!response.ok) throw new Error("Failed to fetch optimal bitstring.");

                  const result = await response.json();

                  if (result.inputData) {
                  // Update the bitstring state with the fetched optimal bitstring
                  (result.inputData);
                  } else {
                  console.error("Optimal bitstring data is undefined or null.");
                  }
                } catch (error) {
                  console.error("Error fetching optimal bitstring:", error);
                }
                }}>Update Network</Button>
              <Button onClick={updateNetwork}>Upload Network</Button> */}
              {/* <Button
                onClick={async () => {
                  try {
                    console.log("Sending data:", inputData);

                    // Make the POST request
                    const response = await fetch("http://127.0.0.1:8000/api/path/optimal_with_time", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(inputData),
                    });

                    // Check for response errors
                    if (!response.ok) {
                      const errorDetails = await response.text();
                      console.error("Error response from server:", errorDetails);
                      throw new Error(`Failed to fetch optimal path. Status: ${response.status}`);
                    }

                    // Parse and log the response
                    const result = await response.json();
                    console.log("Received data from server:", result);

                    // Update state based on the response
                    if (result.optimalPath && result.optimalCost !== undefined && result.optimalTime !== undefined) {
                      setOptimalPath(result.optimalPath);
                      setOptimalCost(result.optimalCost);
                      setOptimalTime(result.optimalTime);
                    } else {
                      console.error("Server response is incomplete or invalid:", result);
                    }
                  } catch (error) {
                    console.error("Error occurred while fetching optimal path:", error);
                  }
                }}
              >
                Update Network
              </Button>
              <Button onClick={updateNetwork}>Upload Network</Button> */}
              {/* <Button
  onClick={async () => {
    try {
      console.log("Sending data:", inputData);

      // Parse and transform inputData to match the API's expected structure
      const parsedData = {
        nodes: parseInt(inputData.nodes),
        edges: JSON.parse(inputData.edges.replace(/\(/g, "[").replace(/\)/g, "]")),
        edgeCosts: JSON.parse(inputData.edge_costs),
        edgeTimes: JSON.parse(inputData.edge_times),
      };

      console.log("Parsed data:", parsedData);

      // Make the POST request
      const response = await fetch("http://127.0.0.1:8000/api/path/optimal_with_time", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedData),
      });

      // Check for response errors
      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Error response from server:", errorDetails);
        throw new Error(`Failed to fetch optimal path. Status: ${response.status}`);
      }

      // Parse and log the response
      const result = await response.json();
      console.log("Received data from server:", result);

      // Update state based on the response
      if (result.optimalPath && result.optimalCost !== undefined && result.optimalTime !== undefined) {
        setOptimalPath(result.optimalPath);
        setOptimalCost(result.optimalCost);
        setOptimalTime(result.optimalTime);
      } else {
        console.error("Server response is incomplete or invalid:", result);
      }
    } catch (error) {
      console.error("Error occurred while fetching optimal path:", error);
    }
  }}
>
  Update Network
</Button> */}
<Button

  onClick={async () => {
    try {
      updateNetwork();
      console.log("Sending data:", inputData);

      const parsedData = {
        nodes: parseInt(inputData.nodes),
        // edges: JSON.parse(inputData.edges.replace(/[\(\)]/g, "[").replace(/,/g, ",")),
        edges: JSON.parse(inputData.edges.replace(/\(/g, "[").replace(/\)/g, "]")),
        edgeCosts: JSON.parse(inputData.edge_costs),
        edgeTimes: JSON.parse(inputData.edge_times),
      };

      console.log("Parsed data:", parsedData);

      const response = await fetch("http://127.0.0.1:8000/api/path/optimal_with_time", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedData),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Error response from server:", errorDetails);
        throw new Error(`Failed to fetch optimal path. Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Received data from server:", result);

      // Check if optimalPath exists; fallback to handling only optimalCost and optimalTime
      if (result.selected_edges) {
        setOptimalPath(result.selected_edges);
      } else {
        console.warn("optimalPath is missing from the server response.");
      }

      // Always set cost and time if present
      if (result.optimal_cost !== undefined) {
        setOptimalCost(result.optimal_cost);
      }

      if (result.optimal_time !== undefined) {
        setOptimalTime(result.optimal_time);
      }

    } catch (error) {
      console.error("Error occurred while fetching optimal path:", error);
    }
  }}
>Update Network</Button>



            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Network Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            <NetworkGraph nodes={nodes} edges={edges} optimalPath={optimalPath} />
            <Button className="mt-4" onClick={optimizeNetwork}>Optimize Network</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Optimization Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p><strong>Optimal Cost:</strong> {optimalCost}</p>
            <p><strong>Optimal Time:</strong> {optimalTime}</p>
            <p><strong>Optimal Path:</strong></p>
            <ul className="list-disc pl-5">
              {optimalPath.map(([from, to], index) => (
                <li key={index}>
                  {from} → {to}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface NetworkGraphProps {
  nodes: Node[];
  edges: Edge[];
  optimalPath: [number, number][];
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ nodes, edges, optimalPath }) => {
  const [highlightIndex, setHighlightIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % edges.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [edges.length]);

  const calculateLabelPosition = (x1: number, y1: number, x2: number, y2: number) => {
    return {
      x: (x1 + x2) / 2,
      y: (y1 + y2) / 2
    };
  };

  const renderNodesAndEdges = () => {
    const supplierX = 100;
    const warehouseX = 400;
    const retailerX = 700;
    const yStep = 100;
    const renderedNodes: JSX.Element[] = [];
    const renderedEdges: JSX.Element[] = [];

    nodes.forEach((node, index) => {
      let x;
      switch (node.type) {
        case 'supplier':
          x = supplierX;
          break;
        case 'warehouse':
          x = warehouseX;
          break;
        case 'retailer':
          x = retailerX;
          break;
      }
      const y = (index % 3 + 1) * yStep;
      
      renderedNodes.push(
        <Node 
          key={`node-${node.id}`} 
          x={x} 
          y={y} 
          label={node.label} 
          isOptimal={optimalPath.some(([s, t]) => s === node.id || t === node.id)}
        />
      );
    });

    edges.forEach((edge, index) => {
      const sourceNode = nodes.find(n => n.id === edge.source);
      const targetNode = nodes.find(n => n.id === edge.target);
      if (!sourceNode || !targetNode) return;

      let x1, x2;
      switch (sourceNode.type) {
        case 'supplier':
          x1 = supplierX;
          break;
        case 'warehouse':
          x1 = warehouseX;
          break;
        case 'retailer':
          x1 = retailerX;
          break;
      }
      switch (targetNode.type) {
        case 'supplier':
          x2 = supplierX;
          break;
        case 'warehouse':
          x2 = warehouseX;
          break;
        case 'retailer':
          x2 = retailerX;
          break;
      }
      const y1 = ((nodes.findIndex(n => n.id === edge.source) % 3) + 1) * yStep;
      const y2 = ((nodes.findIndex(n => n.id === edge.target) % 3) + 1) * yStep;

      const labelPos = calculateLabelPosition(x1, y1, x2, y2);
      const isOptimal = optimalPath.some(([s, t]) => (s === edge.source && t === edge.target) || (s === edge.target && t === edge.source));
      
      renderedEdges.push(
        <Edge
          key={`edge-${edge.source}-${edge.target}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          cost={edge.cost}
          time={edge.time}
          isOptimal={isOptimal}
          isHighlighted={isOptimal && index === highlightIndex}
          labelX={labelPos.x}
          labelY={labelPos.y}
        />
      );
    });

    return { renderedNodes, renderedEdges };
  };

  const { renderedNodes, renderedEdges } = renderNodesAndEdges();

  return (
    <div className="relative">
      <svg viewBox="0 0 800 450" className="w-full h-auto">
        <rect width="800" height="450" fill="#F3F4F6" />
        {renderedEdges}
        {renderedNodes}
      </svg>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-green-400 rounded"></div>
          <span className="text-sm">Optimal Path</span>
        </div>
      </div>
    </div>
  );
};

const Node: React.FC<{ x: number; y: number; label: string; isOptimal: boolean }> = ({ 
  x, y, label, isOptimal 
}) => (
  <motion.g 
    initial={{ opacity: 0, scale: 0 }} 
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <circle 
      cx={x} 
      cy={y} 
      r="30" 
      fill={isOptimal ? "#34D399" : "#60A5FA"}
      className={isOptimal ? "animate-pulse" : ""}
    />
    <text x={x} y={y} textAnchor="middle" fill="white" fontSize="12" dy=".3em">{label}</text>
  </motion.g>
);

const Edge: React.FC<{ 
  x1: number; 
  y1: number; 
  x2: number; 
  y2: number; 
  cost: number;
  time: number;
  isOptimal: boolean;
  isHighlighted: boolean;
  labelX: number;
  labelY: number;
}> = ({
  x1, y1, x2, y2, cost, time, isOptimal, isHighlighted, labelX, labelY
}) => (
  <motion.g 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={isOptimal ? "#34D399" : "#D1D5DB"}
      strokeWidth={isOptimal ? 3 : 1}
      strokeDasharray={isHighlighted ? "10,10" : "0,0"}
      className={isOptimal ? "animate-pulse" : ""}
    >
      {isHighlighted && (
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="20"
          dur="1s"
          repeatCount="indefinite"
        />
      )}
    </line>
    <rect
      x={labelX - 24}
      y={labelY - 16}
      width="48"
      height="32"
      fill="white"
      opacity="0.8"
      rx="4"
    />
    <text
      x={labelX}
      y={labelY - 4}
      textAnchor="middle"
      fill={isOptimal ? "#34D399" : "#6B7280"}
      fontSize="10"
      fontWeight={isOptimal ? "bold" : "normal"}
    >
      C: {cost}
    </text>
    <text
      x={labelX}
      y={labelY + 8}
      textAnchor="middle"
      fill={isOptimal ? "#34D399" : "#6B7280"}
      fontSize="10"
      fontWeight={isOptimal ? "bold" : "normal"}
    >
      T: {time}
    </text>
  </motion.g>
);

