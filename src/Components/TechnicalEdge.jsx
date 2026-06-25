import { CheckCircle2 } from "lucide-react";

const stats = [
{
id: 1,
number: "99.9%",
label: "UPTIME CORE",
},
{
id: 2,
number: "40%",
label: "AVG ROI BOOST",
},
{
id: 3,
number: "120+",
label: "PROJECTS SHIPPED",
},
{
id: 4,
number: "24/7",
label: "EXPERT SUPPORT",
},
];

const TechnicalEdge = () => {
return ( <section className="bg-[#06131F] py-20 lg:py-28"> <div className="max-w-[1140px] mx-auto px-4">


    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* Left */}

      <div>

        <p className="uppercase font-inter tracking-[5px] text-xs font-semibold text-[#22D3EE]">
          Technical Edge
        </p>

        <h2 className="mt-5 font-inter text-5xl md:text-6xl font-bold leading-[1.05] text-[#D4E4FA]">
          Why Leading
          <br />
          Brands Choose
          <br />
          LiteHunt.
        </h2>

        <p className="mt-8 font-inter max-w-lg text-[#94A3B8] leading-8">
          We don't just build websites; we engineer digital assets.
          Our approach is rooted in technical precision and radical
          transparency.
        </p>

        <div className="mt-10 space-y-6">

          <div className="flex gap-4">
            <CheckCircle2
              className="mt-1 text-[#22D3EE]"
              size={22}
            />

            <div>
              <h4 className="font-semibold font-inter text-white">
                Agile Infrastructure
              </h4>

              <p className="mt-1 font-inter text-[#94A3B8]">
                Rapid deployment cycles with zero downtime
                architecture.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <CheckCircle2
              className="mt-1 text-[#22D3EE]"
              size={22}
            />

            <div>
              <h4 className="font-semibold font-inter text-white">
                Data Sovereignty
              </h4>

              <p className="mt-1 font-inter text-[#94A3B8]">
                Full control over your analytics and custom data
                streams.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Right */}

      <div className="grid grid-cols-2 gap-6">

        {stats.map((item) => (
          <div
            key={item.id}
            className="group font-inter rounded-xl border border-[#1C2F40] bg-[#0D1C2A] sm:p-8 max-sm:py-6 max-sm:px-3 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.12)]"
          >

            <h3 className="text-5xl font-bold text-[#22D3EE]">
              {item.number}
            </h3>

            <p className="mt-4 text-xs uppercase tracking-[3px] text-[#94A3B8]">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </div>

  </div>
</section>


);
};

export default TechnicalEdge;
