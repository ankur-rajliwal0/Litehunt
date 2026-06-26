import React from "react";

function HeroPortFolio() {
  return (
    <section className="bg-[#071320] border-t border-[#162333]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">

        {/* Small Heading */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-[1px] bg-gray-400"></div>

          <span className="uppercase tracking-[3px] text-sm text-gray-300 font-medium">
            Our Portfolio
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[#d9e7fb] text-6xl md:text-7xl lg:text-[88px] leading-[0.95] font-bold max-w-4xl">
          Engineering Digital
          <br />
          Excellence.
        </h1>

        {/* Description */}
        <p className="mt-10 max-w-3xl text-xl leading-9 text-gray-400">
          A curated selection of high-performance web applications and
          strategic marketing campaigns that drove measurable growth for our
          partners.
        </p>

      </div>
    </section>
  );
}

export default HeroPortFolio;