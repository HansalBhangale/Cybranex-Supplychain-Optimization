// "use client"

// import { useState } from "react"
// import { NetworkVisualization } from "@/components/ui/path_network-visualization"
// import { OptimizationStats } from "@/components/ui/optimization-stats"
// import { InputSection } from "@/components/ui/input-section"

// export default function DashboardPage() {
//   const [data, setData] = useState<{
//     nodes: { id: number; label: string }[];
//     Edge: { source: number; target: number; cost: number }[];
//     optimalPath: [number, number][];
//     optimalCost: number;
//   } | null>(null);

//   const [isLoading, setIsLoading] = useState(false);

//   const handleInputSubmit = async (nodes: number, Edge: [number, number][], EdgeCosts: number[]) => {
//     setIsLoading(true);
//     try {
//       const response = await fetch('/api/optimize', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ nodes, Edge, EdgeCosts }),
//       });

//       if (!response.ok) {
//         throw new Error('Optimization failed');
//       }

//       const result = await response.json();

//       const newNodes = Array.from({ length: nodes }, (_, i) => ({
//         id: i,
//         label: i === 0 ? "Source" : i === nodes - 1 ? "Target" : `DC ${i}`,
//       }));

//       const newEdge = Edge.map((Edge, i) => ({
//         source: Edge[0],
//         target: Edge[1],
//         cost: EdgeCosts[i],
//       }));

//       setData({
//         nodes: newNodes,
//         Edge: newEdge,
//         optimalPath: result.optimal_path,
//         optimalCost: result.optimal_cost,
//       });
//     } catch (error) {
//       console.error('Error during optimization:', error);
//       // Handle error (e.g., show an error message to the user)
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <div className="container mx-auto p-4 space-y-4">
//       <h1 className="text-3xl font-bold">Supply Chain Path Optimization Dashboard</h1>
//       <p className="text-muted-foreground">
//         Visualizing optimal routes and costs in your supply chain network using quantum computing
//         optimization
//       </p>
//       <div className="grid gap-4 md:grid-cols-2">
//         <InputSection onSubmit={handleInputSubmit} />
//         {isLoading ? (
//           <div>Loading...</div>
//         ) : data ? (
//           <>
//             <NetworkVisualization
//               nodes={data.nodes}
//               edges={data.Edge}
//               optimalPath={data.optimalPath}
//             />
//             <OptimizationStats
//               optimalCost={data.optimalCost}
//               pathCosts={[data.optimalCost]} // You might want to update this if you have historical data
//               iterations={[1]} // You might want to update this if you have iteration data
//             />
//           </>
//         ) : (
//           <div>Enter network data and click &quot;Optimize&quot; to see results.</div>
//         )}
//       </div>
//     </div>
//   )
// }












// "use client"
// import { useRef, useEffect } from 'react';
// import * as d3 from 'd3';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import MyComponent from './path/to/MyComponent';



// interface Edge {
//   source: number // Change this to `number` instead of `Node`
//   target: number // Change this to `number` instead of `Node`
//   cost: number
//   selected?: boolean
// }

// interface NetworkVisualizationProps {
//   nodes: { id: number; label: string; x?: number; y?: number; vx?: number; vy?: number }[];
//   edges: Edge[];
//   optimalPath: [number, number][];
// }

// export function NetworkVisualization({ nodes, edges, optimalPath }: NetworkVisualizationProps) {
//   const svgRef = useRef<SVGSVGElement>(null)


//   // const MyComponent = () => {
//     const MyComponent = () => {
//     const ref = useRef(null);


//   useEffect(() => {
//     if (!svgRef.current) return

//     // Clear previous visualization
//     d3.select(svgRef.current).selectAll("*").remove()

//     const width = 800
//     const height = 600
//     const margin = { top: 20, right: 20, bottom: 20, left: 20 }

//     // Create SVG
//     const svg = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`)

//     // Create force simulation
//     const simulation = d3
//       .forceSimulation(nodes as d3.SimulationNodeDatum[])
//       .force(
//         "link",
//         d3
//           .forceLink(edges)
//           .id((d: any) => d.id)
//           .distance(100)
//       )
//       .force("charge", d3.forceManyBody().strength(-1000))
//       .force("center", d3.forceCenter(width / 2, height / 2))

//     // Draw edges
//     const link = svg
//       .selectAll(".link")
//       .data(edges)
//       .enter()
//       .append("g")
//       .attr("class", "link")

