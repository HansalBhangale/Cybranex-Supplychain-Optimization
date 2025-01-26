






// 'use client'

// import { Card, CardContent } from '@/components/ui/card'
// import { Label } from '@/components/ui/label'
// import { Textarea } from '@/components/ui/textarea'
// import { Button } from '@/components/ui/button'
// import React, { useState } from "react";

// // Dummy implementation of decode_transfer_decisions function
// const decode_transfer_decisions = (
//   optimalBitstring: string,
//   supplierLength: number,
//   warehouseLength: number,
//   retailerLength: number
// ): [number[][], number[][]] => {
//   // Replace this with the actual logic
//   return [[], []];
// };



// export function NetworkConfiguration() {
//   const [optimalBitstring, setOptimalBitstring] = useState("");
//   const [bitstringsWithCount, setBitstringsWithCount] = useState({});
//   const [supplierToWarehouseCost, setSupplierToWarehouseCost] = useState("");
//   const [warehouseToRetailerCost, setWarehouseToRetailerCost] = useState("");
//   const [supplierInventory, setSupplierInventory] = useState("");
//   const [warehouseInventory, setWarehouseInventory] = useState("");
//   const [retailerInventory, setRetailerInventory] = useState("");

//   const [supplierToWarehouseTransfers, setSupplierToWarehouseTransfers] = useState<number[][]>([]);
//   const [warehouseToRetailerTransfers, setWarehouseToRetailerTransfers] = useState<number[][]>([]);
//   const [optimalCost, setOptimalCost] = useState(null);

//   const parseInput = (input: string) => {
//     return input
//       .trim()
//       .split("\n")
//       .map((line) => line.split(",").map(Number));
//   };

//   const parseInventory = (input: string) => {
//     return input
//       .trim()
//       .split(",")
//       .map(Number);
//   };

//   const handleCostOptimizationSubmit = async () => {
//     try {
//       const requestData = {
//         supplierToWarehouse: parseInput(supplierToWarehouseCost),  // Convert to array
//         warehouseToRetailer: parseInput(warehouseToRetailerCost),  // Convert to array
//         supplierInventory: parseInventory(supplierInventory),  // Convert to array
//         warehouseInventory: parseInventory(warehouseInventory),  // Convert to array
//         retailerInventory: parseInventory(retailerInventory),  // Convert to array
//       };
  
//       console.log("Sending requestData:", requestData);
  
//       const response = await fetch("http://127.0.0.1:8000/api/path/optimal", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(requestData),
//       });
  
//       if (!response.ok) {
//         throw new Error("Failed to fetch cost optimization results.");
//       }
  
//       const resultData = await response.json();
//       console.log("Fetched result:", resultData);
  
//       //  Store fetched data
//       setOptimalBitstring(resultData.optimal_bitstring);
//       setBitstringsWithCount(resultData.bitstrings);
//       setOptimalCost(resultData.total_cost);
  
//       // Ensure response contains valid values before decoding
//       if (resultData.optimal_bitstring) {
//         const [supplierToWarehouse, warehouseToRetailer] = decode_transfer_decisions(
//           resultData.optimal_bitstring,
//           requestData.supplierInventory.length,
//           requestData.warehouseInventory.length,
//           requestData.retailerInventory.length
//         );
  
//         setSupplierToWarehouseTransfers(supplierToWarehouse);
//         setWarehouseToRetailerTransfers(warehouseToRetailer);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };
  


//   return (
//     <Card>
//       <CardContent className="space-y-6 pt-6">
//         <div className="space-y-2">
//           <Label htmlFor="supplier-warehouse">Supplier to Warehouse Cost:</Label>
//           <Textarea
//             id="supplier-warehouse"
//             placeholder={"1,4,3\n2,5,4\n3,6,5"}
//             className="font-mono h-32"
//             value={supplierToWarehouseCost}
//             onChange={(e) => setSupplierToWarehouseCost(e.target.value)}
//           />
//         </div>

