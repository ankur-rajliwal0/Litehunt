import { CircleCheck, Code2 } from "lucide-react";

const WhyChooseHero = () => {
return ( <section className="bg-[#06131F] py-24 lg:py-32"> <div className="max-w-[1140px] mx-auto px-4">


    <div className="mx-auto max-w-4xl text-center">

      {/* Small Label */}

      <span className="text-xs font-inter font-semibold uppercase tracking-[5px] text-[#22D3EE]">
        Why LiteHunt
      </span>

      {/* Heading */}

      <h1 className="mt-6 text-5xl font-inter sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#D4E4FA]">
        Engineering Superiority.
        <br />
        <span className="text-[#6B7280]">
          Digital Mastery.
        </span>
      </h1>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-2xl font-inter text-base md:text-lg leading-8 text-[#94A3B8]">
        We don't just build websites; we engineer
        high-performance digital engines. Our philosophy is
        rooted in clean code, architectural precision, and
        uncompromising speed.
      </p>

      {/* Badges */}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

        <div className="flex items-center gap-2 font-inter rounded-full border border-[#22384D] bg-[#0D1C2A] px-5 py-3 text-sm text-[#D4E4FA] transition hover:border-cyan-400">

          <CircleCheck
            size={18}
            className="text-cyan-400"
          />

          <span>99.9% Performance Score</span>

        </div>

        <div className="flex items-center gap-2 font-inter rounded-full border border-[#22384D] bg-[#0D1C2A] px-5 py-3 text-sm text-[#D4E4FA] transition hover:border-cyan-400">

          <Code2
            size={18}
            className="text-cyan-400"
          />

          <span>Enterprise Grade Code</span>

        </div>

      </div>

    </div>

  </div>
</section>


);
};

export default WhyChooseHero;
