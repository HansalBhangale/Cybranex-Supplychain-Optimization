// 'use client'

// import React, { useState, useCallback, JSX } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Textarea } from "@/components/ui/textarea"
// import { motion } from 'framer-motion'
// import { NetworkVisualization } from "@/components/ui/NetworkVisualization"
// import { OptimizationStats } from "@/components/ui/optimization-stats"
// import { InputSection } from "@/components/ui/input-section"

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

//   const updateNetwork = async (nodes, edges, edgeCosts, edgeTimes) => {
//     try {
//       const response = await fetch("/api/path/update", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ nodes, edges, edgeCosts, edgeTimes }),
//       });

//       if (!response.ok) throw new Error("Failed to update network");

//       console.log("Network updated successfully");
//     } catch (error) {
//       console.error("Error updating network:", error);
//     }
//   };

//   const fetchOptimizedPath = async () => {
//     try {
//       const response = await fetch("/api/path/optimal_with_time", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) throw new Error("Failed to fetch optimized path");

//       const result = await response.json();
//       setNodes(result.nodes);
//       setEdges(result.edges);
//       setOptimalPath(result.selected_edges);
//       setOptimalCost(result.optimal_cost);
//       setOptimalTime(result.total_time);

//       console.log("Optimized Path:", result);
//     } catch (error) {
//       console.error("Error fetching optimized path:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold">Network Optimization</h1>
//       <p className="text-muted-foreground">
//         Visualize optimal routes, costs, and times in your network.
//       </p>
//       <div className="grid gap-4 md:grid-cols-2">
//         <InputSection
//           onSubmit={(nodes, edges, edgeCosts, edgeTimes) => {
//             updateNetwork(nodes, edges, edgeCosts, edgeTimes);
//           }}
//         />
//         <NetworkVisualization
//           nodes={nodes}
//           edges={edges}
//           optimalPath={optimalPath}
//         />
//       </div>
//       <OptimizationStats
//         optimalCost={optimalCost}
//         pathCosts={optimalCost}
//         totalTime={optimalTime}
//       />
//       <Button onClick={fetchOptimizedPath}>Optimize Network</Button>
//     </div>
//   );
// }