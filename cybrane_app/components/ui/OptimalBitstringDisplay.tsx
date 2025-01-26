
// 'use client'

// import React from 'react'
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { motion } from 'framer-motion'

// interface OptimalBitstringDisplayProps {
//   bitstring: string
// }

// const OptimalBitstringDisplay: React.FC<OptimalBitstringDisplayProps> = ({ bitstring }) => {
//   const supplierToWarehouse = bitstring.slice(0, 9)
//   const warehouseToRetailer = bitstring.slice(9)

//   const createMatrix = (str: string, rows: number, cols: number) => {
//     const matrix = []
//     for (let i = 0; i < rows; i++) {
//       matrix.push(str.slice(i * cols, (i + 1) * cols).split(''))
//     }
//     return matrix
//   }

//   const supplierMatrix = createMatrix(supplierToWarehouse, 3, 3)
//   const warehouseMatrix = createMatrix(warehouseToRetailer, 3, 3)

//   const MotionTableRow = motion(TableRow)

//   const getTransferSummary = (matrix: string[][], sourceType: string, destinationType: string) => {
//     const summary: string[] = []
//     matrix.forEach((row, sourceIndex) => {
//       row.forEach((bit, destIndex) => {
//         if (bit === '1') {
//           summary.push(`${sourceType} ${sourceIndex + 1} transfers 1 unit to ${destinationType} ${destIndex + 1}.`)
//         }
//       })
//     })
//     return summary.length > 0 ? summary : [`No transfers from ${sourceType} to ${destinationType}.`]
//   }

//   const supplierSummary = getTransferSummary(supplierMatrix, 'Supplier', 'Warehouse')
//   const warehouseSummary = getTransferSummary(warehouseMatrix, 'Warehouse', 'Retailer')

//   return (
//     <Card className="w-full">
//       <CardHeader>
//         <CardTitle>Optimal Bitstring Analysis</CardTitle>
//         <CardDescription>Supply Chain Optimization Results</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-lg font-semibold mb-2">Optimal Bitstring</h3>
//             <div className="flex flex-wrap gap-1">
//               {bitstring.split('').map((bit, index) => (
//                 <motion.span
//                   key={index}
//                   className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold ${
//                     bit === '1' ? 'bg-green-500' : 'bg-gray-400'
//                   }`}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3, delay: index * 0.05 }}
//                 >
//                   {bit}
//                 </motion.span>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Supplier to Warehouse Transfers</h3>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Supplier</TableHead>
//                   <TableHead>Warehouse 1</TableHead>
//                   <TableHead>Warehouse 2</TableHead>
//                   <TableHead>Warehouse 3</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {supplierMatrix.map((row, index) => (
//                   <MotionTableRow
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <TableCell>Supplier {index + 1}</TableCell>
//                     {row.map((bit, bitIndex) => (
//                       <TableCell key={bitIndex} className={bit === '1' ? 'bg-green-100' : ''}>
//                         {bit === '1' ? 'Transfer' : 'No Transfer'}
//                       </TableCell>
//                     ))}
//                   </MotionTableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Warehouse to Retailer Transfers</h3>
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Warehouse</TableHead>
//                   <TableHead>Retailer 1</TableHead>
//                   <TableHead>Retailer 2</TableHead>
//                   <TableHead>Retailer 3</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {warehouseMatrix.map((row, index) => (
//                   <MotionTableRow
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <TableCell>Warehouse {index + 1}</TableCell>
//                     {row.map((bit, bitIndex) => (
//                       <TableCell key={bitIndex} className={bit === '1' ? 'bg-green-100' : ''}>
//                         {bit === '1' ? 'Transfer' : 'No Transfer'}
//                       </TableCell>
//                     ))}
//                   </MotionTableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-2">Interpretation</h3>
//             <div className="space-y-4">
//               <div>
//                 <h4 className="text-md font-semibold">Supplier to Warehouse Transfers:</h4>
//                 <ul className="list-disc pl-5 space-y-1">
//                   {supplierSummary.map((summary, index) => (
//                     <li key={index}>{summary}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div>
//                 <h4 className="text-md font-semibold">Warehouse to Retailer Transfers:</h4>
//                 <ul className="list-disc pl-5 space-y-1">
//                   {warehouseSummary.map((summary, index) => (
//                     <li key={index}>{summary}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

// export default OptimalBitstringDisplay




























// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// interface OptimalBitstringProps {
//   bitstring: string
// }

// export default function OptimalBitstring({ bitstring }: OptimalBitstringProps) {
//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Optimal Bitstring</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p className="font-mono text-lg">{bitstring}</p>
//       </CardContent>
//     </Card>
//   )
// }




import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface OptimalBitstringDisplayProps {
  bitstring: string;
}

const OptimalBitstringDisplay: React.FC<OptimalBitstringDisplayProps> = ({ bitstring }) => {
  const supplierToWarehouse = bitstring.slice(0, 9).match(/.{1,3}/g) || [];
  const warehouseToRetailer = bitstring.slice(9).match(/.{1,3}/g) || [];

  return (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>From</TableHead>
            <TableHead>To</TableHead>
            <TableHead>Transfer</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {supplierToWarehouse.map((bits, i) => (
            bits.split('').map((bit, j) => (
              bit === '1' && (
                <TableRow key={`s-w-${i}-${j}`}>
                  <TableCell>Supplier {i + 1}</TableCell>
                  <TableCell>Warehouse {j + 1}</TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
              )
            ))
          )).flat()}
          {warehouseToRetailer.map((bits, i) => (
            bits.split('').map((bit, j) => (
              bit === '1' && (
                <TableRow key={`w-r-${i}-${j}`}>
                  <TableCell>Warehouse {i + 1}</TableCell>
                  <TableCell>Retailer {j + 1}</TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
              )
            ))
          )).flat()}
        </TableBody>
      </Table>
    </div>
  );
};

export default OptimalBitstringDisplay;

