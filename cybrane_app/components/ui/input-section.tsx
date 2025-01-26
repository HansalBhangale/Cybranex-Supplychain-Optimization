"use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// interface InputSectionProps {
//   onSubmit: (nodes: number, edges: [number, number][], edgeCosts: number[]) => void
// }

// export function InputSection({ onSubmit }: InputSectionProps) {
//   const [nodes, setNodes] = useState("7")
//   const [edges, setEdges] = useState("[(0, 1), (1, 2), (2, 3), (3, 4), (0, 2), (1, 3), (0, 3), (4, 5), (3, 5), (2, 5), (4, 6), (5, 6)]")
//   const [edgeCosts, setEdgeCosts] = useState("[10, 15, 20, 10, 25, 30, 35, 56, 12, 78, 45, 12]")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const parsedNodes = parseInt(nodes, 10)
//     const parsedEdges = JSON.parse(edges.replace(/$$/g, "[").replace(/$$/g, "]")) as [number, number][]
//     const parsedEdgeCosts = JSON.parse(edgeCosts) as number[]
//     onSubmit(parsedNodes, parsedEdges, parsedEdgeCosts)
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Input Network Data</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="nodes">Number of Nodes</Label>
//             <Input
//               id="nodes"
//               value={nodes}
//               onChange={(e) => setNodes(e.target.value)}
//               placeholder="Enter number of nodes"
//             />
//           </div>
//           <div>
//             <Label htmlFor="edges">Edges</Label>
//             <Textarea
//               id="edges"
//               value={edges}
//               onChange={(e) => setEdges(e.target.value)}
//               placeholder="Enter edges as a list of tuples"
//               rows={3}
//             />
//           </div>
//           <div>
//             <Label htmlFor="edgeCosts">Edge Costs</Label>
//             <Textarea
//               id="edgeCosts"
//               value={edgeCosts}
//               onChange={(e) => setEdgeCosts(e.target.value)}
//               placeholder="Enter edge costs as a list of numbers"
//               rows={3}
//             />
//           </div>
//           <Button type="submit">Update Network</Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }




// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// interface InputSectionProps {
//   onSubmit: (nodes: number, edges: [number, number][], edgeCosts: number[]) => void
// }

// export function InputSection({ onSubmit }: InputSectionProps) {
//   const [nodes, setNodes] = useState("7")
//   const [edges, setEdges] = useState("[[0, 1], [1, 2], [2, 3], [3, 4], [0, 2], [1, 3], [0, 3], [4, 5], [3, 5], [2, 5], [4, 6], [5, 6]]")
//   const [edgeCosts, setEdgeCosts] = useState("[10, 15, 20, 10, 25, 30, 35, 56, 12, 78, 45, 12]")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const { parsedNodes, parsedEdges, parsedEdgeCosts } = parseInputs(nodes, edges, edgeCosts)
//     onSubmit(parsedNodes, parsedEdges, parsedEdgeCosts)
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Input Network Data</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="nodes">Number of Nodes</Label>
//             <Input
//               id="nodes"
//               value={nodes}
//               onChange={(e) => setNodes(e.target.value)}
//               placeholder="Enter number of nodes"
//             />
//           </div>
//           <div>
//             <Label htmlFor="edges">Edges</Label>
//             <Textarea
//               id="edges"
//               value={edges}
//               onChange={(e) => setEdges(e.target.value)}
//               placeholder="Enter edges as a list of tuples"
//               rows={3}
//             />
//           </div>
//           <div>
//             <Label htmlFor="edgeCosts">Edge Costs</Label>
//             <Textarea
//               id="edgeCosts"
//               value={edgeCosts}
//               onChange={(e) => setEdgeCosts(e.target.value)}
//               placeholder="Enter edge costs as a list of numbers"
//               rows={3}
//             />
//           </div>
//           <Button type="submit">Update Network</Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }

// function parseInputs(nodes: string, edges: string, edgeCosts: string) {
//   const parsedNodes = parseInt(nodes, 10);
//   const parsedEdges = JSON.parse(
//     edges
//       .replace(/\(/g, "[")
//       .replace(/\)/g, "]")
//       .replace(/(\d+),\s*(\d+)/g, "[$1,$2]")
//   ) as [number, number][];
//   const parsedEdgeCosts = JSON.parse(edgeCosts) as number[];

//   return { parsedNodes, parsedEdges, parsedEdgeCosts };
// }
















































// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button'; // Assuming Button component exists

// const [nodes, setNodes] = useState("7")
//   const [edges, setEdges] = useState("[(0, 1), (1, 2), (2, 3), (3, 4), (0, 2), (1, 3), (0, 3), (4, 5), (3, 5), (2, 5), (4, 6), (5, 6)]")
//   const [edgeCosts, setEdgeCosts] = useState("[10, 15, 20, 10, 25, 30, 35, 56, 12, 78, 45, 12]")

// interface InputSectionProps {
//   onSubmit: (nodes: number, edges: [number, number][], edgeCosts: number[], edgeTimes: number[]) => void
// }
// const handlePathOptimizationSubmit = async () => {
//     try {
//       var pathdata = {
//         "nodes" : nodes,
//         "edges" : edges,
//         "edge_costs" : edgeCosts,
//         "edge_times" : edgeTimes,
//       };
//       const response = await fetch("http://127.0.0.1:8000/api/path/optimal", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           nodes: data.nodes.length,
//           edges: data.edges.map((e) => [e.source, e.target]),
//           edgeCosts: data.edges.map((e) => e.cost),
//           edgeTimes: data.edgeTimes,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch optimization results");
//       }

//       const result = await response.json();
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

// export const InputSection: React.FC<InputSectionProps> = ({ onSubmit }) => {
//   const [nodes, setNodes] = useState(7)
//   const [edges, setEdges] = useState<[number, number][]>([])
//   const [edgeCosts, setEdgeCosts] = useState<number[]>([])
//   const [edgeTimes, setEdgeTimes] = useState<number[]>([])

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(nodes, edges, edgeCosts, edgeTimes);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label htmlFor="nodes" className="block text-sm font-medium text-gray-700">
//           Number of Nodes
//         </label>
//         <input
//           type="number"
//           id="nodes"
//           value={nodes}
//           onChange={(e) => setNodes(parseInt(e.target.value, 10))}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <div>
//         <label htmlFor="edges" className="block text-sm font-medium text-gray-700">
//           Edges (comma-separated pairs, e.g., 1,2,3,4)
//         </label>
//         <input
//           type="text"
//           id="edges"
//           value={edges.map(([u, v]) => `${u},${v}`).join(';')}
//           onChange={(e) => {
//             const pairs = e.target.value.split(';').map(pair => {
//               const [u, v] = pair.split(',').map(Number);
//               return [u, v] as [number, number];
//             });
//             setEdges(pairs);
//           }}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <div>
//         <label htmlFor="edgeCosts" className="block text-sm font-medium text-gray-700">
//           Edge Costs (comma-separated)
//         </label>
//         <input
//           type="text"
//           id="edgeCosts"
//           value={edgeCosts.join(',')}
//           onChange={(e) => setEdgeCosts(e.target.value.split(',').map(Number))}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <div>
//         <label htmlFor="edgeTimes" className="block text-sm font-medium text-gray-700">
//           Edge Times (comma-separated)
//         </label>
//         <input
//           type="text"
//           id="edgeTimes"
//           value={edgeTimes.join(',')}
//           onChange={(e) => setEdgeTimes(e.target.value.split(',').map(Number))}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <Button type="submit">Update Network</Button>
//     </form>
//   )
// }


















































































// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";

// interface InputSectionProps {
//   onSubmit: (nodes: number, edges: [number, number][], edgeCosts: number[], edgeTimes: number[]) => void;
// }

// export const InputSection: React.FC<InputSectionProps> = ({ onSubmit }) => {
//   const [nodes, setNodes] = useState(7);
//   const [edges, setEdges] = useState<[number, number][]>([]);
//   const [edgeCosts, setEdgeCosts] = useState<number[]>([]);
//   const [edgeTimes, setEdgeTimes] = useState<number[]>([]);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Log the input data to the console
//     console.log("Nodes:", nodes);
//     console.log("Edges:", edges);
//     console.log("Edge Costs:", edgeCosts);
//     console.log("Edge Times:", edgeTimes);

//     // Submit the parsed data
//     onSubmit(nodes, edges, edgeCosts, edgeTimes);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label htmlFor="nodes" className="block text-sm font-medium text-gray-700">
//           Number of Nodes
//         </label>
//         <input
//           type="number"
//           id="nodes"
//           value={nodes}
//           onChange={(e) => setNodes(parseInt(e.target.value, 10))}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <div>
//         <label htmlFor="edges" className="block text-sm font-medium text-gray-700">
//           Edges (comma-separated pairs, e.g., 1,2;3,4)
//         </label>
//         <input
//           type="text"
//           id="edges"
//           value={edges.map(([u, v]) => `${u},${v}`).join(";")}
//           onChange={(e) => {
//             const pairs = e.target.value.split(";").map(pair => {
//               const [u, v] = pair.split(",").map(Number);
//               return [u, v] as [number, number];
//             });
//             setEdges(pairs);
//           }}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <div>
//         <label htmlFor="edgeCosts" className="block text-sm font-medium text-gray-700">
//           Edge Costs (comma-separated)
//         </label>
//         <input
//           type="text"
//           id="edgeCosts"
//           value={edgeCosts.join(",")}
//           onChange={(e) => setEdgeCosts(e.target.value.split(",").map(Number))}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <div>
//         <label htmlFor="edgeTimes" className="block text-sm font-medium text-gray-700">
//           Edge Times (comma-separated)
//         </label>
//         <input
//           type="text"
//           id="edgeTimes"
//           value={edgeTimes.join(",")}
//           onChange={(e) => setEdgeTimes(e.target.value.split(",").map(Number))}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       </div>
//       <Button type="submit">Update Network</Button>
//     </form>
//   );
// };
































































import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface InputSectionProps {
  onSubmit: (nodes: number, edges: [number, number][], edgeCosts: number[], edgeTimes: number[]) => void;
}

export const InputSection: React.FC<InputSectionProps> = ({ onSubmit }) => {
  const [nodes, setNodes] = useState(7);
  const [edges, setEdges] = useState<[number, number][]>([
   
  ]);
  const [edgeCosts, setEdgeCosts] = useState<number[]>([]);
  const [edgeTimes, setEdgeTimes] = useState<number[]>([]);

  const parseEdges = (input: string): [number, number][] => {
    return input
      .split(";")
      .map(pair => {
        const [u, v] = pair.split(",").map(num => parseInt(num.trim(), 10));
        return !isNaN(u) && !isNaN(v) ? [u, v] : null;
      })
      .filter((edge): edge is [number, number] => edge !== null);
  };

  const parseNumbers = (input: string): number[] => {
    return input
      .split(",")
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Log the input data to the console
    console.log("Nodes:", nodes);
    console.log("Edges:", edges);
    console.log("Edge Costs:", edgeCosts);
    console.log("Edge Times:", edgeTimes);
   

    // Submit the parsed data
    onSubmit(nodes, edges, edgeCosts, edgeTimes);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nodes" className="block text-sm font-medium text-gray-700">
          Number of Nodes
        </label>
        <input
          type="number"
          id="nodes"
          value={nodes}
          onChange={(e) => setNodes(parseInt(e.target.value, 10) || 0)}
          placeholder="7"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="edges" className="block text-sm font-medium text-gray-700">
          Edges (comma-separated pairs, e.g., 1,2;3,4)
        </label>
        <input
          type="text"
          id="edges"
          value={edges.map(([u, v]) => `${u},${v}`).join(";")}
          onChange={(e) => setEdges(parseEdges(e.target.value))}
          placeholder="0,1;1,2;2,3;3,4;0,2;1,3;0,3;4,5;3,5;2,5;4,6;5,6"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="edgeCosts" className="block text-sm font-medium text-gray-700">
          Edge Costs (comma-separated)
        </label>
        <input
          type="text"
          id="edgeCosts"
          value={edgeCosts.join(",")}
          onChange={(e) => setEdgeCosts(parseNumbers(e.target.value))}
          placeholder="10,15,20,10,25,30,35,56,12,78,45,12"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="edgeTimes" className="block text-sm font-medium text-gray-700">
          Edge Times (comma-separated)
        </label>
        <input
          type="text"
          id="edgeTimes"
          value={edgeTimes.join(",")}
          onChange={(e) => setEdgeTimes(parseNumbers(e.target.value))}
          placeholder="10,8,7,12,15,10,6,2,23,10,5,8"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <Button type="submit">Update Network</Button>
    </form>
  );
};
