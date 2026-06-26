// import React from "react";
// import {

//   FlaskConical,
//   Target,
//   TrendingUp,
// } from "lucide-react";
// import overlayandBlur from "../assets/images/Overlay+Blur.svg";
// import codingpic from "../assets/images/ourMissionCodingPic.webp";
// import InnovativePic from "../assets/images/InnovationOurMission.webp";
// import PrecisionPic from "../assets/images/PrecisionOurMission.webp";
// import ResultsPic from "../assets/images/ResultsOurMission.webp";

// import { Gauge, Boxes } from "lucide-react";

// function OurMission() {
//   return (
//     <section className="relative bg-[#051424] overflow-hidden">
//       {/* ================= HERO SECTION ================= */}
//       <div className="relative min-h-screen flex items-center justify-center px-6">
//         {/* Background Blur */}
//         <img
//           src={overlayandBlur}
//           alt=""
//           className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
//         />

//         <div className="relative z-10 max-w-4xl text-center">
//           <p className="inter text-[10px] md:text-xs tracking-[0.5em] uppercase text-gray-400 mb-8">
//             OUR VISION 2026
//           </p>

//           <h1 className="inter text-5xl sm:text-6xl md:text-7xl font-bold text-[#DCE6F5] leading-none">
//             Building the Web's
//             <br />
//             Fastest Engines.
//           </h1>

//           <p className="inter mt-8 text-gray-400 max-w-2xl mx-auto leading-7 text-sm md:text-base">
//             We engineer digital infrastructure that doesn't just run—it
//             excels. LiteHunt is dedicated to the pursuit of absolute
//             performance and infinite scalability.
//           </p>
//         </div>
//       </div>

//       {/* ================= MISSION SECTION ================= */}
//       <div className="relative py-20 lg:py-32">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
//             {/* Left Card */}
//             <div className="bg-[#101D30] border border-[#1A2A42] rounded-lg p-6 md:p-8 hover:bg-[#c1c6db09] transition-all duration-300 hover:scale-102">
//               <h2 className="inter text-3xl font-bold text-[#DCE6F5] mb-5">
//                 The Mission
//               </h2>

//               <p className="inter text-gray-400 leading-8 text-sm md:text-base">
//                 Our mission is to dismantle the barriers of legacy web
//                 performance. We build digital products that are architected
//                 for speed, ensuring that high-growth companies can scale
//                 without technical friction. Every line of code we write is a
//                 commitment to excellence.
//               </p>

//               <div className="mt-8 overflow-hidden rounded-lg border border-[#22324A]">
//                 <img
//                   src={codingpic}
//                   alt="Coding Setup"
//                   className="w-full h-[220px] md:h-[320px] object-cover"
//                 />
//               </div>
//             </div>

//             {/* Right Cards */}
//             <div className="flex flex-col gap-6">
//               {/* Card 1 */}
//               <div className="bg-[#101D30] border border-[#1A2A42] rounded-lg p-8 hover:bg-[#c1c6db09] transition-all duration-300 hover:scale-102">
//                 <div className="mb-5 text-gray-300">
//                   <Gauge size={24} />
//                 </div>

//                 <h3 className="inter text-xl font-semibold text-[#DCE6F5]">
//                   99th Percentile
//                 </h3>

//                 <p className="inter mt-4 text-gray-400 leading-7 text-sm">
//                   We optimize for core web vitals that place our clients in
//                   the top tier of global performance metrics.
//                 </p>
//               </div>

//               {/* Card 2 */}
//               <div className="bg-[#101D30] border border-[#1A2A42] rounded-lg p-8 hover:bg-[#c1c6db09] transition-all duration-300 hover:scale-102">
//                 <div className="mb-5 text-gray-300">
//                   <Boxes size={24} />
//                 </div>

//                 <h3 className="inter text-xl font-semibold text-[#DCE6F5]">
//                   Infinite Scaling
//                 </h3>

//                 <p className="inter mt-4 text-gray-400 leading-7 text-sm">
//                   Cloud-native architectures designed to handle traffic spikes
//                   from 100 to 1,000,000 users seamlessly.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* ================= PILLARS SECTION ================= */}
// <div className="relative py-24 lg:py-32">
//   <div className="max-w-7xl mx-auto px-6 lg:px-12">
    
//     {/* Heading */}
//     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
//       <div>
//         <h2 className="inter text-4xl md:text-5xl font-bold text-[#DCE6F5] leading-tight">
//           The Pillars of Sophisticated
//           <br />
//           Engineering
//         </h2>

//         <p className="inter mt-6 text-gray-400 max-w-xl leading-7">
//           Our values are not just words—they are the technical
//           requirements we apply to every project lifecycle.
//         </p>
//       </div>

//       <p className="inter text-xs tracking-[0.4em] text-gray-500 uppercase">
//         01 — 03 Core Values
//       </p>
//     </div>

//     {/* Cards */}
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      
//       {/* Precision */}
//       <div className="group">
//         <div className="overflow-hidden rounded-lg border border-[#1A2A42]">
//           <img
//             src={PrecisionPic}
//             alt="Precision"
//             className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
//           />
//         </div>

//         <div className="mt-6">
//           <div className="flex items-center gap-2 text-[#DCE6F5]">
//             <Target size={18} />
//             <h3 className="inter text-2xl font-semibold">
//               Precision
//             </h3>
//           </div>

//           <p className="inter mt-4 text-gray-400 leading-7">
//             We measure twice and cut once. Every API endpoint,
//             database schema, and UI interaction is crafted with
//             surgical accuracy to eliminate waste.
//           </p>
//         </div>
//       </div>

//       {/* Innovation */}
//       <div className="group">
//         <div className="overflow-hidden rounded-lg border border-[#1A2A42]">
//           <img
//             src={InnovativePic}
//             alt="Innovation"
//             className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
//           />
//         </div>

//         <div className="mt-6">
//           <div className="flex items-center gap-2 text-[#DCE6F5]">
//             <FlaskConical size={18} />
//             <h3 className="inter text-2xl font-semibold">
//               Innovation
//             </h3>
//           </div>

//           <p className="inter mt-4 text-gray-400 leading-7">
//             We don't follow trends; we set the standard.
//             Leveraging the latest in WebAssembly, Edge
//             Computing, and AI to build what others think
//             is impossible.
//           </p>
//         </div>
//       </div>

//       {/* Results */}
//       <div className="group">
//         <div className="overflow-hidden rounded-lg border border-[#1A2A42]">
//           <img
//             src={ResultsPic}
//             alt="Results"
//             className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
//           />
//         </div>

//         <div className="mt-6">
//           <div className="flex items-center gap-2 text-[#DCE6F5]">
//             <TrendingUp size={18} />
//             <h3 className="inter text-2xl font-semibold">
//               Results
//             </h3>
//           </div>

//           <p className="inter mt-4 text-gray-400 leading-7">
//             Engineering is useless without impact. We focus on
//             ROI, conversion speed, and uptime—the metrics that
//             actually move the needle for your business.
//           </p>
//         </div>
//       </div>

//     </div>
//   </div>
// </div>



//     </section>
//   );
// }

// export default OurMission;


import React from 'react'
import HeroOurMission from '../Components/HeroOurMission'
import TheMission from '../Components/TheMission'
import Pillers from '../Components/Pillers'
import ReadyEngeneer from '../Components/ReadyEngeneer'

function OurMission() {
  return (
    <div className='bg-[#051424]'>
      <HeroOurMission/>
      <TheMission/>
      <Pillers/>
      <ReadyEngeneer/>
    </div>
  )
}

export default OurMission
