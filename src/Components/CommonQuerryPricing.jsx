import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do these plans include hosting?",
    answer:
      "The Professional Business plan includes 1 year of premium managed hosting. For other plans, we can assist in selecting the optimal provider or provide our high-performance LiteHunt Hosting at a preferred rate.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. Our architecture is designed for modular scalability. You can transition from a Business Starter to a full eCommerce or Custom setup without losing existing data or performance benchmarks.",
  },
  {
    question: "What is the typical deployment timeline?",
    answer:
      "Standard 5–10 page sites typically deploy within 3–4 weeks. eCommerce and custom solutions vary depending on technical complexity, but we prioritize a lean development sprint methodology.",
  },
  {
    question: "Is SEO included in all tiers?",
    answer:
      "Every LiteHunt project includes technical SEO optimization at the source-code level. Advanced SEO in our higher tiers includes keyword strategy, content mapping, and performance indexing.",
  },
];

function CommonQuerryPricing() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#071320] py-24 px-5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-white text-4xl font-bold mb-12">
          Common Queries
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#111c2a] border border-[#223247] rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <h3 className="text-white font-semibold text-lg">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <ChevronUp className="text-gray-400" size={22} />
                ) : (
                  <ChevronDown className="text-gray-400" size={22} />
                )}
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-60 opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 text-gray-400 leading-7">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommonQuerryPricing;