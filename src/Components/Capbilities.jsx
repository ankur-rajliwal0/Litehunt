import { Code2, ShoppingCart, SearchCheck } from "lucide-react";

const capabilities = [
  {
    id: 1,
    icon: <Code2 size={26} />,
    title: "Web Architecture",
    description:
      "Expert frontend and backend delivery using React, Node.js, and HTML/CSS for real estate and business platforms.",
    points: ["FULLSTACK DEVELOPMENT", "REACT & NODE.JS"],
  },
  {
    id: 2,
    icon: <ShoppingCart size={26} />,
    title: "Ecommerce Engineering",
    description:
      "Sophisticated online stores built on WordPress and Shopify, optimized for high conversion and scale.",
    points: ["SHOPIFY & WORDPRESS", "PAYMENT INTEGRATION"],
  },
  {
    id: 3,
    icon: <SearchCheck size={26} />,
    title: "Technical SEO",
    description:
      "Specialized Technical SEO for Web Performance that drives organic growth through architectural superiority.",
    points: ["CORE WEB VITALS", "SEMANTIC ARCHITECTURE"],
  },
];

const Capabilities = () => {
  return (
    <section className="bg-[#06131F] py-20">
      <div className="max-w-[1140px] mx-auto px-4">

        {/* Top Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-14">

          <div className="max-w-2xl">
            <span className="text-[#22D3EE] font-inter uppercase tracking-[4px] text-xs font-semibold">
              Core Capabilities
            </span>

            <h2 className="text-white text-3xl font-inter md:text-5xl font-bold leading-tight mt-4">
              Integrated Solutions for Modern Digital Ecosystems
            </h2>
          </div>

          <p className="text-gray-400 max-w-sm leading-7 font-inter">
            Leveraging a modern tech stack to ensure your brand remains
            at the forefront of technical excellence.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

          {capabilities.map((item) => (
            <div
              key={item.id}
              className="group bg-[#0D1C2A] border border-[#1C2F40] rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
            >

              <div className="w-14 h-14 rounded-md bg-[#10283A] flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-400 group-hover:text-[#06131F] duration-300">
                {item.icon}
              </div>

              <h3 className="text-white text-2xl font-semibold mb-5 font-inter">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-8 font-inter">
                {item.description}
              </p>

              <div className="space-y-3">
                {item.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-xs tracking-wider text-cyan-300 font-inter uppercase"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 font-inter"></span>
                    {point}
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Capabilities;