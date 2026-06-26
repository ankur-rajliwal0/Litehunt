import React from "react";

function HeroPricing() {
  return (
    <section className="relative overflow-hidden bg-[#051424] py-28 md:py-36">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "38px 38px",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#051424]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Small Heading */}
        <p className="inter uppercase tracking-[0.4em] text-[11px] text-gray-400 mb-8">
          Pricing & Plans
        </p>

        {/* Main Heading */}
        <h1
          className="
            inter
            font-extrabold
            text-[#DCE6F5]
            text-5xl
            sm:text-6xl
            lg:text-7xl
            leading-none
            drop-shadow-[0_3px_0_rgba(0,0,0,0.55)]
          "
        >
          Sophisticated Solutions,
          <br />
          Engineered for
          <br />
          Performance.
        </h1>

        {/* Description */}
        <p className="inter max-w-3xl mx-auto mt-10 text-gray-400 text-lg leading-8">
          Transparent pricing for high-performance digital infrastructure.
          Choose the blueprint that matches your ambition.
        </p>
      </div>
    </section>
  );
}

export default HeroPricing;