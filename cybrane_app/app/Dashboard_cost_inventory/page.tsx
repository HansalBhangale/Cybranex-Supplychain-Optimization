// 'use client'

// import { useState } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { NetworkConfiguration } from '@/components/ui/NetworkConfiguration'
// import { NetworkVisualization } from '@/components/ui/NetworkVisualization'
// import { BitstringAnalysis } from '@/components/ui/BitstringAnalysis'
// import { BitstringHistogram as ImportedBitstringHistogram } from '@/components/ui/BitstringHistogram'

// export default function SupplyChainDashboard() {
//   const [bitstring, setBitstring] = useState('')
//   const [bitstringsWithCount, setBitstringsWithCount] = useState({});
//   const [optimalCost, setOptimalCost] = useState(null);
//   const [data, setData] = useState<{ name: string; value: number }[]>([]);
//   const [supplierCount, setSupplierCount] = useState(3)
//   const [warehouseCount, setWarehouseCount] = useState(3)
//   const [retailerCount, setRetailerCount] = useState(3)

//   //  Function to fetch optimal bitstring using GET request
//   const handleFetchOptimalBitstring = async () => {
//     try {
//       const response = await fetch("http://127.0.0.1:8000/api/path/optimal", {
//         method: "GET",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch optimal bitstring.");
//       }

//       const resultData = await response.json();
//       console.log("Fetched Bitstring Data:", resultData);

//       //  Update state with fetched data
//       setBitstring(resultData.optimal_bitstring);
//       setBitstringsWithCount(resultData.bitstrings);
//       setOptimalCost(resultData.total_cost);

//       // Convert bitstrings into histogram data format
//       if (resultData.bitstrings) {
//         const histogramData = Object.entries(resultData.bitstrings).map(([name, value]) => ({
//           name,
//           value: Number(value)
//         }));
//         setData(histogramData);
//       }

//     } catch (error) {
//       console.error("Error fetching bitstring:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background p-6">
//       <div className="mx-auto max-w-7xl space-y-6">
        
//         <h1 className="text-3xl font-bold text-center text-primary">
//           Supply Chain Optimization Dashboard
//         </h1>
        
//         <Card>
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-lg">Optimal Bitstring is:</CardTitle>
//             <div className="flex gap-2">
//               <Input 
//                 value={bitstring}
//                 onChange={(e) => setBitstring(e.target.value)}
//                 className="font-mono"
//               />
//               <Button onClick={handleFetchOptimalBitstring}>Fetch Bitstring</Button>
//             </div>
//           </CardHeader>
//         </Card>

//         <Tabs defaultValue="network-config" className="space-y-4">
//           <TabsList className="grid grid-cols-4 w-full">
//             <TabsTrigger value="network-config">Network Configuration</TabsTrigger>
//             <TabsTrigger value="network-viz">Network Visualization</TabsTrigger>
//             <TabsTrigger value="bitstring-analysis">Bitstring Analysis</TabsTrigger>
//             <TabsTrigger value="bitstring-histogram">Bitstring Histogram</TabsTrigger>
//           </TabsList>

//           <TabsContent value="network-config">
//             <NetworkConfiguration />
//           </TabsContent>

//           <TabsContent value="network-viz">
//             <NetworkVisualization 
//               bitstring={bitstring}
//               supplierCount={supplierCount}
//               warehouseCount={warehouseCount}
//               retailerCount={retailerCount}
//             />
//           </TabsContent>

//           <TabsContent value="bitstring-analysis">
//             <BitstringAnalysis 
//               bitstring={bitstring}
//               supplierCount={supplierCount}
//               warehouseCount={warehouseCount}
//               retailerCount={retailerCount}
//             />
//           </TabsContent>

//           <TabsContent value="bitstring-histogram">
//             <ImportedBitstringHistogram data={data.map(item => ({ bitstring: item.name, count: item.value }))} />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }


































'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { NetworkConfiguration } from '@/components/ui/NetworkConfiguration'
import { NetworkVisualization } from '@/components/ui/NetworkVisualization'
import { BitstringAnalysis } from '@/components/ui/BitstringAnalysis'
import { BitstringHistogram as ImportedBitstringHistogram } from '@/components/ui/BitstringHistogram'

