import React from "react";

function ReadyEngeneer() {
  return (
    <section className="bg-[#051424] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#111C2F] border border-[#1E2B40] rounded-xl px-8 md:px-16 py-20 text-center">

          {/* Heading */}
          <h2 className="inter text-4xl md:text-5xl font-bold text-[#DCE6F5]">
            Ready to engineer your future?
          </h2>

          {/* Description */}
          <p className="inter mt-8 max-w-2xl mx-auto text-gray-400 text-lg leading-9">
            Partner with a team that speaks the language of
            performance. Let's build something extraordinary.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <button
              className="
                px-10 py-4
                bg-[#DCE6F5]
                text-[#111827]
                font-semibold
                rounded-md
                transition-all duration-300
                hover:scale-105
                hover:bg-white
              "
            >
              Start a Project
            </button>

            <button
              className="
                px-10 py-4
                border border-[#2A374D]
                text-[#DCE6F5]
                font-semibold
                rounded-md
                transition-all duration-300
                hover:border-cyan-400
                hover:text-cyan-400
                hover:scale-105
              "
            >
              View Case Studies
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ReadyEngeneer;