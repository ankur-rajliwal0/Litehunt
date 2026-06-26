import { Quote } from "lucide-react";

const QuoteBanner = () => {
return ( <section className="bg-[#06131F] py-20"> <div className="max-w-[1140px] mx-auto px-4">


    <div className="relative overflow-hidden rounded-2xl border border-[#1C2F40]">

      {/* Background Image */}

      <img
        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1600"
        alt="Development Workspace"
        className="h-[350px] md:h-[500px] w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#06131F]/95 via-[#06131F]/70 to-[#06131F]/40"></div>

      {/* Content */}

      <div className="absolute inset-0 flex items-end">

        <div className="max-w-3xl p-8 md:p-12">

          <Quote
            size={42}
            className="mb-6 text-[#22D3EE] font-inter"
            strokeWidth={2.5}
          />

          <h2 className="sm:text-3xl text-xl md:text-5xl font-bold leading-tight text-[#D4E4FA] font-inter">

            "LiteHunt didn't just deliver a website;
            they delivered a technical advantage
            that has defined our market position
            for the next decade."

          </h2>

          <p className="mt-8 uppercase tracking-[4px] font-inter text-sm text-[#94A3B8]">
            Dr. Elara Vance — CTO, Nexus Technologies
          </p>

        </div>

      </div>

    </div>

  </div>
</section>


);
};

export default QuoteBanner;