//         <div className="space-y-2">
//           <Label htmlFor="warehouse-retailer">Warehouse to Retailer Cost:</Label>
//           <Textarea
//             id="warehouse-retailer"
//             placeholder={"3,2,4\n4,3,5\n5,4,2"}
//             className="font-mono h-32"
//             value={warehouseToRetailerCost}
//             onChange={(e) => setWarehouseToRetailerCost(e.target.value)}
//           />
//         </div>

//         <div className="grid grid-cols-3 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="supplier-inventory">Supplier Inventory:</Label>
//             <Textarea
//               id="supplier-inventory"
//               placeholder="10,15,20"
//               className="font-mono h-20"
//               value={supplierInventory}
//               onChange={(e) => setSupplierInventory(e.target.value)}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="warehouse-inventory">Warehouse Inventory:</Label>
//             <Textarea
//               id="warehouse-inventory"
//               placeholder="5,10,15"
//               className="font-mono h-20"
//               value={warehouseInventory}
//               onChange={(e) => setWarehouseInventory(e.target.value)}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="retailer-inventory">Retailer Inventory:</Label>
//             <Textarea
//               id="retailer-inventory"
//               placeholder="8,12,18"
//               className="font-mono h-20"
//               value={retailerInventory}
//               onChange={(e) => setRetailerInventory(e.target.value)}
//             />
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <Button size="lg" className="w-1/3" onClick={handleCostOptimizationSubmit}>
//             Submit Data
//           </Button>
//         </div>

//         {/* <div className="space-y-4 mt-6">
//           <h2 className="text-xl font-bold">Results</h2>
//           <p>Supplier to Warehouse Transfers: {JSON.stringify(supplierToWarehouseTransfers)}</p>
//           <p>Warehouse to Retailer Transfers: {JSON.stringify(warehouseToRetailerTransfers)}</p>
//           <p>Optimal Cost: {optimalCost}</p>
//         </div> */}
//       </CardContent>
//     </Card>
//   );
// }



















'use client'

import React, { useState } from "react"
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useAppDispatch } from "@/lib/redux/hooks"
import { update } from "@/lib/redux/visualisation_slice"
import { update as formUpdate } from "@/lib/redux/form_slice"

