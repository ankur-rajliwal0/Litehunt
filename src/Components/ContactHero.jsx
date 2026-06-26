const ContactHero = () => {
return ( <section className="bg-[#06131F] py-24 overflow-hidden"> <div className="max-w-[1140px] mx-auto px-4">


    <div className="relative rounded-2xl border border-[#163042] bg-gradient-to-r from-[#06131F] via-[#081827] to-[#162536] p-8 md:p-16">

      {/* Glow Effect */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-[140px]"></div>

      <div className="relative max-w-3xl">

        {/* Small Heading */}

        <span className="uppercase font-inter tracking-[5px] text-xs font-semibold text-[#22D3EE]">
          Get In Touch
        </span>

        {/* Main Heading */}

        <h1 className="mt-5 text-5xl font-inter sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#D4E4FA]">
          Let's Build Something Great
        </h1>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-lg font-inter leading-8 text-[#94A3B8]">
          Whether you're looking for a performance-first web
          application, strategic SEO, or a complete digital
          overhaul, our team of engineers is ready to help you
          hunt down success.
        </p>

      </div>

    </div>

  </div>
</section>


);
};

export default ContactHero;
