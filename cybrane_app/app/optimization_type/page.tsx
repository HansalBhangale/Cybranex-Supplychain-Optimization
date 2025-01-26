// // // "use client"

// // // import { useState } from "react"
// // // import { motion } from "framer-motion"
// // // import { Card, CardContent } from "@/components/ui/card"
// // // import { Button } from "@/components/ui/button"

// // // export default function Home() {
// // //   const [selectedOption, setSelectedOption] = useState<string | null>(null)

// // //   const handleOptionClick = (option: string) => {
// // //     setSelectedOption(option)
// // //     // Here you would typically navigate to the selected optimization page
// // //     console.log(`Selected option: ${option}`)
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('')" }}>
// // //       <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-md">
// // //         <CardContent className="p-6">
// // //           <h1 className="text-3xl font-bold text-center mb-6">Supply Chain Optimization</h1>
// // //           <div className="space-y-4">
// // //             <OptimizationOption
// // //               title="Path and Time Optimization"
// // //               description="Optimize your supply chain routes and delivery times"
// // //               onClick={() => handleOptionClick("path-time")}
// // //               isSelected={selectedOption === "path-time"}
// // //             />
// // //             <OptimizationOption
// // //               title="Cost and Inventory Optimization"
// // //               description="Optimize your costs and inventory management"
// // //               onClick={() => handleOptionClick("cost-inventory")}
// // //               isSelected={selectedOption === "cost-inventory"}
// // //             />
// // //           </div>
// // //         </CardContent>
// // //       </Card>
// // //     </div>
// // //   )
// // // }

// // // interface OptimizationOptionProps {
// // //   title: string
// // //   description: string
// // //   onClick: () => void
// // //   isSelected: boolean
// // // }

// // // function OptimizationOption({ title, description, onClick, isSelected }: OptimizationOptionProps) {
// // //   return (
// // //     <motion.div
// // //       whileHover={{ scale: 1.05 }}
// // //       whileTap={{ scale: 0.95 }}
// // //     >
// // //       <Button
// // //         variant="outline"
// // //         className={`w-full h-auto flex flex-col items-start p-4 space-y-2 text-left transition-colors ${
// // //           isSelected ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
// // //         }`}
// // //         onClick={onClick}
// // //       >
// // //         <span className="text-lg font-semibold">{title}</span>
// // //         <span className="text-sm opacity-80">{description}</span>
// // //       </Button>
// // //     </motion.div>
// // //   )
// // // }



// // import Link from 'next/link';

// // // Import necessary components from Next.js and React
// // import Head from 'next/head';

// // export default function Home() {
// //   return (
// //     <div className="container">
// //       <Head>
// //         <title>Optimization Options</title>
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <main className="main">
// //         <div className="option-box">
// //           <h1 className="title">Optimization Options</h1>
// //           <div className="options">
// //             <a href="/path-time-optimization" className="option">Path and Time Optimization</a>
// //             <a href="/cost-inventory-optimization" className="option">Cost and Inventory Optimization</a>
// //           </div>
// //         </div>
// //       </main>

// //       <style jsx>{`
// //         .container {
// //           min-height: 100vh;
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: center;
// //           align-items: center;
// //           background-image: url('/background.jpg');
// //           background-size: cover;
// //           background-position: center;
// //         }

// //         .main {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           width: 100%;
// //         }

// //         .option-box {
// //           background: rgba(255, 255, 255, 0.8);
// //           border-radius: 15px;
// //           padding: 20px 40px;
// //           text-align: center;
// //           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// //         }

// //         .title {
// //           font-size: 24px;
// //           font-weight: bold;
// //           margin-bottom: 20px;
// //           color: #333;
// //         }

// //         .options {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 15px;
// //         }

// //         .option {
// //           text-decoration: none;
// //           background: #0070f3;
// //           color: white;
// //           padding: 10px 20px;
// //           border-radius: 10px;
// //           font-size: 18px;
// //           font-weight: 500;
// //           transition: background 0.3s ease;
// //         }

// //         .option:hover {
// //           background: #005bb5;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }






// // "use client"; // Mark this file as a Client Component

// // // Import necessary components from Next.js and React
// // import Head from 'next/head';

// // export default function Home() {
// //   return (
// //     <div className="container">
// //       <Head>
// //         <title>Optimization Options</title>
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <main className="main">
// //         <div className="option-box">
// //           <h1 className="title">Optimization Options</h1>
// //           <div className="options">
// //             <a href="/path-time-optimization" className="option">Path and Time Optimization</a>
// //             <a href="/cost-inventory-optimization" className="option">Cost and Inventory Optimization</a>
// //           </div>
// //         </div>
// //       </main>

