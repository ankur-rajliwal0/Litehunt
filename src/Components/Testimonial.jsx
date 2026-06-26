import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
{
id: 1,
name: "Elena Rodriguez",
role: "CTO, AETHER SYSTEMS",
image:
"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
review:
"LiteHunt didn't just build a website; they engineered a digital platform that defines our brand. Their technical precision with React and Shopify is unmatched.",
},
{
id: 2,
name: "James Anderson",
role: "Founder, Nova Tech",
image:
"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300",
review:
"Working with LiteHunt transformed our online business. Their expertise in scalable frontend architecture exceeded every expectation.",
},
{
id: 3,
name: "Sophia Williams",
role: "CEO, Bright Solutions",
image:
"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
review:
"Professional, reliable, and incredibly skilled. They delivered a beautiful product with excellent performance and outstanding code quality.",
},
];

const Testimonial = () => {
const [currentIndex, setCurrentIndex] = useState(0);

// Auto Slider
useEffect(() => {
const interval = setInterval(() => {
setCurrentIndex((prev) =>
prev === testimonials.length - 1 ? 0 : prev + 1
);
}, 4000);


return () => clearInterval(interval);


}, []);

// Previous
const prevSlide = () => {
setCurrentIndex((prev) =>
prev === 0 ? testimonials.length - 1 : prev - 1
);
};

// Next
const nextSlide = () => {
setCurrentIndex((prev) =>
prev === testimonials.length - 1 ? 0 : prev + 1
);
};

return ( <section className="bg-[#06131F] py-24"> <div className="max-w-[1140px] mx-auto px-4">


    {/* Heading */}

    <div className="text-center">

      <p className="uppercase font-inter tracking-[4px] text-[#22D3EE] text-xs font-semibold">
        Verification
      </p>

      <h2 className="mt-4 font-inter text-3xl md:text-5xl font-bold text-[#D4E4FA]">
        Trusted by Industry Leaders
      </h2>

    </div>

    {/* Card */}

    <div className="mt-14 flex justify-center">

      <div className="relative w-full max-w-4xl rounded-xl border border-[#1C2F40] bg-[#0D1C2A] p-8 md:p-12 transition-all duration-500">

        <span className="absolute left-8 top-6 text-7xl font-bold text-[#22D3EE]/20">
          “
        </span>

        <p className="relative font-inter text-xl md:text-3xl italic leading-relaxed font-medium text-[#D4E4FA]">
          "{testimonials[currentIndex].review}"
        </p>

        <div className="mt-10 flex items-center gap-4">

          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="h-14 w-14 rounded-full object-cover"
          />

          <div>

            <h4 className="font-semibold font-inter text-white">
              {testimonials[currentIndex].name}
            </h4>

            <p className="mt-1 text-xs font-inter uppercase tracking-[2px] text-gray-400">
              {testimonials[currentIndex].role}
            </p>

          </div>

        </div>

      </div>

    </div>

    {/* Buttons */}

    <div className="mt-10 flex justify-center gap-4">

      <button
        onClick={prevSlide}
        className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#1C2F40] text-[#D4E4FA] transition-all duration-300 hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 hover:text-[#22D3EE]"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#1C2F40] text-[#D4E4FA] transition-all duration-300 hover:border-[#22D3EE] hover:bg-[#22D3EE]/10 hover:text-[#22D3EE]"
      >
        <ChevronRight />
      </button>

    </div>

    {/* Dots */}

    <div className="mt-8 flex justify-center gap-3">

      {testimonials.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            currentIndex === index
              ? "w-8 bg-cyan-400"
              : "w-2 bg-gray-500"
          }`}
        />
      ))}

    </div>

  </div>
</section>


);
};

export default Testimonial;
