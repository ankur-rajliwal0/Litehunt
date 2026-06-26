import {
Code2,
LayoutGrid,
Search,
BadgeDollarSign,
Share2,
ArrowRight,
} from "lucide-react";

const services = [
{
id: 1,
icon: Code2,
title: "Web Development",
description:
"Building high-speed, scalable web architectures using modern frameworks. Our code is optimized for performance, security, and technical SEO from day one.",
large: true,
},
{
id: 2,
icon: LayoutGrid,
title: "UI/UX Design",
description:
"Minimalist, user-centric interfaces designed for clarity and conversion.",
},
{
id: 3,
icon: Search,
title: "SEO Optimization",
description:
"Data-driven organic growth strategies to dominate search engine results.",
},
{
id: 4,
icon: BadgeDollarSign,
title: "Paid Ads (PPC)",
description:
"High-ROI campaigns designed for immediate traffic and measurable conversion.",
},
{
id: 5,
icon: Share2,
title: "SMM",
description:
"Strategic brand narrative across all social platforms to foster community.",
},
];

const ServicesCard = () => {
return ( <section className="bg-[#06131F] py-20"> <div className="max-w-[1140px] mx-auto px-4">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.id}
            className={`group rounded-xl border font-inter border-[#1C2F40] bg-[#0D1C2A] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
            ${service.large ? "lg:col-span-2" : ""}`}
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-md bg-[#132334] text-cyan-400 transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-[#06131F]">
              <Icon size={26} />
            </div>

            <h3 className="text-3xl font-bold text-[#D4E4FA]">
              {service.title}
            </h3>

            <p className="mt-5 leading-8 text-[#94A3B8]">
              {service.description}
            </p>

            <button className="group/btn mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[2px] text-cyan-400">
              Learn More

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-2"
              />
            </button>
          </div>
        );
      })}

    </div>

  </div>
</section>


);
};

export default ServicesCard;