// //       <style jsx>{`
// //         .container {
// //           min-height: 100vh;
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: center;
// //           align-items: center;
// //           background-image: url('/1118480_Tube_4k_3840x2160.mp4');
// //           background-size: cover;
// //           background-position: center;
// //         }

// //         .main {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           width: 100%;
// //         }

// //         .option-box {
// //           background: rgba(255, 255, 255, 0.8);
// //           border-radius: 20px;
// //           padding: 50px 50px;
// //           text-align: center;
// //           box-shadow: 10 500px 5000px rgba(0, 0, 0, 0.1);
// //         }

// //         .title {
// //           font-size: 24px;
// //           font-weight: bold;
// //           margin-bottom: 20px;
// //           color: #333;
// //         }

// //         .options {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 15px;
// //         }

// //         .option {
// //           text-decoration: none;
// //           background: #0070f3;
// //           color: white;
// //           padding: 10px 20px;
// //           border-radius: 10px;
// //           font-size: 18px;
// //           font-weight: 500;
// //           transition: background 0.3s ease;
// //         }

// //         .option:hover {
// //           background: #005bb5;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }






















// // "use client"; // Mark this file as a Client Component

// // // Import necessary components from Next.js and React
// // import Head from 'next/head';

// // export default function Home() {
// //   return (
// //     <div className="container">
// //       <Head>
// //         <title>Optimization Options</title>
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <main className="main">
// //         <video autoPlay loop muted className="background-video">
// //           <source src="/1118480_Tube_4k_3840x2160.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>

// //         <div className="option-box">
// //           <h1 className="title">Optimization Options</h1>
// //           <div className="options">
// //             <a href="/path-time-optimization" className="option">Path and Time Optimization</a>
// //             <a href="/cost-inventory-optimization" className="option">Cost and Inventory Optimization</a>
// //           </div>
// //         </div>
// //       </main>

