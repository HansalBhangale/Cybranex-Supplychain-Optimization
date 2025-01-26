// // 'use client'

// // import Link from 'next/link'
// // import { useState, useEffect } from 'react'
// // import { Button } from "@/components/ui/button"
// // import { ArrowLeft } from 'lucide-react'

// // export default function AdvantagesPage() {
// //   const [videoError, setVideoError] = useState(false)

// //   useEffect(() => {
// //     const video = document.querySelector('video')
// //     if (video) {
// //       video.addEventListener('error', () => setVideoError(true))
// //     }
// //     return () => {
// //       if (video) {
// //         video.removeEventListener('error', () => setVideoError(true))
// //       }
// //     }
// //   }, [])

// //   return (
// //     <div className="min-h-screen flex flex-col relative text-white">
// //       {/* Background Video */}
// //       {!videoError ? (
// //         <video
// //           autoPlay
// //           loop
// //           muted
// //           playsInline
// //           className="absolute inset-0 w-full h-full object-cover z-0"
// //           onError={() => setVideoError(true)}
// //         >
// //           <source src="/456206_Containers_Shipping Containers_3840x2160.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //       ) : (
// //         <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 z-0" />
// //       )}
      
// //       {/* Content Overlay */}
// //       <div className="relative z-10 flex-1 flex flex-col p-6 bg-black bg-opacity-50 min-h-screen">
// //         {/* Back Button */}
// //         <Link href="/" className="absolute top-4 left-4">
// //           <Button variant="outline" size="icon">
// //             <ArrowLeft className="h-4 w-4" />
// //           </Button>
// //         </Link>

// //         <main className="flex-1 flex flex-col justify-center items-center text-center">
// //           <div className="max-w-4xl w-full bg-black bg-opacity-70 p-8 rounded-lg">
// //             <h2 className="text-3xl font-bold mb-6">
// //               Advantages of Using Quantum Algorithms in Supply Chain Management
// //             </h2>
// //             <ul className="list-disc list-inside text-left space-y-4 mb-8">
// //               <li><strong>Enhanced Optimization:</strong> Quantum algorithms can solve complex optimization problems faster, such as minimizing costs or maximizing efficiency in supply chains.</li>
// //               <li><strong>Better Forecasting:</strong> They improve predictive accuracy in demand and supply forecasting by processing large datasets efficiently.</li>
// //               <li><strong>Dynamic Routing:</strong> Enable real-time recalibration of delivery routes to reduce delays and costs.</li>
// //               <li><strong>Improved Decision-Making:</strong> Provide better decision-making tools by simulating various supply chain scenarios more effectively than classical methods.</li>
// //               <li><strong>Cost and Time Efficiency:</strong> Help reduce operational costs and decision-making time, providing a competitive edge.</li>
// //             </ul>
// //             <Button size="lg" className="px-8 py-4 text-lg">
// //               Unleash Potential
// //             </Button>
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   )
// // }

// 'use client'

// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { ArrowLeft } from 'lucide-react'

// export default function AdvantagesPage() {
//   const [videoError, setVideoError] = useState(false)

//   useEffect(() => {
//     const video = document.querySelector('video')
//     if (video) {
//       video.addEventListener('error', () => setVideoError(true))
//     }
//     return () => {
//       if (video) {
//         video.removeEventListener('error', () => setVideoError(true))
//       }
//     }
//   }, [])

//   return (
//     <div className="min-h-screen flex flex-col relative text-white">
//       {/* Background Video */}
//       {!videoError ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0"
//           onError={() => setVideoError(true)}
//         >
//           <source src="/456206_Containers_Shipping Containers_3840x2160.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 z-0" />
//       )}
      
//       {/* Content Overlay */}
//       <div className="relative z-10 flex-1 flex flex-col p-6 bg-black bg-opacity-50 min-h-screen">
//         {/* Back Button */}
//         <Link href="/" className="absolute top-4 left-4">
//           <Button variant="outline" size="icon">
//             <ArrowLeft className="h-4 w-4" />
//           </Button>
//         </Link>

//         <main className="flex-1 flex flex-col justify-center items-center text-center">
//           <div className="max-w-5xl w-full bg-gray-200 bg-opacity-40 p-12 rounded-lg">
//             <h2 className="text-5xl font-extrabold mb-8 text-black">
//               Advantages of Using Quantum Algorithms in Supply Chain Management
//             </h2>
//             <ul className="list-disc list-inside text-left space-y-6 mb-10 text-lg text-black font-bold">
//               <li><strong>Enhanced Optimization:</strong> Quantum algorithms can solve complex optimization problems faster, such as minimizing costs or maximizing efficiency in supply chains.</li>
//               <li><strong>Better Forecasting:</strong> They improve predictive accuracy in demand and supply forecasting by processing large datasets efficiently.</li>
//               <li><strong>Dynamic Routing:</strong> Enable real-time recalibration of delivery routes to reduce delays and costs.</li>
//               <li><strong>Improved Decision-Making:</strong> Provide better decision-making tools by simulating various supply chain scenarios more effectively than classical methods.</li>
//               <li><strong>Cost and Time Efficiency:</strong> Help reduce operational costs and decision-making time, providing a competitive edge.</li>
//             </ul>
//             <Link href="/get-started">
//               <Button size="lg" className="px-8 py-4 text-lg">
//                 Unleash Potential
//               </Button>
//             </Link>
//           </div>
//         </main>
//       </div>
//     </div>
//   )
// }

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from 'framer-motion'

export default function AdvantagesPage() {
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = document.querySelector('video')
    if (video) {
      video.addEventListener('error', () => setVideoError(true))
    }
    return () => {
      if (video) {
        video.removeEventListener('error', () => setVideoError(true))
      }
    }
  }, [])

  return (
    <AnimatePresence mode = "wait">
      <motion.div
        key="advantages-page"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.1 }}
        className="min-h-screen flex flex-col relative text-white"
      >
        {/* Background Video */}
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            onError={() => setVideoError(true)}
          >
            <source src="/456206_Containers_Shipping Containers_3840x2160.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 z-0" />
        )}

        {/* Content Overlay */}
        <div className="relative z-10 flex-1 flex flex-col p-8 bg-gray-800 bg-opacity-70 min-h-screen">
          <main className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="max-w-7xl w-full bg-gray-700 bg-opacity-80 p-8 rounded-xl">
              <h2 className="text-4xl font-extrabold mb-6">
                Advantages of Using Quantum Algorithms in Supply Chain Management
              </h2>
              <ul className="list-disc list-inside text-left space-y-4 text-xl font-bold mb-8">
                <li>Enhanced Optimization: Faster solutions to complex problems.</li>
                <li>Better Forecasting: Improved predictive accuracy.</li>
                <li>Dynamic Routing: Real-time recalibration of delivery routes.</li>
                <li>Improved Decision-Making: Simulate scenarios effectively.</li>
                <li>Cost and Time Efficiency: Operational cost reduction.</li>
              </ul>
              <Button size="lg" className="px-8 py-4 text-lg">
                <Link href="/profilesetup">Unleash Potential</Link>
              </Button>
            </div>
          </main>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
