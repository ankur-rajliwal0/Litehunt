const ServicesHero = () => {
return ( <section className="bg-[#06131F] py-24 md:py-32"> <div className="max-w-[1140px] mx-auto px-4">


    <div className="flex flex-col items-center text-center">

      {/* Small Heading */}

      <span className="uppercase font-inter tracking-[5px] text-xs font-semibold text-[#22D3EE]">
        LiteHunt Ecosystem
      </span>

      {/* Main Heading */}

      <h1 className="mt-6 font-inter max-w-5xl font-bold leading-[1.05]
      text-5xl sm:text-6xl md:text-7xl lg:text-[82px]
      text-[#D4E4FA]">

        Precision Engineered
        <br />

        Digital{" "}
        <span className="text-[#22D3EE]">
          Solutions
        </span>

      </h1>

      {/* Description */}

      <p className="mt-8 max-w-2xl font-inter text-base md:text-lg leading-8 text-[#94A3B8]">
        We combine technical mastery with strategic creativity
        to build high-performance digital products that scale
        with your ambitions.
      </p>

    </div>

  </div>
</section>


);
};

export default ServicesHero;