// //       <style jsx>{`
// //         .container {
// //           min-height: 100vh;
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: center;
// //           align-items: center;
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .main {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           width: 100%;
// //           height: 100vh;
// //           position: relative;
// //           z-index: 1;
// //         }

// //         .background-video {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           object-fit: cover;
// //           z-index: 0;
// //         }

// //         .option-box {
// //           background: rgba(202, 182, 130, 0.8);
// //           border-radius: 20px;
// //           padding: 200px 300px;
// //           text-align: center;
// //           box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
// //           z-index: 2;
// //         }

// //         .title {
// //           font-size: 24px;
// //           font-weight: bold;
// //           margin-bottom: 20px;
// //           color: #333;
// //         }

// //         .options {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 15px;
// //         }

// //         .option {
// //           text-decoration: none;
// //           background:rgb(97, 0, 243);
// //           color: yellow;
// //           padding: 10px 20px;
// //           border-radius: 10px;
// //           font-size: 18px;
// //           font-weight: 500;
// //           transition: background 0.3s ease;
// //         }

// //         .option:hover {
// //           background: #005bb5;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }








// // "use client"; // Mark this file as a Client Component

// // import Head from 'next/head';

// // export default function Home() {
// //   return (
// //     <div className="container">
// //       <Head>
// //         <title>Optimization Options</title>
// //         <link rel="icon" href="/favicon.ico" />
// //       </Head>

// //       <main className="main">
// //         <video autoPlay loop muted className="background-video">
// //           <source src="/1118480_Tube_4k_3840x2160.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>

// //         <div className="option-box">
// //           <h1 className="title">Optimization Options</h1>
// //           <div className="options">
// //             <a href="/path-time-optimization" className="option">Path and Time Optimization</a>
// //             <a href="/cost-inventory-optimization" className="option">Cost and Inventory Optimization</a>
// //           </div>
// //         </div>
// //       </main>

// //       <style jsx>{`

      
// //         .container {
// //           min-height: 100vh;
// //           display: flex;
// //           flex-direction: column;
// //           justify-content: center;
// //           align-items: center;
// //           position: relative;
// //           overflow: hidden;
// //         }

// //         .main {
// //           display: flex;
// //           justify-content: center;
// //           align-items: center;
// //           width: 100%;
// //           height: 100vh;
// //           position: relative;
// //           z-index: 1;
// //         }

// //         .background-video {
// //           position: absolute;
// //           top: 0;
// //           left: 0;
// //           width: 100%;
// //           height: 100%;
// //           object-fit: cover;
// //           z-index: 0;
// //         }

// //         .option-box {
// //           background: rgba(202, 182, 130, 0.8);
// //           border-radius: 20px;
// //           padding: 200px 300px;
// //           text-align: center;
// //           box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
// //           z-index: 2;
// //         }

// //         .title {
// //           font-size: 24px;
// //           font-weight: bold;
// //           margin-bottom: 20px;
// //           color: #333;
// //         }

// //         .options {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 15px;
// //         }

// //         .option {
// //           text-decoration: none;
// //           background: rgb(97, 0, 243);
// //           color: yellow;
// //           padding: 10px 20px;
// //           border-radius: 10px;
// //           font-size: 18px;
// //           font-weight: 500;
// //           transition: background 0.3s ease;
// //         }

// //         .option:hover {
// //           background: #005bb5;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }






// "use client"; // Mark this file as a Client Component

// import Head from 'next/head';

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Optimization Options</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="main">
//         <video autoPlay loop muted className="background-video">
//           <source src="/1118480_Tube_4k_3840x2160.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className="option-box">
//           <h1 className="title">Optimization Options</h1>
//           <div className="options">
//             <a href="/path-time-optimization" className="option">Path and Time Optimization</a>
//             <a href="/cost-inventory-optimization" className="option">Cost and Inventory Optimization</a>
//           </div>
//         </div>
//       </main>

//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box; /* Ensures padding doesn't affect width */
//         }

//         html, body {
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//         }

//         .container {
//           width: 100vw;
//           height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           position: relative;
//           overflow: hidden;
//         }

//         .main {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 1;
//         }

//         .background-video {
//           position: fixed; /* Ensures video covers the viewport */
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           z-index: -1; /* Sends video to the background */
//         }

//         .option-box {
//           background: rgba(202, 182, 130, 0.8);
//           border-radius: 20px;
//           padding: 50px 70px; /* Adjust padding for better fit */
//           text-align: center;
//           box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
//           z-index: 2;
//         }

//         .title {
//           font-size: 32px;
//           font-weight: bold;
//           margin-bottom: 20px;
//           color: #333;
//         }

//         .options {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .option {
//           text-decoration: none;
//           background: rgb(97, 0, 243);
//           color: yellow;
//           padding: 10px 20px;
//           border-radius: 10px;
//           font-size: 18px;
//           font-weight: 500;
//           transition: background 0.3s ease;
//         }

//         .option:hover {
//           background: #005bb5;
//         }
//       `}</style>
//     </div>
//   );
// }






// "use client"; // Mark this file as a Client Component

// import Head from 'next/head';

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Optimization Options</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="main">
//         <video autoPlay loop muted className="background-video">
//           {/* <source src="/1118480_Tube_4k_3840x2160.mp4" type="video/mp4" /> */}
//           Your browser does not support the video tag.
//         </video>

//         <div className="option-box">
//           <h1 className="title">Optimization Options</h1>
//           <div className="options">
//             <a href="/Dashboard_path_op" className="option">Path and Time Optimization</a>
//             <a href="/Dashboard_cost_inventory" className="option">Cost and Inventory Optimization</a>
//           </div>
//         </div>
//       </main>

//       <style jsx>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box; /* Ensures padding doesn't affect width */
//         }

//         html, body {
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//         }

//         .container {
//           width: 100vw;
//           height: 100vh;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           position: relative;
//           overflow: hidden;
//         }

//         .main {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           z-index: 0;
//         }

//         .background-video {
//           position: fixed; /* Ensures video covers the viewport */
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           z-index: -1; /* Sends video to the background */
//         }

//         .option-box {
//           background: rgba(32, 61, 119, 0.78);
//           border-radius: 20px;
//           padding: 90px 200px; /* Adjust padding for better fit */
//           text-align: center;
//           box-shadow: 0px 10px 20px rgb(0, 0, 0);
//           z-index: 0;
//           position: absolute;
//           top: 45%;
//           left: 55%;
//           transform: translate(-50%, -50%);
//         }

//         .title {
//           font-size: 32px;
//           font-weight: bold;
//           margin-bottom: 20px;
//           color: #333;
//         }

//         .options {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//         }

//         .option {
//           text-decoration: none;
//           background: rgb(254, 254, 254);
//           color: yellow;
//           padding: 10px 20px;
//           border-radius: 10px;
//           font-size: 18px;
//           font-weight: 500;
//           transition: background 0.3s ease;
//         }

//         .option:hover {
//           background:rgb(203, 203, 203);
//         }
//             `}</style>
//     </div>
//   );
// }

















'use client'

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <div className="option-box">
          <h1 className="title">Optimization Options</h1>
          <div className="options">
            <a href="/Dashboard_path_op" className="option">Path and Time Optimization</a>
            <a href="/Dashboard_cost_inventory" className="option">Cost and Inventory Optimization</a>
          </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          width: 100vw;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .main {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .option-box {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 60px 100px;
          text-align: center;
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
          margin: 20px;
        }

        .title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 30px;
          color: #333;
        }

        .options {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .option {
          text-decoration: none;
          background: #0047AB;
          color: white;
          padding: 15px 25px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 500;
          transition: background 0.3s ease, transform 0.2s ease;
          display: block;
          width: 100%;
        }

        .option:hover {
          background: #003380;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}