//     // Add edge lines
//     link
//       .append("line")
//       .style("stroke", (d: Edge) =>
//         optimalPath.some(([s, t]) => s === d.source && t === d.target) ? "green" : "#999"
//       )
//       .style("stroke-width", (d: Edge) =>
//         optimalPath.some(([s, t]) => s === d.source && t === d.target) ? 4 : 3
//       )

//     // Add edge cost labels
//     link
//       .append("text")
//       .attr("class", "edge-label")
//       .text((d: Edge) => d.cost)
//       .attr("fill", "#666")
//       .attr("font-size", "12px")

//     // Draw nodes
//     const node = svg
//       .selectAll(".node")
//       .data(nodes)
//       .enter()
//       .append("g")
//       .attr("class", "node")

//     // Add node circles
//     node
//       .append("circle")
//       .attr("r", 30)
//       .style("fill", (d: { id: number; label: string; x?: number; y?: number; vx?: number; vy?: number }) =>
//         optimalPath.some(([s, t]) => s === d.id || t === d.id) ? "green" : "hsl(var(--secondary))"
//       )

//     // Add node labels
//     node
//       .append("text")
//       // .text((d: Node) => d.label)
//       .text((d: { id: number; label: string; x?: number; y?: number; vx?: number; vy?: number }) => d.label)

//       .attr("text-anchor", "middle")
//       .attr("dy", ".35em")
//       .attr("fill", "white")

//     // Update positions on simulation tick
//     simulation.on("tick", () => {
//       link
//         .selectAll("line")
//         // .attr("x1", (d: Edge) => d.source.x)
//         // .attr("y1", (d: Edge) => d.source.y)
//         // .attr("x2", (d: Edge) => d.target.x)
//         // .attr("y2", (d: Edge) => d.target.y)


//       .style("stroke", (d: any) =>

//         optimalPath.some(([s, t]) => s === (d as Edge).source && t === (d as Edge).target) ? "green" : "#999"

//       )

//       .style("stroke-width", (d: any) =>

//         optimalPath.some(([s, t]) => s === (d as Edge).source && t === (d as Edge).target) ? 4 : 3

//       )





//       link
//         .selectAll("text")
//         // .attr("x", (d: Edge) => (d.source.x + d.target.x) / 2)
//         // .attr("y", (d: Edge) => (d.source.y + d.target.y) / 2)


//       .attr("x", (d: any) => ((d.source as any).x + (d.target as any).x) / 2)

//       .attr("y", (d: any) => ((d.source as any).y + (d.target as any).y) / 2)


//       node.attr("transform", (d: { id: number; label: string; x?: number; y?: number; vx?: number; vy?: number }) => `translate(${d.x},${d.y})`)
//     })

//     return () => {
//       simulation.stop()
//     }
//     }, [nodes, edges, optimalPath]);
//   };



//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Supply Chain Network Optimization</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="relative aspect-[4/3] w-full">
//           <svg ref={svgRef} className="absolute inset-0" />
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
    





























// "use client";

// import React, { useRef, useEffect, FC } from "react";
// import * as d3 from "d3";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// interface Node {
//   id: number;
//   label: string;
//   x?: number;
//   y?: number;
//   vx?: number;
//   vy?: number;
// }

// interface Edge {
//   source: number;
//   target: number;
//   cost: number;
//   selected?: boolean;
// }

// interface NetworkVisualizationProps {
//   nodes: Node[];
//   edges: Edge[];
//   optimalPath: [number, number][];
// }

// export const NetworkVisualization: FC<NetworkVisualizationProps> = ({
//   nodes,
//   edges,
//   optimalPath,
// }) => {
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Clear previous visualization
//     const svg = d3.select(svgRef.current).selectAll("*").remove();

//     const width = 800;
//     const height = 600;
//     const margin = { top: 20, right: 20, bottom: 20, left: 20 };

//     // Create SVG container
//     const container = d3
//       .select(svgRef.current)
//       .attr("width", width)
//       .attr("height", height)
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     // Force simulation
//     const simulation = d3
//       .forceSimulation(nodes)
//       .force(
//         "link",
//         d3
//           .forceLink(edges)
//           .id((d: any) => d.id)
//           .distance(100)
//       )
//       .force("charge", d3.forceManyBody().strength(-1000))
//       .force("center", d3.forceCenter(width / 2, height / 2));

//     // Add links
//     const link = container
//       .selectAll(".link")
//       .data(edges)
//       .enter()
//       .append("g")
//       .attr("class", "link");

//     link
//       .append("line")
//       .style("stroke", (d) =>
//         optimalPath.some(([s, t]) => s === d.source && t === d.target) ? "green" : "#999"
//       )
//       .style("stroke-width", (d) =>
//         optimalPath.some(([s, t]) => s === d.source && t === d.target) ? 4 : 2
//       );

//     link
//       .append("text")
//       .attr("class", "edge-label")
//       .text((d) => d.cost.toString())
//       .attr("fill", "#666")
//       .attr("font-size", "12px");

//     // Add nodes
//     const node = container
//       .selectAll(".node")
//       .data(nodes)
//       .enter()
//       .append("g")
//       .attr("class", "node");

//     node
//       .append("circle")
//       .attr("r", 30)
//       .style("fill", (d) =>
//         optimalPath.some(([s, t]) => s === d.id || t === d.id) ? "green" : "hsl(var(--secondary))"
//       );

//     node
//       .append("text")
//       .text((d) => d.label)
//       .attr("text-anchor", "middle")
//       .attr("dy", ".35em")
//       .attr("fill", "white");

//     simulation.on("tick", () => {
//       link

//         .style("stroke", (d: any) =>

//           optimalPath.some(([s, t]) => s === (d as Edge).source && t === (d as Edge).target) ? "green" : "#999"
  
//         )
  
//         .style("stroke-width", (d: any) =>
  
//           optimalPath.some(([s, t]) => s === (d as Edge).source && t === (d as Edge).target) ? 4 : 3
  
//         )
  

//       link
//         .selectAll("text")
//         // .attr("x", (d: any) => (nodes[d.source].x + nodes[d.target].x) / 2)
//         // .attr("y", (d: any) => (nodes[d.source].y + nodes[d.target].y) / 2);

//         .attr("x", (d: any) => ((d.source as any).x + (d.target as any).x) / 2)

//       .attr("y", (d: any) => ((d.source as any).y + (d.target as any).y) / 2)


//       node.attr("transform", (d: { id: number; label: string; x?: number; y?: number; vx?: number; vy?: number }) => `translate(${d.x},${d.y})`)
//     })

//       // node.attr("transform", (d) => `translate(${d.x},${d.y})`);
//     });

//     return () => {
//       simulation.stop();
//     }
//   }, 
// };[nodes, edges, optimalPath]);

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Supply Chain Network Optimization</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="relative aspect-[4/3] w-full">
//           <svg ref={svgRef} className="absolute inset-0" />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };























// "use client";

// import React, { useRef, useEffect, FC } from "react";
// import * as d3 from "d3";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// interface Node {
//   id: number;
//   label: string;
//   x?: number;
//   y?: number;
//   vx?: number;
//   vy?: number;
// }

// interface Edge {
//   source: Node;
//   target: Node;
//   cost: number;
//   selected?: boolean;
// }

// interface NetworkVisualizationProps {
//   nodes: Node[];
//   edges: Edge[];
//   optimalPath: [number, number][];
// }

// export const NetworkVisualization: FC<NetworkVisualizationProps> = ({
//   nodes,
//   edges,
//   optimalPath,
// }) => {
//   const svgRef = useRef<SVGSVGElement>(null);

//   useEffect(() => {
//     if (!svgRef.current) return;

//     // Clear previous visualization
//     const svg = d3.select(svgRef.current);
//     svg.selectAll("*").remove();

//     const width = 800;
//     const height = 600;
//     const margin = { top: 20, right: 20, bottom: 20, left: 20 };

//     // Create SVG container
//     const container = svg
//       .attr("width", width)
//       .attr("height", height)
//       .append("g")
//       .attr("transform", `translate(${margin.left},${margin.top})`);

//     // Force simulation
//     const simulation = d3
//       .forceSimulation<Node>(nodes)
//       .force(
//         "link",
//         d3
//           .forceLink<Node, Edge>(edges)
//           .id((d) => d.id)
//           .distance(100)
//       )
//       .force("charge", d3.forceManyBody().strength(-1000))
//       .force("center", d3.forceCenter(width / 2, height / 2));

//     // Add links
//     const link = container
//       .selectAll(".link")
//       .data(edges)
//       .enter()
//       .append("g")
//       .attr("class", "link");

//     link
//       .append("line")
//       .style("stroke", (d) =>
//         optimalPath.some(([s, t]) => s === d.source.id && t === d.target.id) ? "green" : "#999"
//       )
//       .style("stroke-width", (d) =>
//         optimalPath.some(([s, t]) => s === d.source.id && t === d.target.id) ? 4 : 2
//       );

//     link
//       .append("text")
//       .attr("class", "edge-label")
//       .text((d) => d.cost.toString())
//       .attr("fill", "#666")
//       .attr("font-size", "12px");

//     // Add nodes
//     const node = container
//       .selectAll(".node")
//       .data(nodes)
//       .enter()
//       .append("g")
//       .attr("class", "node");

//     node
//       .append("circle")
//       .attr("r", 30)
//       .style("fill", (d) =>
//         optimalPath.some(([s, t]) => s === d.id || t === d.id) ? "green" : "hsl(var(--secondary))"
//       );

//     node
//       .append("text")
//       .text((d) => d.label)
//       .attr("text-anchor", "middle")
//       .attr("dy", ".35em")
//       .attr("fill", "white");

//     simulation.on("tick", () => {
//       link
//         .selectAll("line")
//         .attr("x1", (d) => d.source.x!)
//         .attr("y1", (d) => d.source.y!)
//         .attr("x2", (d) => d.target.x!)
//         .attr("y2", (d) => d.target.y!)
//         .style("stroke", (d) =>
//           optimalPath.some(([s, t]) => s === d.source.id && t === d.target.id) ? "green" : "#999"
//         )
//         .style("stroke-width", (d) =>
//           optimalPath.some(([s, t]) => s === d.source.id && t === d.target.id) ? 4 : 3
//         );

//       link
//         .selectAll("text")
//         .attr("x", (d) => (d.source.x! + d.target.x!) / 2)
//         .attr("y", (d) => (d.source.y! + d.target.y!) / 2);

//       node.attr("transform", (d) => `translate(${d.x},${d.y})`);
//     });

//     return () => {
//       simulation.stop();
//     };
//   }, [nodes, edges, optimalPath]);

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Supply Chain Network Optimization</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="relative aspect-[4/3] w-full">
//           <svg ref={svgRef} className="absolute inset-0" />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };



















// import { NetworkVisualization } from "@/components/ui/NetworkVisualization"

// // Sample data for the network visualization
// const nodes = [
//   { id: 1, label: "A" },
//   { id: 2, label: "B" },
//   { id: 3, label: "C" },
//   { id: 4, label: "D" },
// ]

// const edges = [
//   { source: 1, target: 2, cost: 10 },
//   { source: 1, target: 3, cost: 15 },
//   { source: 2, target: 3, cost: 5 },
//   { source: 2, target: 4, cost: 12 },
//   { source: 3, target: 4, cost: 8 },
// ]

// const optimalPath: [number, number][] = [[1, 2], [2, 3], [3, 4]]

// export default function NetworkVisualizationPage() {
//   return (
//     <div className="container mx-auto py-10">
//       <h1 className="text-3xl font-bold mb-6">Network Visualization</h1>
//       <NetworkVisualization nodes={nodes} edges={edges} optimalPath={optimalPath} />
//     </div>
//   )
// }












// // import { NetworkVisualization, Node, Edge } from "@/components/ui/NetworkVisualization"

// // Sample data for the network visualization
// const nodes: Node[] = [
//   { id: 1, label: "A" },
//   { id: 2, label: "B" },
//   { id: 3, label: "C" },
//   { id: 4, label: "D" },
// ]

// const edges: Edge[] = [
//   { source: 1, target: 2, cost: 10 },
//   { source: 1, target: 3, cost: 15 },
//   { source: 2, target: 3, cost: 5 },
//   { source: 2, target: 4, cost: 12 },
//   { source: 3, target: 4, cost: 8 },
// ]

// const optimalPath: [number, number][] = [[1, 2], [2, 3], [3, 4]]

// export default function NetworkVisualizationPage() {
//   return (
//     <div className="container mx-auto py-10">
//       <h1 className="text-3xl font-bold mb-6">Network Visualization</h1>
//       <NetworkVisualization nodes={nodes} edges={edges} optimalPath={optimalPath} />
//     </div>
//   )
// }

