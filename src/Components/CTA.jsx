import { ArrowRight } from "lucide-react";

const CTA = () => {
return ( <section className="bg-[#06131F] py-24"> <div className="max-w-[1140px] mx-auto px-4">


    <div className="rounded-2xl border border-[#163042] bg-[#081827] py-20 px-6 md:px-12 text-center">

      {/* Heading */}
      <h2 className="mx-auto max-w-4xl font-inter text-4xl md:text-6xl font-bold leading-tight text-[#D4E4FA]">
        Ready to Build the Future?
      </h2>

      {/* Description */}
      <p className="mx-auto mt-6 max-w-2xl font-inter text-base md:text-lg leading-8 text-[#94A3B8]">
        Let's discuss how our focus on frontend, backend, and
        ecommerce can accelerate your digital roadmap.
      </p>

      {/* Button */}
      <div className="mt-12">
        <button className="group inline-flex items-center gap-3 rounded-xl bg-[#22D3EE] px-8 py-4 font-semibold text-[#06131F] transition-all duration-300 font-inter hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.45)] active:scale-95">

          Schedule a Consultation

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />

        </button>
      </div>

    </div>

  </div>
</section>


);
};

export default CTA;