export function NetworkConfiguration() {
  const [supplierCount, setSupplierCount] = useState(3)
  const [warehouseCount, setWarehouseCount] = useState(3)
  const [retailerCount, setRetailerCount] = useState(3)
  const dispatch = useAppDispatch()

  const [supplierToWarehouseCost, setSupplierToWarehouseCost] = useState(
    Array(supplierCount).fill(Array(warehouseCount).fill(''))
  )
  const [warehouseToRetailerCost, setWarehouseToRetailerCost] = useState(
    Array(warehouseCount).fill(Array(retailerCount).fill(''))
  )
  const [supplierInventory, setSupplierInventory] = useState(Array(supplierCount).fill(''))
  const [warehouseInventory, setWarehouseInventory] = useState(Array(warehouseCount).fill(''))
  const [retailerInventory, setRetailerInventory] = useState(Array(retailerCount).fill(''))

  const handleSupplierToWarehouseCostChange = (supplierIndex: number, warehouseIndex: number, value: string) => {
    const newCost = supplierToWarehouseCost.map((row, sIndex) =>
      sIndex === supplierIndex ? row.map((cell: string, wIndex: number) => (wIndex === warehouseIndex ? value : cell)) : row
    )
    setSupplierToWarehouseCost(newCost)
  }

  const handleWarehouseToRetailerCostChange = (warehouseIndex: number, retailerIndex: number, value: string) => {
    const newCost = warehouseToRetailerCost.map((row, wIndex) =>
      wIndex === warehouseIndex ? row.map((cell:string, rIndex: number) => (rIndex === retailerIndex ? value : cell)) : row
    )
    setWarehouseToRetailerCost(newCost)
  }

  const handleInventoryChange = (type: 'supplier' | 'warehouse' | 'retailer', index: number, value: string) => {
    if (type === 'supplier') {
      setSupplierInventory(supplierInventory.map((item, i) => (i === index ? value : item)))
    } else if (type === 'warehouse') {
      setWarehouseInventory(warehouseInventory.map((item, i) => (i === index ? value : item)))
    } else {
      setRetailerInventory(retailerInventory.map((item, i) => (i === index ? value : item)))
    }
  }

  const formatDataForSubmission = () => {
    return {
      supplierToWarehouse: supplierToWarehouseCost.map(row => row.map(Number)),
      warehouseToRetailer: warehouseToRetailerCost.map(row => row.map(Number)),
      supplierInventory: supplierInventory.map(Number),
      warehouseInventory: warehouseInventory.map(Number),
      retailerInventory: retailerInventory.map(Number),
    }
  }

  const handleSubmit = async () => {
    const formattedData = formatDataForSubmission()
    console.log("Formatted data for submission:", formattedData)
    dispatch(formUpdate(formattedData));

    try {
      const response = await fetch("http://127.0.0.1:8000/api/path/optimal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch cost optimization results.")
      }

      const resultData = await response.json()
      console.log("Fetched result:", resultData)
      dispatch(update(resultData))

      // Handle the response data here (e.g., update state, show results)
    } catch (error) {
      console.error("Error fetching data:", error)
      // Handle the error (e.g., show an error message to the user)
    }
  }

  return (
    <Card>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Supplier to Warehouse Cost</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier \ Warehouse</TableHead>
                {Array(warehouseCount).fill(0).map((_, index) => (
                  <TableHead key={index}>Warehouse {index + 1}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array(supplierCount).fill(0).map((_, supplierIndex) => (
                <TableRow key={supplierIndex}>
                  <TableCell>Supplier {supplierIndex + 1}</TableCell>
                  {Array(warehouseCount).fill(0).map((_, warehouseIndex) => (
                    <TableCell key={warehouseIndex}>
                      <Input
                        type="number"
                        value={supplierToWarehouseCost[supplierIndex][warehouseIndex]}
                        onChange={(e) => handleSupplierToWarehouseCostChange(supplierIndex, warehouseIndex, e.target.value)}
                        className="w-20"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Warehouse to Retailer Cost</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Warehouse \ Retailer</TableHead>
                {Array(retailerCount).fill(0).map((_, index) => (
                  <TableHead key={index}>Retailer {index + 1}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array(warehouseCount).fill(0).map((_, warehouseIndex) => (
                <TableRow key={warehouseIndex}>
                  <TableCell>Warehouse {warehouseIndex + 1}</TableCell>
                  {Array(retailerCount).fill(0).map((_, retailerIndex) => (
                    <TableCell key={retailerIndex}>
                      <Input
                        type="number"
                        value={warehouseToRetailerCost[warehouseIndex][retailerIndex]}
                        onChange={(e) => handleWarehouseToRetailerCostChange(warehouseIndex, retailerIndex, e.target.value)}
                        className="w-20"
                      />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">Inventory</h2>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Supplier Inventory</h3>
              {supplierInventory.map((value, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <Label htmlFor={`supplier-${index}`}>Supplier {index + 1}:</Label>
                  <Input
                    id={`supplier-${index}`}
                    type="number"
                    value={value}
                    onChange={(e) => handleInventoryChange('supplier', index, e.target.value)}
                    className="w-20"
                  />
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Warehouse Inventory</h3>
              {warehouseInventory.map((value, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <Label htmlFor={`warehouse-${index}`}>Warehouse {index + 1}:</Label>
                  <Input
                    id={`warehouse-${index}`}
                    type="number"
                    value={value}
                    onChange={(e) => handleInventoryChange('warehouse', index, e.target.value)}
                    className="w-20"
                  />
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Retailer Inventory</h3>
              {retailerInventory.map((value, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <Label htmlFor={`retailer-${index}`}>Retailer {index + 1}:</Label>
                  <Input
                    id={`retailer-${index}`}
                    type="number"
                    value={value}
                    onChange={(e) => handleInventoryChange('retailer', index, e.target.value)}
                    className="w-20"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button size="lg" className="w-1/3" onClick={handleSubmit}>
            Submit Data
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}



// Hansal changes

// // NetworkConfiguration.tsx
// 'use client';

// import React, { useState } from 'react';
// import { Card, CardContent } from '@/components/ui/card';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';

// interface NetworkConfigurationProps {
//   onSubmit: (data: {
//     supplierToWarehouse: number[][];
//     warehouseToRetailer: number[][];
//     supplierInventory: number[];
//     warehouseInventory: number[];
//     retailerInventory: number[];
//   }) => void;
// }

// export function NetworkConfiguration({ onSubmit }: NetworkConfigurationProps) {
//   const [supplierCount, setSupplierCount] = useState(3);
//   const [warehouseCount, setWarehouseCount] = useState(3);
//   const [retailerCount, setRetailerCount] = useState(3);

//   const [supplierToWarehouse, setSupplierToWarehouse] = useState(
//     Array.from({ length: supplierCount }, () => Array(warehouseCount).fill(0))
//   );

//   const [warehouseToRetailer, setWarehouseToRetailer] = useState(
//     Array.from({ length: warehouseCount }, () => Array(retailerCount).fill(0))
//   );

//   const [supplierInventory, setSupplierInventory] = useState(Array(supplierCount).fill(0));
//   const [warehouseInventory, setWarehouseInventory] = useState(Array(warehouseCount).fill(0));
//   const [retailerInventory, setRetailerInventory] = useState(Array(retailerCount).fill(0));

//   const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number[]>>, index: number, value: string) => {
//     setter((prev) => prev.map((item, i) => (i === index ? Number(value) : item)));
//   };

//   const handleMatrixChange = (setter: React.Dispatch<React.SetStateAction<number[][]>>, rowIndex: number, colIndex: number, value: string) => {
//     setter((prev) =>
//       prev.map((row, i) =>
//         i === rowIndex ? row.map((cell, j) => (j === colIndex ? Number(value) : cell)) : [...row]
//       )
//     );
//   };

//   const handleSubmit = () => {
//     onSubmit({
//       supplierToWarehouse,
//       warehouseToRetailer,
//       supplierInventory,
//       warehouseInventory,
//       retailerInventory,
//     });
//   };

//   return (
//     <Card>
//       <CardContent className="space-y-4">
//         <h2 className="text-xl font-bold">Supplier to Warehouse Cost</h2>
//         {supplierToWarehouse.map((row, rowIndex) => (
//           <div key={rowIndex} className="flex space-x-2">
//             {row.map((value, colIndex) => (
//               <Input
//                 key={colIndex}
//                 type="number"
//                 value={value || 0}
//                 onChange={(e) => handleMatrixChange(setSupplierToWarehouse, rowIndex, colIndex, e.target.value)}
//                 className="w-16"
//               />
//             ))}
//           </div>
//         ))}

//         <h2 className="text-xl font-bold">Warehouse to Retailer Cost</h2>
//         {warehouseToRetailer.map((row, rowIndex) => (
//           <div key={rowIndex} className="flex space-x-2">
//             {row.map((value, colIndex) => (
//               <Input
//                 key={colIndex}
//                 type="number"
//                 value={value || 0}
//                 onChange={(e) => handleMatrixChange(setWarehouseToRetailer, rowIndex, colIndex, e.target.value)}
//                 className="w-16"
//               />
//             ))}
//           </div>
//         ))}

//         <h2 className="text-xl font-bold">Inventory Levels</h2>
//         <div className="space-y-2">
//           {supplierInventory.map((value, index) => (
//             <div key={index} className="flex items-center space-x-2">
//               <Label>Supplier {index + 1}</Label>
//               <Input
//                 type="number"
//                 value={value || 0}
//                 onChange={(e) => handleInputChange(setSupplierInventory, index, e.target.value)}
//                 className="w-16"
//               />
//             </div>
//           ))}
//         </div>

//         <Button onClick={handleSubmit} className="mt-4">
//           Submit Configuration
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }
