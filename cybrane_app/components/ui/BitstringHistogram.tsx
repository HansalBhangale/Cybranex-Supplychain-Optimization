// 'use client'

// import { useRef, useEffect } from 'react'
// import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController } from 'chart.js'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController)

// interface BitstringHistogramProps {
//   data: { bitstring: string; count: number }[]
// }

// export default function BitstringHistogram({ data }: BitstringHistogramProps) {
//   const chartRef = useRef<HTMLCanvasElement | null>(null)

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d')
//       if (ctx) {
//         new Chart(ctx, {
//           type: 'bar',
//           data: {
//             labels: data.map(item => item.bitstring),
//             datasets: [
//               {
//                 label: 'Count',
//                 data: data.map(item => item.count),
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               },
//             ],
//           },
//           options: {
//             responsive: true,
//             scales: {
//               x: {
//                 title: {
//                   display: true,
//                   text: 'Bitstrings',
//                 },
//               },
//               y: {
//                 title: {
//                   display: true,
//                   text: 'Counts',
//                 },
//                 beginAtZero: true,
//               },
//             },
//           },
//         })
//       }
//     }
//   }, [data])

//   return (
//     <Card className="col-span-2">
//       <CardHeader>
//         <CardTitle>Histogram of Bitstrings</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div style={{ height: '400px', overflowX: 'scroll', overflowY: 'scroll' }}>
//           <canvas ref={chartRef} />
//         </div>
//       </CardContent>
//     </Card>
//   )
// }































// 'use client'

// import { useRef, useEffect } from 'react'
// import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController } from 'chart.js'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController)

// interface BitstringHistogramProps {
//   data: { bitstring: string; count: number }[]
// }

// export default function BitstringHistogram({ data }: BitstringHistogramProps) {
//   const chartRef = useRef<HTMLCanvasElement | null>(null)
//   const chartInstanceRef = useRef<Chart | null>(null)

//   useEffect(() => {
//     if (!data.length) return;  // ✅ Prevents rendering empty chart

//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d')
//       if (ctx) {
//         // Destroy existing chart instance if it exists
//         if (chartInstanceRef.current) {
//           chartInstanceRef.current.destroy()
//         }

//         // Create new chart instance
//         chartInstanceRef.current = new Chart(ctx, {
//           type: 'bar',
//           data: {
//             labels: data.map(item => item.bitstring),
//             datasets: [
//               {
//                 label: 'Count',
//                 data: data.map(item => item.count),
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               },
//             ],
//           },
//           options: {
//             responsive: true,
//             scales: {
//               x: { title: { display: true, text: 'Bitstrings' } },
//               y: { title: { display: true, text: 'Counts' }, beginAtZero: true },
//             },
//           },
//         })
//       }
//     }

//     // Cleanup function to destroy the chart on component unmount
//     return () => {
//       if (chartInstanceRef.current) {
//         chartInstanceRef.current.destroy()
//       }
//     }
//   }, [data])

//   return (
//     <Card className="col-span-2">
//       <CardHeader>
//         <CardTitle>Histogram of Bitstrings</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div style={{ height: '400px', overflowX: 'scroll', overflowY: 'scroll' }}>
//           <canvas ref={chartRef} />
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Slider } from '@/components/ui/slider'
// import { Label } from '@/components/ui/label'
// import { BarChart, Bar, XAxis, YAxis } from 'recharts'
// import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController } from 'chart.js'

// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController)

// export function BitstringHistogram() {
//   const [chartHeight, setChartHeight] = useState(400)
//   const [barWidth, setBarWidth] = useState(15)
// const [bitstringInput, setBitstringInput] = useState("")

//   // const [bitstringInput, setBitstringInput] = useState(
//   //   '{"000": 1, "001": 2, "010": 1, "011": 1}'
//   // )
//   const [data, setData] = useState<{ bitstring: string; count: number }[]>([])
//   const chartRef = useRef<HTMLCanvasElement | null>(null)
//   const chartInstanceRef = useRef<Chart | null>(null)

//   // Parse input to generate histogram data
//   const parseInput = () => {
//     try {
//       const parsedData = JSON.parse(bitstringInput)
//       setData(
//         Object.entries(parsedData).map(([bitstring, count]) => ({
//           bitstring,
//           count: Number(count),
//         }))
//       )
//     } catch (error) {
//       console.error('Invalid JSON input', error)
//     }
//   }

//   // Fetch bitstrings using GET
//   // const fetchBitstrings = async () => {
//   //   try {
//   //     const response = await fetch('/api/path/optimal')
//   //     method: 'GET',
      
//   //     if (!response.ok) throw new Error('Failed to fetch bitstrings')

//   //     const fetchedData = await response.json()
//   //     const formattedData = Object.entries(fetchedData).map(([bitstring, count]) => ({
//   //       bitstring,
//   //       count: Number(count),
//   //     }))
//   //     setData(formattedData)
//   //     setBitstringInput(JSON.stringify(fetchedData, null, 2)) // Display fetched data in the input
//   //   } catch (error) {
//   //     console.error('Error fetching bitstrings:', error)
//   //   }
//   // }
// //   const fetchBitstrings = async () => {
// //     try {
// //       const response = await fetch('/api/path/optimal', { method: 'GET' });
  
// //       if (!response.ok) {
// //         if (response.status === 404) {
// //           console.warn("No data available. click on submit .");
// //           alert("No bitstring data available. Please run the optimization process first.");
// //           return;
// //         }
// //         throw new Error('Failed to fetch bitstrings');
// //       }
  
// //       const fetchedData = await response.json();
// //       console.log("Fetched bitstrings:", fetchedData);
  
// //       if (fetchedData.bitstrings) {
// //         const formattedData = Object.entries(fetchedData.bitstrings).map(([bitstring, count]) => ({
// //           bitstring,
// //           count: Number(count),
// //         }));
// //         setData(formattedData);
// //         setBitstringInput(JSON.stringify(fetchedData.bitstrings, null, 2));
// //       }
// //     } catch (error) {
// //       console.error('Error fetching bitstrings:', error);
// //     }
// //   };
// // // Fetch bitstrings using POST

// const fetchBitstrings = async () => {
//   try {
//     const response = await fetch('/api/path/optimal', { method: 'GET' });

//     if (!response.ok) throw new Error('Failed to fetch bitstrings');

//     const fetchedData = await response.json();
//     console.log("Fetched bitstrings:", fetchedData);

//     // Check if data is empty
//     if (!fetchedData.bitstrings || Object.keys(fetchedData.bitstrings).length === 0) {
//       alert("No bitstring data available. Please run the optimization process first.");
//       return;
//     }

//     const formattedData = Object.entries(fetchedData.bitstrings).map(([bitstring, count]) => ({
//       bitstring,
//       count: Number(count),
//     }));

//     setData(formattedData);
//     setBitstringInput(JSON.stringify(fetchedData.bitstrings, null, 2));

//   } catch (error) {
//     console.error('Error fetching bitstrings:', error);
//   }
// };

//   // Render a chart.js histogram as a fallback
//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d')
//       if (ctx) {
//         if (chartInstanceRef.current) chartInstanceRef.current.destroy()

//         chartInstanceRef.current = new Chart(ctx, {
//           type: 'bar',
//           data: {
//             labels: data.map((item) => item.bitstring),
//             datasets: [
//               {
//                 label: 'Count',
//                 data: data.map((item) => item.count),
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               },
//             ],
//           },
//           options: {
//             responsive: true,
//             scales: {
//               x: { title: { display: true, text: 'Bitstrings' } },
//               y: { title: { display: true, text: 'Counts' }, beginAtZero: true },
//             },
//           },
//         })
//       }
//     }
//     return () => chartInstanceRef.current?.destroy()
//   }, [data])

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Bitstring Histogram</CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <div className="space-y-2">
//           <Label>Enter Bitstrings with Counts (JSON):</Label>
//           <div className="flex gap-2">
//             <Input
//               value={bitstringInput}
//               onChange={(e) => setBitstringInput(e.target.value)}
//               className="font-mono flex-1"
//             />
//             <Button onClick={parseInput}>Generate Histogram</Button>
//             <Button variant="outline" onClick={fetchBitstrings}>
//               Fetch Bitstring
//             </Button>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label>Chart Height: {chartHeight}px</Label>
//             <Slider
//               value={[chartHeight]}
//               onValueChange={(value) => setChartHeight(value[0])}
//               min={200}
//               max={600}
//               step={1}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label>Bar Width: {barWidth}px</Label>
//             <Slider
//               value={[barWidth]}
//               onValueChange={(value) => setBarWidth(value[0])}
//               min={5}
//               max={30}
//               step={1}
//             />
//           </div>
//         </div>

//         <div style={{ height: chartHeight }}>
//           <BarChart
//             width={800}
//             height={chartHeight}
//             data={data}
//           >
//             <XAxis dataKey="bitstring" />
//             <YAxis />
//             <Bar
//               dataKey="count"
//               fill="hsl(var(--primary))"
//               barSize={barWidth}
//             />
//           </BarChart>
//         </div>

