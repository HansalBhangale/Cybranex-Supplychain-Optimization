// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

// interface OptimizationStatsProps {
//   optimalCost: number
//   pathCosts: number[]
//   iterations: number[]
// }

// export function OptimizationStats({ optimalCost, pathCosts, iterations }: OptimizationStatsProps) {
//   const chartData = iterations.map((iteration, index) => ({
//     iteration: `Iter ${iteration}`,
//     cost: pathCosts[index],
//   }))

//   return (
//     <div className="grid gap-4 md:grid-cols-2">
//       <Card>
//         <CardHeader>
//           <CardTitle>Optimal Path Cost</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="text-45xl font-bold">{optimalCost}</div>
//           <p className="text-sm text-muted-foreground">Total transportation cost units</p>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader>
//           <CardTitle>Optimum Time </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="h-[200px] w-full">
//             <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="iteration" />
//               <YAxis />
//               <Bar dataKey="cost" fill="hsl(var(--primary))" />
//             </BarChart>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }









interface OptimizationStatsProps {
  optimalCost: number
  pathCosts: number[]
  iterations: number[]
  totalTime: number
}

export const OptimizationStats: React.FC<OptimizationStatsProps> = ({
  optimalCost,
  pathCosts,
  iterations,
  totalTime,
}) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Optimization Statistics</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Optimal Cost:</p>
          <p>{optimalCost}</p>
        </div>
        <div>
          <p className="font-medium">Total Time:</p>
          <p>{totalTime}</p>
        </div>
        {/* ... (keep the existing chart for path costs) */}
      </div>
    </div>
  )
}













































































// import React from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { motion } from "framer-motion"

// interface OptimizationStatsProps {
//   optimalCost: number
//   totalTime: number
//   pathCosts: number[]
//   iterations: number[]
// }

// export const OptimizationStats: React.FC<OptimizationStatsProps> = ({
//   optimalCost,
//   totalTime,
//   pathCosts,
//   iterations,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="grid gap-4 md:grid-cols-2"
//     >
//       <Card>
//         <CardHeader>
//           <CardTitle>Optimal Cost</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-2xl font-bold">{optimalCost}</p>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader>
//           <CardTitle>Total Time</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-2xl font-bold">{totalTime}</p>
//         </CardContent>
//       </Card>
//       {/* Add more cards for pathCosts and iterations if needed */}
//     </motion.div>
//   )
// }

