import { useState } from "react";

const filters = [
  "All Projects",
  "Ecommerce",
  "Real Estate",
  "UI/UX Design",
  "Marketing",
];

const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200",
    desc: "Modern dashboard with analytics & charts.",
    large: true,
  },
  {
    id: 2,
    title: "Growth Marketing",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    desc: "SEO & Marketing Campaign.",
  },
  {
    id: 3,
    title: "Luxury Properties",
    category: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
    desc: "Premium real estate website.",
  },
  {
    id: 4,
    title: "Luxury Watch Store",
    category: "Ecommerce",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=1200",
    desc: "Luxury ecommerce experience.",
    large: true,
  },
];

export default function ProjectPortfolio() {
  const [active, setActive] = useState("All Projects");

  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="bg-[#071321] py-24 ">
      <div className="max-w-7xl mx-auto py-6 lg:">

        {/* Filters */}

        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`uppercase tracking-widest text-xs px-6 py-3 border transition
              ${
                active === item
                  ? "bg-[#d8deeb] text-black border-[#d8deeb]"
                  : "border-[#243447] text-gray-300 hover:border-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}

        <div className="grid lg:grid-cols-3 gap-6 auto-rows-[260px]">

          {filtered.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden group cursor-pointer rounded-md
              ${project.large ? "lg:col-span-2" : ""}
              `}
            >
              <img
                src={project.image}
                alt=""
                className="w-full h-full object-cover duration-500 group-hover:scale-110"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-end p-8">

                <span className="text-cyan-400 uppercase tracking-[3px] text-xs mb-2">
                  {project.category}
                </span>

                <h3 className="text-white text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-3">
                  {project.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}