//         <div style={{ marginTop: '20px' }}>
//           <canvas ref={chartRef} style={{ maxHeight: chartHeight }} />
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


























// 'use client'

// import { useState, useRef, useEffect } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Slider } from '@/components/ui/slider'
// import { Label } from '@/components/ui/label'
// import { BarChart, Bar, XAxis, YAxis } from 'recharts'
// import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController } from 'chart.js'

// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController)

// export function BitstringHistogram() {
//   const [chartHeight, setChartHeight] = useState(400)
//   const [barWidth, setBarWidth] = useState(15)
//   const [bitstringInput, setBitstringInput] = useState("")
//   const [data, setData] = useState<{ bitstring: string; count: number }[]>([])
//   const chartRef = useRef<HTMLCanvasElement | null>(null)
//   const chartInstanceRef = useRef<Chart | null>(null)

//   const fetchBitstrings = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/path/optimal', { method: 'GET' });

//       if (!response.ok) {
//         if (response.status === 404) {
//           alert("No optimization data available. Please run the optimization process first.");
//           return;
//         }
//         throw new Error('Failed to fetch bitstrings');
//       }

//       const fetchedData = await response.json();
//       console.log("Fetched bitstrings:", fetchedData);

//       if (!fetchedData.bitstrings || Object.keys(fetchedData.bitstrings).length === 0) {
//         alert("No bitstring data available. Please run the optimization process first.");
//         return;
//       }

//       const formattedData = Object.entries(fetchedData.bitstrings).map(([bitstring, count]) => ({
//         bitstring,
//         count: Number(count),
//       }));

//       setData(formattedData);
//       setBitstringInput(JSON.stringify(fetchedData.bitstrings, null, 2));
//     } catch (error) {
//       console.error('Error fetching bitstrings:', error);
//     }
//   };

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d')
//       if (ctx) {
//         if (chartInstanceRef.current) chartInstanceRef.current.destroy()

//         chartInstanceRef.current = new Chart(ctx, {
//           type: 'bar',
//           data: {
//             labels: data.map((item) => item.bitstring),
//             datasets: [
//               {
//                 label: 'Count',
//                 data: data.map((item) => item.count),
//                 backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               },
//             ],
//           },
//           options: {
//             responsive: true,
//             scales: {
//               x: { title: { display: true, text: 'Bitstrings' } },
//               y: { title: { display: true, text: 'Counts' }, beginAtZero: true },
//             },
//           },
//         })
//       }
//     }
//     return () => chartInstanceRef.current?.destroy()
//   }, [data])

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Bitstring Histogram</CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <div className="space-y-2">
//           <Label>Enter Bitstrings with Counts (JSON):</Label>
//           <div className="flex gap-2">
//             <Input
//               value={bitstringInput}
//               onChange={(e) => setBitstringInput(e.target.value)}
//               className="font-mono flex-1"
//             />
//             <Button variant="outline" onClick={fetchBitstrings}>
//               Fetch Bitstring
//             </Button>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label>Chart Height: {chartHeight}px</Label>
//             <Slider
//               value={[chartHeight]}
//               onValueChange={(value) => setChartHeight(value[0])}
//               min={200}
//               max={600}
//               step={1}
//             />
//           </div>
//           <div className="space-y-2">
//             <Label>Bar Width: {barWidth}px</Label>
//             <Slider
//               value={[barWidth]}
//               onValueChange={(value) => setBarWidth(value[0])}
//               min={5}
//               max={30}
//               step={1}
//             />
//           </div>
//         </div>

//         <div style={{ height: chartHeight }}>
//           <BarChart width={800} height={chartHeight} data={data}>
//             <XAxis dataKey="bitstring" />
//             <YAxis />
//             <Bar dataKey="count" fill="hsl(var(--primary))" barSize={barWidth} />
//           </BarChart>
//         </div>

//         <div style={{ marginTop: '20px' }}>
//           <canvas ref={chartRef} style={{ maxHeight: chartHeight }} />
//         </div>
//       </CardContent>
//     </Card>
//   )
// }












// 'use client'

// import { useState, useRef, useEffect, useMemo } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Slider } from '@/components/ui/slider'
// import { Label } from '@/components/ui/label'
// import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController } from 'chart.js'

// Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController)

// export function BitstringHistogram() {
//   const [chartHeight, setChartHeight] = useState(400)
//   const [barWidth, setBarWidth] = useState(15)
//   const [bitstringInput, setBitstringInput] = useState("")
//   const [data, setData] = useState<{ bitstring: string; count: number }[]>([])
//   const chartRef = useRef<HTMLCanvasElement | null>(null)
//   const chartInstanceRef = useRef<Chart | null>(null)

