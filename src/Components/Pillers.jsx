import React from "react";
import {
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

import InnovativePic from "../assets/images/InnovationOurMission.webp";
import PrecisionPic from "../assets/images/PrecisionOurMission.webp";
import ResultsPic from "../assets/images/ResultsOurMission.webp";

function Pillars() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <div>
            <h2 className="inter text-4xl md:text-5xl font-bold text-[#DCE6F5] leading-tight">
              The Pillars of Sophisticated
              <br />
              Engineering
            </h2>

            <p className="inter mt-6 text-gray-400 max-w-xl leading-7">
              Our values are not just words—they are the technical
              requirements we apply to every project lifecycle.
            </p>
          </div>

          <p className="inter text-xs tracking-[0.4em] text-gray-500 uppercase">
            01 — 03 Core Values
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Precision */}
          <div className="group transition-all duration-500 hover:-translate-y-2">
            <div className="overflow-hidden rounded-lg border border-[#1A2A42] hover:border-cyan-400 transition-all duration-500">
              <img
                src={PrecisionPic}
                alt="Precision"
                className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-3 text-[#DCE6F5]">
                <Target size={20} />
                <h3 className="inter text-2xl font-semibold">
                  Precision
                </h3>
              </div>

              <p className="inter mt-4 text-gray-400 leading-7">
                We measure twice and cut once. Every API endpoint,
                database schema, and UI interaction is crafted with
                surgical accuracy to eliminate waste.
              </p>
            </div>
          </div>

          {/* Innovation */}
          <div className="group transition-all duration-500 hover:-translate-y-2">
            <div className="overflow-hidden rounded-lg border border-[#1A2A42] hover:border-cyan-400 transition-all duration-500">
              <img
                src={InnovativePic}
                alt="Innovation"
                className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-3 text-[#DCE6F5]">
                <Lightbulb size={20} />
                <h3 className="inter text-2xl font-semibold">
                  Innovation
                </h3>
              </div>

              <p className="inter mt-4 text-gray-400 leading-7">
                We don't follow trends; we set the standard.
                Leveraging the latest in WebAssembly, Edge
                Computing, and AI to build what others think
                is impossible.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="group transition-all duration-500 hover:-translate-y-2">
            <div className="overflow-hidden rounded-lg border border-[#1A2A42] hover:border-cyan-400 transition-all duration-500">
              <img
                src={ResultsPic}
                alt="Results"
                className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-3 text-[#DCE6F5]">
                <TrendingUp size={20} />
                <h3 className="inter text-2xl font-semibold">
                  Results
                </h3>
              </div>

              <p className="inter mt-4 text-gray-400 leading-7">
                Engineering is useless without impact. We focus on
                ROI, conversion speed, and uptime—the metrics that
                actually move the needle for your business.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pillars;