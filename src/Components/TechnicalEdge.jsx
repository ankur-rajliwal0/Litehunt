import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap} from "gsap";

const stats = [
  {
    id: 1,
    end: 99.9,
    suffix: "%",
    decimals: 1,
    label: "UPTIME CORE",
  },
  {
    id: 2,
    end: 40,
    suffix: "%",
    decimals: 0,
    label: "AVG ROI BOOST",
  },
  {
    id: 3,
    end: 120,
    suffix: "+",
    decimals: 0,
    label: "PROJECTS SHIPPED",
  },
  {
    id: 4,
    end: 24,
    suffix: "/7",
    decimals: 0,
    label: "EXPERT SUPPORT",
  },
];

function Counter({ end, suffix, decimals }) {
  const ref = useRef(null);

 useEffect(() => {
  const obj = { value: 0 };

  gsap.to(obj, {
    value: end,
    duration: 4, // jitna bada duration utna slow
    ease: "power2.out",

    scrollTrigger: {
      trigger: ref.current,
      start: "top 85%", // jab element viewport me 85% par aaye
      toggleActions: "play none none none",
      once: true,
    },

    onUpdate: () => {
      if (!ref.current) return;

      ref.current.innerText =
        obj.value.toFixed(decimals) + suffix;
    },
  });

}, [end, suffix, decimals]);

  return (
    <h3
      ref={ref}
      className="text-5xl font-bold text-[#22D3EE]"
    >
      0{suffix}
    </h3>
  );
}

export default function TechnicalEdge() {
  return (
    <section className="bg-[#06131F] py-20 lg:py-28">
      <div className="max-w-[1140px] mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[5px] text-xs font-semibold text-cyan-400">
              Technical Edge
            </p>

            <h2 className="mt-5 text-5xl md:text-6xl font-bold leading-tight text-[#D4E4FA]">
              Why Leading
              <br />
              Brands Choose
              <br />
              LiteHunt.
            </h2>

            <p className="mt-8 text-[#94A3B8] leading-8 max-w-lg">
              We don't just build websites; we engineer digital
              assets. Our approach is rooted in technical precision
              and radical transparency.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-4">
                <CheckCircle2
                  className="mt-1 text-cyan-400"
                  size={22}
                />

                <div>
                  <h4 className="font-semibold text-white">
                    Agile Infrastructure
                  </h4>

                  <p className="text-[#94A3B8] mt-1">
                    Rapid deployment cycles with zero downtime
                    architecture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2
                  className="mt-1 text-cyan-400"
                  size={22}
                />

                <div>
                  <h4 className="font-semibold text-white">
                    Data Sovereignty
                  </h4>

                  <p className="text-[#94A3B8] mt-1">
                    Full control over your analytics and custom
                    data streams.
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
                className="rounded-xl border border-[#1C2F40] bg-[#0D1C2A] p-8 hover:-translate-y-2 transition duration-300 hover:border-cyan-400"
              >
                <Counter
                  end={item.end}
                  suffix={item.suffix}
                  decimals={item.decimals}
                />

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
}