//   const fetchBitstrings = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/api/path/optimal', { method: 'GET' });

//       if (!response.ok) {
//         if (response.status === 404) {
//           alert("No optimization data available. Please run the optimization process first.");
//           return;
//         }
//         throw new Error('Failed to fetch bitstrings');
//       }

//       const fetchedData = await response.json();
//       console.log("Fetched bitstrings:", fetchedData);

//       if (!fetchedData.bitstrings || Object.keys(fetchedData.bitstrings).length === 0) {
//         alert("No bitstring data available. Please run the optimization process first.");
//         return;
//       }

//       const formattedData = Object.entries(fetchedData.bitstrings).map(([bitstring, count]) => ({
//         bitstring,
//         count: Number(count),
//       }));

//       setData(formattedData);
//       setBitstringInput(JSON.stringify(fetchedData.bitstrings, null, 2));
//     } catch (error) {
//       console.error('Error fetching bitstrings:', error);
//     }
//   };

//   const maxCount = useMemo(() => Math.max(...data.map(item => item.count)), [data]);

//   useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext('2d')
//       if (ctx) {
//         if (chartInstanceRef.current) chartInstanceRef.current.destroy()

//         const blueGradient = ctx.createLinearGradient(0, 0, 0, 400);
//         blueGradient.addColorStop(0, 'rgba(0, 122, 255, 0.8)');
//         blueGradient.addColorStop(1, 'rgba(0, 122, 255, 0.2)');

//         const greenGradient = ctx.createLinearGradient(0, 0, 0, 400);
//         greenGradient.addColorStop(0, 'rgba(0, 255, 0, 0.8)');
//         greenGradient.addColorStop(1, 'rgba(0, 255, 0, 0.2)');

//         chartInstanceRef.current = new Chart(ctx, {
//           type: 'bar',
//           data: {
//             labels: data.map((item) => item.bitstring),
//             datasets: [
//               {
//                 label: 'Count',
//                 data: data.map((item) => item.count),
//                 backgroundColor: data.map((item) => 
//                   item.count === maxCount ? greenGradient : blueGradient
//                 ),
//                 borderColor: data.map((item) => 
//                   item.count === maxCount ? 'rgb(0, 255, 0)' : 'rgb(0, 122, 255)'
//                 ),
//                 borderWidth: 1,
//                 barThickness: barWidth,
//               },
//             ],
//           },
//           options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             animation: {
//               duration: 1000,
//               easing: 'easeOutQuart',
//             },
//             scales: {
//               x: { 
//                 title: { display: true, text: 'Bitstrings' },
//                 ticks: { autoSkip: false, maxRotation: 90, minRotation: 90 }
//               },
//               y: { title: { display: true, text: 'Counts' }, beginAtZero: true },
//             },
//             plugins: {
//               tooltip: {
//                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                 titleColor: 'rgb(0, 0, 0)',
//                 bodyColor: 'rgb(0, 0, 0)',
//                 borderColor: 'rgba(0, 0, 0, 0.1)',
//                 borderWidth: 1,
//                 padding: 10,
//                 displayColors: false,
//                 callbacks: {
//                   label: (context) => {
//                     const value = context.parsed.y;
//                     return `Count: ${value}${value === maxCount ? ' (Highest)' : ''}`;
//                   }
//                 }
//               },
//             },
//           },
//         })
//       }
//     }
//     return () => chartInstanceRef.current?.destroy()
//   }, [data, barWidth, maxCount])

//   return (
//     <Card className="w-full max-w-4xl mx-auto">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold text-center">Bitstring Histogram</CardTitle>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <div className="space-y-2">
//           <Label htmlFor="bitstringInput" className="text-sm font-medium">Enter Bitstrings with Counts (JSON):</Label>
//           <div className="flex gap-2">
//             <Input
//               id="bitstringInput"
//               value={bitstringInput}
//               onChange={(e) => setBitstringInput(e.target.value)}
//               className="font-mono flex-1"
//             />
//             <Button variant="outline" onClick={fetchBitstrings}>
//               Fetch Bitstring
//             </Button>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="chartHeight" className="text-sm font-medium">Chart Height: {chartHeight}px</Label>
//             <Slider
//               id="chartHeight"
//               value={[chartHeight]}
//               onValueChange={(value) => setChartHeight(value[0])}
//               min={200}
//               max={600}
//               step={1}
//               className="w-full"
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="barWidth" className="text-sm font-medium">Bar Width: {barWidth}px</Label>
//             <Slider
//               id="barWidth"
//               value={[barWidth]}
//               onValueChange={(value) => setBarWidth(value[0])}
//               min={5}
//               max={30}
//               step={1}
//               className="w-full"
//             />
//           </div>
//         </div>

