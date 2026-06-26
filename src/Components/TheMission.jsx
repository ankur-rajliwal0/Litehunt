import React from "react";
import codingpic from "../assets/images/ourMissionCodingPic.webp";
import { Gauge, Boxes } from "lucide-react";

function TheMission() {
  return (
    <div className="relative py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">

          <div className="bg-[#101D30] border border-[#1A2A42] rounded-lg p-6 md:p-8 hover:bg-[#c1c6db09] transition-all duration-300 hover:scale-102">
            <h2 className="inter text-3xl font-bold text-[#DCE6F5] mb-5">
              The Mission
            </h2>

            <p className="inter text-gray-400 leading-8 text-sm md:text-base">
              Our mission is to dismantle the barriers of legacy web
              performance. We build digital products that are architected
              for speed, ensuring that high-growth companies can scale
              without technical friction.
            </p>

            <div className="mt-8 overflow-hidden rounded-lg border border-[#22324A]">
              <img
                src={codingpic}
                alt=""
                className="w-full h-[220px] md:h-[320px] object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">

            <div className="bg-[#101D30] border border-[#1A2A42] rounded-lg p-8 transition-all duration-300 hover:scale-102  hover:bg-[#c1c6db09]">
              <div className="mb-5 text-gray-300">
                <Gauge size={24} />
              </div>

              <h3 className="inter text-xl font-semibold text-[#DCE6F5]">
                99th Percentile
              </h3>

              <p className="inter mt-4 text-gray-400 leading-7 text-sm">
                We optimize for core web vitals that place our clients in
                the top tier of global performance metrics.
              </p>
            </div>

            <div className="bg-[#101D30] border border-[#1A2A42] rounded-lg p-8  transition-all duration-300 hover:scale-102  hover:bg-[#c1c6db09]">
              <div className="mb-5 text-gray-300">
                <Boxes size={24} />
              </div>

              <h3 className="inter text-xl font-semibold text-[#DCE6F5]">
                Infinite Scaling
              </h3>

              <p className="inter mt-4 text-gray-400 leading-7 text-sm">
                Cloud-native architectures designed to handle traffic
                spikes from 100 to 1,000,000 users seamlessly.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TheMission;