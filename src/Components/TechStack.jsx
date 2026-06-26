import {
  MonitorSmartphone,
  Database,
  ShoppingBag,
  Building2,
} from "lucide-react";

const stackData = [
  {
    id: "01",
    icon: MonitorSmartphone,
    title: "Modern Interface Engineering",
    description:
      "Building reactive, state-managed applications using React and Next.js. We focus on server-side rendering, component reusability, and lightning-fast user interactions.",
    large: true,
  },
  {
    id: "02",
    icon: Database,
    title: "Scalable Backends",
    description:
      "High-concurrency Node.js environments designed for peak loads and secure data handling.",
  },
  {
    id: "03",
    icon: ShoppingBag,
    title: "Shopify & CMS",
    description:
      "Custom Shopify Liquid development and headless WordPress architectures that defy conventional speed limits.",
  },
  {
    id: "04",
    icon: Building2,
    title: "Real Estate & High-End Retail",
    description:
      "Bespoke digital solutions for the real estate market, featuring integrated MLS feeds, immersive tours, and high-conversion landing pages.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    large: true,
  },
];

const TechStack = () => {
  return (
    <section className="bg-[#06131F] py-20">
      <div className="max-w-[1140px] mx-auto px-4">

        {/* Heading */}

        <div className="max-w-2xl">

          <h2 className="text-4xl font-inter font-bold text-[#D4E4FA]">
            The Stack We Command
          </h2>

          <p className="mt-5 font-inter text-[#94A3B8] leading-8">
            From high-velocity React interfaces to robust Shopify
            storefronts, our expertise is built on the most powerful
            frameworks in the modern web.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 font-inter grid grid-cols-1 lg:grid-cols-3 gap-6">

          {stackData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`relative overflow-hidden rounded-xl border border-[#1C2F40] bg-[#0D1C2A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
                ${item.large ? "lg:col-span-2" : ""}`}
              >
                {item.image && (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-15"
                    />
                    <div className="absolute inset-0 bg-[#06131F]/70" />
                  </>
                )}

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#132334] text-cyan-400">
                      <Icon size={24} />
                    </div>

                    <span className="text-xs uppercase tracking-[3px] text-[#64748B]">
                      {item.id}
                    </span>

                  </div>

                  <h3 className="mt-10  font-inter text-3xl font-bold text-[#D4E4FA]">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-[#94A3B8]">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default TechStack;

