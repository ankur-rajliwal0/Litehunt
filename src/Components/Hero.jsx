
import { ArrowRight, Zap  } from "lucide-react";
const Hero = () => {
  return (
    <section className="bg-[#051424]">
  <div className="container max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-3">
    <div className="flex flex-col items-center pt-16 md:pt-24 lg:pt-28 pb-20 md:pb-28 lg:pb-32">


  {/* Badge */}
  <div className="flex items-center gap-2 rounded-full border font-inter border-[#45464C4D] px-4 py-2 text-xs sm:text-sm font-medium text-white">
    <Zap size={16} className="text-[#22D3EE] font-inter" />
    HIGH-PERFORMANCE ENGINEERING
  </div>

  {/* Heading */}
  <h1 className="mt-8 max-w-5xl text-center font-bold text-[#D4E4FA]
  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
  leading-tight lg:leading-[1.1] font-inter">
    The Engineering Choice for
    <br className="hidden md:block" />
    Enterprise Solutions
  </h1>

  {/* Description */}
  <p className="mt-6 max-w-2xl text-center text-[#C6C6C7]
  text-base sm:text-lg leading-7 font-inter">
    We specialize in high-performance frontend, scalable backend,
    and specialized solutions for Ecommerce and Real Estate sectors.
  </p>

  {/* Buttons */}
  <div className="mt-10 flex w-full flex-col sm:flex-row items-center justify-center gap-4">

    <button className="group flex w-full font-inter sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#22D3EE] px-6 py-4 font-semibold text-[#0B1120] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] active:scale-95">
      Start a Project
      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
    </button>

    <button className="group flex w-full font-inter sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#22D3EE]/40 px-6 py-4 font-semibold text-[#D4E4FA] transition-all duration-300 hover:-translate-y-1 hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] active:scale-95">
      View Portfolio
    </button>

  </div>
</div>


  </div>
</section>
  )
}

export default Hero