//         <div 
//           style={{ 
//             height: `${chartHeight}px`, 
//             overflowX: 'auto', 
//             overflowY: 'auto',
//             boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//             borderRadius: '0.5rem',
//           }}
//         >
//           <div style={{ minWidth: `${Math.max(data.length * barWidth, 800)}px`, height: '100%' }}>
//             <canvas ref={chartRef} />
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }






















//hansal changes

'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController } from 'chart.js'

// Register chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController)

// Define prop types
interface BitstringHistogramProps {
  data: { bitstring: string; count: number }[];
}

export function BitstringHistogram({ data }: BitstringHistogramProps) {
  const [chartHeight, setChartHeight] = useState(400)
  const [barWidth, setBarWidth] = useState(15)
  const [bitstringInput, setBitstringInput] = useState("")
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const chartInstanceRef = useRef<Chart | null>(null)

  // Determine the max count in data
  const maxCount = useMemo(() => Math.max(...data.map(item => item.count), 0), [data]);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d')
      if (ctx) {
        if (chartInstanceRef.current) chartInstanceRef.current.destroy()

        const blueGradient = ctx.createLinearGradient(0, 0, 0, 400);
        blueGradient.addColorStop(0, 'rgba(0, 122, 255, 0.8)');
        blueGradient.addColorStop(1, 'rgba(0, 122, 255, 0.2)');

        const greenGradient = ctx.createLinearGradient(0, 0, 0, 400);
        greenGradient.addColorStop(0, 'rgba(0, 255, 0, 0.8)');
        greenGradient.addColorStop(1, 'rgba(0, 255, 0, 0.2)');

        chartInstanceRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: data.map((item) => item.bitstring),
            datasets: [
              {
                label: 'Count',
                data: data.map((item) => item.count),
                backgroundColor: data.map((item) => 
                  item.count === maxCount ? greenGradient : blueGradient
                ),
                borderColor: data.map((item) => 
                  item.count === maxCount ? 'rgb(0, 255, 0)' : 'rgb(0, 122, 255)'
                ),
                borderWidth: 1,
                barThickness: barWidth,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 1000,
              easing: 'easeOutQuart',
            },
            scales: {
              x: { 
                title: { display: true, text: 'Bitstrings' },
                ticks: { autoSkip: false, maxRotation: 90, minRotation: 90 }
              },
              y: { title: { display: true, text: 'Counts' }, beginAtZero: true },
            },
            plugins: {
              tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: 'rgb(0, 0, 0)',
                bodyColor: 'rgb(0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1,
                padding: 10,
                displayColors: false,
                callbacks: {
                  label: (context) => {
                    const value = context.parsed.y;
                    return `Count: ${value}${value === maxCount ? ' (Highest)' : ''}`;
                  }
                }
              },
            },
          },
        })
      }
    }
    return () => chartInstanceRef.current?.destroy()
  }, [data, barWidth, maxCount])

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Bitstring Histogram</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="bitstringInput" className="text-sm font-medium">Enter Bitstrings with Counts (JSON):</Label>
          <div className="flex gap-2">
            <Input
              id="bitstringInput"
              value={bitstringInput}
              onChange={(e) => setBitstringInput(e.target.value)}
              className="font-mono flex-1"
            />
            <Button variant="outline" onClick={() => setBitstringInput(JSON.stringify(data, null, 2))}>
              Load Bitstrings
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="chartHeight" className="text-sm font-medium">Chart Height: {chartHeight}px</Label>
            <Slider
              id="chartHeight"
              value={[chartHeight]}
              onValueChange={(value) => setChartHeight(value[0])}
              min={200}
              max={600}
              step={1}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="barWidth" className="text-sm font-medium">Bar Width: {barWidth}px</Label>
            <Slider
              id="barWidth"
              value={[barWidth]}
              onValueChange={(value) => setBarWidth(value[0])}
              min={5}
              max={30}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        <div 
          style={{ 
            height: `${chartHeight}px`, 
            overflowX: 'auto', 
            overflowY: 'auto',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            borderRadius: '0.5rem',
          }}
        >
          <div style={{ minWidth: `${Math.max(data.length * barWidth, 800)}px`, height: '100%' }}>
            <canvas ref={chartRef} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