export default function SupplyChainDashboard() {
  const [bitstring, setBitstring] = useState('')
  const [bitstringsWithCount, setBitstringsWithCount] = useState({});
  const [optimalCost, setOptimalCost] = useState(null);
  const [data, setData] = useState<{ name: string; value: number }[]>([]);

  const handleFetchOptimalBitstring = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/path/optimal", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch optimal bitstring.");
      }

      const resultData = await response.json();
      console.log("Fetched Bitstring Data:", resultData);

      setBitstring(resultData.optimal_bitstring);
      setBitstringsWithCount(resultData.bitstrings);
      setOptimalCost(resultData.total_cost);

      if (resultData.bitstrings) {
        const histogramData = Object.entries(resultData.bitstrings).map(([name, value]) => ({
          name,
          value: Number(value)
        }));
        setData(histogramData);
      }

    } catch (error) {
      console.error("Error fetching bitstring:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        
        <h1 className="text-3xl font-bold text-center text-primary">
          Supply Chain Optimization Dashboard
        </h1>
        
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-lg">Optimal Bitstring is:</CardTitle>
            <div className="flex gap-2">
              <Input 
                value={bitstring}
                onChange={(e) => setBitstring(e.target.value)}
                className="font-mono"
              />
              <Button onClick={handleFetchOptimalBitstring}>Fetch Bitstring</Button>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="network-config" className="space-y-4">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="network-config">Network Configuration</TabsTrigger>
            <TabsTrigger value="network-viz">Network Visualization</TabsTrigger>
            <TabsTrigger value="bitstring-analysis">Bitstring Analysis</TabsTrigger>
            <TabsTrigger value="bitstring-histogram">Bitstring Histogram</TabsTrigger>
          </TabsList>

          <TabsContent value="network-config">
            <NetworkConfiguration />
          </TabsContent>

          <TabsContent value="network-viz">
            <NetworkVisualization 
              bitstring={bitstring}
            />
          </TabsContent>

          <TabsContent value="bitstring-analysis">
            <BitstringAnalysis 
              bitstring={bitstring}
            />
          </TabsContent>

          <TabsContent value="bitstring-histogram">
            <ImportedBitstringHistogram data={data.map(item => ({ bitstring: item.name, count: item.value }))} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}












//hansal changes
// 'use client';

// import { useState } from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { NetworkConfiguration } from '@/components/ui/NetworkConfiguration';
// import { NetworkVisualization } from '@/components/ui/NetworkVisualization';
// import { BitstringAnalysis } from '@/components/ui/BitstringAnalysis';
// import { BitstringHistogram as ImportedBitstringHistogram } from '@/components/ui/BitstringHistogram';

// interface BitstringCountData {
//   bitstring: string;
//   count: number;
// }

// interface NetworkData {
//   supplierToWarehouse: number[][];
//   warehouseToRetailer: number[][];
//   supplierInventory: number[];
//   warehouseInventory: number[];
//   retailerInventory: number[];
// }

// export default function SupplyChainDashboard() {
//   const [bitstring, setBitstring] = useState<string>('');
//   const [bitstringsWithCount, setBitstringsWithCount] = useState<Record<string, number>>({});
//   const [optimalCost, setOptimalCost] = useState<number | null>(null);
//   const [data, setData] = useState<BitstringCountData[]>([]);
  
//   const [networkData, setNetworkData] = useState<NetworkData>({
//     supplierToWarehouse: Array(3).fill(Array(3).fill(0)),
//     warehouseToRetailer: Array(3).fill(Array(3).fill(0)),
//     supplierInventory: Array(3).fill(0),
//     warehouseInventory: Array(3).fill(0),
//     retailerInventory: Array(3).fill(0),
//   });

//   const handleNetworkDataSubmit = (data: NetworkData) => {
//     setNetworkData(data);
//   };

//   const handleFetchOptimalBitstring = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/path/optimal', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch optimal bitstring.');
//       }

//       const resultData = await response.json();
//       setBitstring(resultData.optimal_bitstring || '');
//       setBitstringsWithCount(resultData.bitstrings || {});
//       setOptimalCost(resultData.total_cost || 0);

//       if (resultData.bitstrings) {
//         const histogramData = Object.entries(resultData.bitstrings).map(([name, value]) => ({
//           bitstring: name,
//           count: Number(value),
//         }));
//         setData(histogramData);
//       }
//     } catch (error) {
//       console.error('Error fetching bitstring:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background p-6">
//       <div className="mx-auto max-w-7xl space-y-6">
//         <h1 className="text-3xl font-bold text-center text-primary">Supply Chain Optimization Dashboard</h1>

//         <Card>
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-lg">Optimal Bitstring:</CardTitle>
//             <div className="flex gap-2">
//               <Input value={bitstring} onChange={(e) => setBitstring(e.target.value)} className="font-mono" />
//               <Button onClick={handleFetchOptimalBitstring}>Fetch Bitstring</Button>
//             </div>
//           </CardHeader>
//         </Card>

//         <Tabs defaultValue="network-config" className="space-y-4">
//           <TabsList className="grid grid-cols-4 w-full">
//             <TabsTrigger value="network-config">Network Configuration</TabsTrigger>
//             <TabsTrigger value="network-viz">Network Visualization</TabsTrigger>
//             <TabsTrigger value="bitstring-analysis">Bitstring Analysis</TabsTrigger>
//             <TabsTrigger value="bitstring-histogram">Bitstring Histogram</TabsTrigger>
//           </TabsList>

//           <TabsContent value="network-config">
//             <NetworkConfiguration onSubmit={handleNetworkDataSubmit} />
//           </TabsContent>

//           <TabsContent value="network-viz">
//             <NetworkVisualization {...networkData} />
//           </TabsContent>

//           <TabsContent value="bitstring-analysis">
//             <BitstringAnalysis bitstring={bitstring || ''} />
//           </TabsContent>

//           <TabsContent value="bitstring-histogram">
//             <ImportedBitstringHistogram data={data} />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// }
