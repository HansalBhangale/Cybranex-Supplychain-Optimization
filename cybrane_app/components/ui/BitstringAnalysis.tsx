// // 'use client'

// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'

// interface BitstringAnalysisProps {
//   bitstring: string
//   supplierCount?: number
//   warehouseCount?: number
//   retailerCount?: number
// }

// export function BitstringAnalysis({ 
//   bitstring = '',
//   supplierCount = 3,
//   warehouseCount = 3,
//   retailerCount = 3
// }: BitstringAnalysisProps) {
//   const warehouseToSupplier = bitstring.slice(0, 9).split('')
//   const supplierToRetailer = bitstring.slice(9, 18).split('')

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Optimal Bitstring Analysis</CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <div className="flex gap-2 flex-wrap">
//           {bitstring.split('').map((bit, i) => (
//             <div
//               key={i}
//               className={`w-8 h-8 rounded-full flex items-center justify-center font-mono
//                 ${bit === '1' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
//             >
//               {bit}
//             </div>
//           ))}
//         </div>

//         <div className="space-y-6">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Warehouse</TableHead>
//                 {Array.from({ length: supplierCount }).map((_, index) => (
//                   <TableHead key={index}>Supplier {index + 1}</TableHead>
//                 ))}
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {Array.from({ length: warehouseCount }).map((_, warehouseIndex) => (
//                 <TableRow key={warehouseIndex}>
//                   <TableCell>Warehouse {warehouseIndex + 1}</TableCell>
//                   {Array.from({ length: supplierCount }).map((_, supplierIndex) => {
//                     const isTransfer = warehouseToSupplier[warehouseIndex * supplierCount + supplierIndex] === '1'
//                     return (
//                       <TableCell 
//                         key={supplierIndex}
//                         className={isTransfer ? 'bg-green-100 dark:bg-green-900' : ''}
//                       >
//                         {isTransfer ? 'Transfer' : 'No Transfer'}
//                       </TableCell>
//                     )
//                   })}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Supplier</TableHead>
//                 {Array.from({ length: retailerCount }).map((_, index) => (
//                   <TableHead key={index}>Retailer {index + 1}</TableHead>
//                 ))}
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {Array.from({ length: supplierCount }).map((_, supplierIndex) => (
//                 <TableRow key={supplierIndex}>
//                   <TableCell>Supplier {supplierIndex + 1}</TableCell>
//                   {Array.from({ length: retailerCount }).map((_, retailerIndex) => {
//                     const isTransfer = supplierToRetailer[supplierIndex * retailerCount + retailerIndex] === '1'
//                     return (
//                       <TableCell 
//                         key={retailerIndex}
//                         className={isTransfer ? 'bg-green-100 dark:bg-green-900' : ''}
//                       >
//                         {isTransfer ? 'Transfer' : 'No Transfer'}
//                       </TableCell>
//                     )
//                   })}
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }




















// 'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface BitstringAnalysisProps {
  bitstring: string;
  supplierCount?: number;
  warehouseCount?: number;
  retailerCount?: number;
}

export function BitstringAnalysis({ 
  bitstring = '',
  supplierCount = 3,
  warehouseCount = 3,
  retailerCount = 3
}: BitstringAnalysisProps) {
  // Parse the bitstring into two segments
  const supplierToWarehouseBits = bitstring.slice(0, supplierCount * warehouseCount);
  const warehouseToRetailerBits = bitstring.slice(supplierCount * warehouseCount);

  // Convert bitstrings into matrices
  const supplierToWarehouseMatrix = Array.from({ length: supplierCount }, (_, i) =>
    supplierToWarehouseBits.slice(i * warehouseCount, (i + 1) * warehouseCount).split('')
  );

  const warehouseToRetailerMatrix = Array.from({ length: warehouseCount }, (_, i) =>
    warehouseToRetailerBits.slice(i * retailerCount, (i + 1) * retailerCount).split('')
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Optimal Bitstring Analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Visualize the bitstring as circles */}
        <div className="flex gap-2 flex-wrap">
          {bitstring.split('').map((bit, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center font-mono
                ${bit === '1' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}
            >
              {bit}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {/* Supplier-to-Warehouse Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier</TableHead>
                {Array.from({ length: warehouseCount }).map((_, index) => (
                  <TableHead key={index}>Warehouse {index + 1}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {supplierToWarehouseMatrix.map((row, supplierIndex) => (
                <TableRow key={supplierIndex}>
                  <TableCell>Supplier {supplierIndex + 1}</TableCell>
                  {row.map((bit, warehouseIndex) => (
                    <TableCell
                      key={warehouseIndex}
                      className={bit === '1' ? 'bg-green-100 dark:bg-green-900' : ''}
                    >
                      {bit === '1' ? 'Transfer' : 'No Transfer'}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Warehouse-to-Retailer Table */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Warehouse</TableHead>
                {Array.from({ length: retailerCount }).map((_, index) => (
                  <TableHead key={index}>Retailer {index + 1}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {warehouseToRetailerMatrix.map((row, warehouseIndex) => (
                <TableRow key={warehouseIndex}>
                  <TableCell>Warehouse {warehouseIndex + 1}</TableCell>
                  {row.map((bit, retailerIndex) => (
                    <TableCell
                      key={retailerIndex}
                      className={bit === '1' ? 'bg-green-100 dark:bg-green-900' : ''}
                    >
                      {bit === '1' ? 'Transfer' : 'No Transfer'}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
