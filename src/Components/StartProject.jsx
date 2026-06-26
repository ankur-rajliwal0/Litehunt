import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import BlurLayer from "../assets/images/Atmospheric glow behind CTA.svg";

function StartProject() {
  return (
    <section className="bg-[#071321] py-28 px-5 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="relative overflow-hidden rounded border border-[#162536] bg-[#081625] py-28">

          {/* Glow */}
          <motion.img
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.45, 0.75, 0.45],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={BlurLayer}
            alt=""
            className="absolute left-1/2 top-1/2 w-[850px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />

          {/* Radial Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>

          {/* Animated Border */}
          <div className="absolute inset-0 rounded border border-white/5"></div>

          {/* Floating Dots */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="absolute left-20 top-20 h-2 w-2 rounded-full bg-cyan-400 blur-sm"
          />

          <motion.div
            animate={{
              y: [10, -10, 10],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="absolute right-28 bottom-16 h-3 w-3 rounded-full bg-white blur-sm"
          />

          {/* Content */}

          <div className="relative z-10 flex flex-col items-center">

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center text-[#dfe8fa] text-5xl lg:text-7xl font-bold leading-tight"
            >
              Ready to accelerate
              <br />
              your growth?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-2xl text-center text-[#97A3B5] text-xl leading-9"
            >
              Let's build something exceptional together. Our team is ready to
              engineer your next success story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row gap-6 mt-14"
            >
              {/* Button 1 */}

              <button className="group relative overflow-hidden bg-[#d8ddec] text-[#071321] uppercase tracking-[5px] text-sm px-12 py-5 font-semibold">

                <span className="relative z-20 flex items-center gap-3">
                  Start Your Project
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>

                <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100"></span>

              </button>

              {/* Button 2 */}

              <button className="group border border-[#5f6d7c] px-12 py-5 uppercase tracking-[5px] text-sm text-white hover:bg-white hover:text-[#071321] transition-all duration-500">

                <span className="flex items-center gap-3">
                  View Services
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>

              </button>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default StartProject;