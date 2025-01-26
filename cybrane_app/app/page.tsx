// // 'use client'

// // import Link from 'next/link'
// // import { useState, useEffect } from 'react'
// // import { Button } from "@/components/ui/button"



// // export default function IntroductionScreen() {
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
// //           <source src="/1118493_Liquid_4k_3840x2160.mp4" type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //       ) : (
// //         <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 z-0" />
// //       )}
      
// //       {/* Content Overlay */}
// //       <div className="relative z-10 flex-1 flex flex-col p-6 bg-black bg-opacity-50 min-h-screen">
// //         <header className="mb-8 text-center">
// //         <h1 className="text-6xl font-black mb-4 tracking-tighter uppercase">            Quantum Supply Chain Optimization
// //           </h1>
// //           <p className="text-xl">
// //             Revolutionizing supply chain management with the power of quantum computing
// //           </p>
// //         </header>

// //         <main className="flex-1 flex flex-col justify-center items-center text-center">
// //           <div className="max-w-3xl mb-12 bg-black bg-opacity-50 p-8 rounded-lg">
// //             <h2 className="text-3xl font-bold mb-4">Highlighted Feature</h2>
// //             <p className="text-lg mb-6">
// //               Quantum computing optimizes supply chains by solving complex problems like inventory management, 
// //               route optimization, and demand forecasting with unparalleled speed and precision. It enhances 
// //               production scheduling, reduces costs, and identifies risks by evaluating scenarios quickly, 
// //               enabling smarter, more adaptive decision-making for modern supply chains.
// //             </p>
            
// //           </div>

// //           <Button asChild size="lg" className="px-8 py-4 text-lg">
// //             <Link href="/advantages">Get Started</Link>
// //           </Button>
// //         </main>
// //       </div>
// //     </div>
// //   )
// // }

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

export default function IntroductionScreen() {
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
    <motion.div
      className="min-h-screen flex flex-col relative text-white"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
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
          <source src="/1118493_Liquid_4k_3840x2160.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 z-0" />
      )}
      
      {/* Content Overlay */}
      <div className="relative z-10 flex-1 flex flex-col p-6 bg-black bg-opacity-50 min-h-screen">
        <header className="mb-8 text-center">
          <h1 className="text-8xl font-black mb-4 tracking-tighter uppercase">
            Quantum Supply Chain Optimization
          </h1>
          <p className="text-4xl font-black mb-4 tracking-tighter uppercase">
            Revolutionizing supply chain management with the power of quantum computing
          </p>
        </header>

        <main className="flex-1 flex flex-col justify-center items-center text-center">
          <motion.div
            className="max-w-4xl w-full h-80 bg-black bg-opacity-50 p-8 rounded-lg mb-8"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold mb-4">Highlighted Feature</h2>
            <p className="text-xl mb-40">
              Quantum computing optimizes supply chains by solving complex problems like inventory management, 
              route optimization, and demand forecasting with unparalleled speed and precision. It enhances 
              production scheduling, reduces costs, and identifies risks by evaluating scenarios quickly, 
              enabling smarter, more adaptive decision-making for modern supply chains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild size="lg" className="px-8 py-4 text-lg">
              <Link href="/advantages">Get Started</Link>
            </Button>
          </motion.div>
        </main>
      </div>
    </motion.div>
  )
}






// 'use client'

// import Link from 'next/link'
// import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { motion } from 'framer-motion'

// export default function IntroductionScreen() {
//   const [videoError, setVideoError] = useState(false)

//   useEffect(() => {
//     // Use a ref-based approach to ensure event listeners are managed correctly
//     const video = document.querySelector('video')
//     const handleError = () => setVideoError(true)

//     if (video) {
//       video.addEventListener('error', handleError)
//     }

//     return () => {
//       if (video) {
//         video.removeEventListener('error', handleError)
//       }
//     }
//   }, [])

//   return (
//     <motion.div
//       className="min-h-screen flex flex-col relative text-white"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//     >
//       {/* Background Video */}
//       {!videoError ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 w-full h-full object-cover z-0"
//           onError={() => setVideoError(true)} // Ensure onError is properly handled
//         >
//           <source src="/1118493_Liquid_4k_3840x2160.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 z-0" />
//       )}
      
//       {/* Content Overlay */}
//       <div className="relative z-10 flex-1 flex flex-col p-6 bg-black bg-opacity-50 min-h-screen">
//         <header className="mb-8 text-center">
//           <h1 className="text-6xl font-black mb-4 tracking-tighter uppercase">
//             Quantum Supply Chain Optimization
//           </h1>
//           <p className="text-xl">
//             Revolutionizing supply chain management with the power of quantum computing
//           </p>
//         </header>

//         <main className="flex-1 flex flex-col justify-center items-center text-center">
//           <motion.div
//             className="max-w-3xl mb-12 bg-black bg-opacity-50 p-8 rounded-lg"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h2 className="text-3xl font-bold mb-4">Highlighted Feature</h2>
//             <p className="text-lg mb-6">
//               Quantum computing optimizes supply chains by solving complex problems like inventory management, 
//               route optimization, and demand forecasting with unparalleled speed and precision. It enhances 
//               production scheduling, reduces costs, and identifies risks by evaluating scenarios quickly, 
//               enabling smarter, more adaptive decision-making for modern supply chains.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Button asChild size="lg" className="px-8 py-4 text-lg">
//               <Link href="/advantages">Get Started</Link>
//             </Button>
//           </motion.div>
//         </main>
//       </div>
//     </motion.div>
//   )
// }
