import { ArrowRight } from "lucide-react";

const portfolioData = [
{
id: 1,
image:
"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
category: "REAL ESTATE PLATFORM",
title: "Prime Estate Portal",
description:
"Building a high-performance React-based listing engine for luxury real estate markets.",
},
{
id: 2,
image:
"https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
category: "ECOMMERCE SHOP",
title: "Velo Lifestyle",
description:
"Modern ecommerce experience designed for premium brands and seamless checkout.",
},
];

const Portfolio = () => {
return ( <section className="bg-[#06131F] py-20"> <div className="max-w-[1140px] mx-auto px-4">


    {/* Heading */}

    <div className="mb-12">
      <p className="text-[#22D3EE] uppercase tracking-[3px] text-xs font-semibold font-inter">
        The Portfolio
      </p>

      <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#D4E4FA] font-inter">
        Architectural Excellence in Practice
      </h2>
    </div>

    {/* Portfolio Cards */}

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Large Card */}

      <div className="lg:col-span-2 group relative overflow-hidden rounded-xl">

        <img
          src={portfolioData[0].image}
          alt={portfolioData[0].title}
          className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#06131F] via-[#06131F]/50 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8">

          <p className="text-[#22D3EE] text-xs font-inter tracking-[3px] uppercase">
            {portfolioData[0].category}
          </p>

          <h3 className="text-3xl font-bold font-inter text-white mt-3">
            {portfolioData[0].title}
          </h3>

          <p className="text-[#C6C6C7] font-inter max-w-md leading-7 mt-4">
            {portfolioData[0].description}
          </p>

          <button className="group mt-8 flex items-center font-inter gap-2 text-white font-semibold">
            View Case Study
            <ArrowRight className="transition duration-300 group-hover:translate-x-2" />
          </button>

        </div>

      </div>

      {/* Small Card */}

      <div className="group relative overflow-hidden rounded-xl">

        <img
          src={portfolioData[1].image}
          alt={portfolioData[1].title}
          className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#06131F] via-[#06131F]/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 p-8">

          <p className="text-[#22D3EE] text-xs tracking-[3px] uppercase">
            {portfolioData[1].category}
          </p>

          <h3 className="text-2xl font-bold text-white mt-3">
            {portfolioData[1].title}
          </h3>

          <p className="text-[#C6C6C7] leading-7 mt-4">
            {portfolioData[1].description}
          </p>

          <button className="group mt-8 flex items-center gap-2 text-white font-semibold">
            Explore
            <ArrowRight className="transition duration-300 group-hover:translate-x-2" />
          </button>

        </div>

      </div>

    </div>

  </div>
</section>


);
};

export default Portfolio;
