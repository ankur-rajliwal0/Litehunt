import React from "react";
import {
  CheckCircle,
  Shield,
  Rocket,
  Database,
  Code,
} from "lucide-react";

const plans = [
 
  {
    title: "Professional Business",
    desc: "Perfect for growing businesses",
    price: "₹24,999",
    popular: true,
    features: [
      "Up to 15 Pages",
      "1 Year Premium Hosting",
      " Premium UI/UX Design",
      " Blog Integration",
      " Speed Optimization",
      " Lead Generation Forms",
      "Multiple Contact Integrations",
      "Performance Audit",
      "Social Media Integration",
    ],
    button: "Deploy Infrastructure",
  },
  {
    title: " Commerce Elite",
    desc: "Perfect for eCommerce businesses",
    price: "₹49,999",
    features: [
      "Custom Theme Engineering",
      "Shopify Store Development",
      "Up to 100 Products Upload",
      " Payment Gateway Integration",
      " Cart & Checkout Setup",
      "Mobile Optimization",
      "Product SEO",
      "Speed Optimization",
      "Custom Theme Engineering",
      "15+ Pages + Blog System",
      " Abandoned Cart Setup",
      "Dynamic Content Blocks",
      "Speed Optimization",
      "3 Months Support"
    ],
    button: "Launch CMS",
  },
  {
    title: "Infinity Scale",
    desc: "Perfect for startups & enterprises",
    price: "₹89,999+",
    features: [
      "Custom React Website",
      "Node.js Backend",
      "Payment Gateway Tuning",
      "Admin Dashboard",
      " Authentication System",
      " Database Integration",
      " API Integration",
      " Custom Animations (GSAP)",
      "  Advanced SEO Optimization",
      " Hosting & Deployment Setup",
      "  Priority Support",
    ],
    button: "Initialize Store",
  },
   {
    title: "Business Starter",
    desc: "Perfect for startups & local businesses",
    price: "₹9,999",
    features: [
      "Up to 5 Pages ",
      " Fully Responsive Design",
      " Contact Form",
      " WhatsApp Integration",
      " Google Maps Integration",
      "Fast Loading Website",
    ],
    button: "Initialize Project",
  },
];

function OffersPricing() {
  return (
    <section className="bg-[#07121f] py-20 px-6 text-white min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-3 gap-6">

          {plans.slice(0, 3).map((plan, index) => (
            <div
              key={index}
              className={`relative bg-[#101b2b] rounded-md border ${
                plan.popular
                  ? "border-gray-300"
                  : "border-[#1d2b3c]"
              } p-7 flex flex-col`}
            >
              {plan.popular && (
                <span className="absolute right-5 -top-3 bg-white text-black text-[10px] px-3 py-1 rounded uppercase font-bold tracking-wider">
                  Most Popular
                </span>
              )}

              <h2 className="text-2xl font-bold mb-3">
                {plan.title}
              </h2>

              <p className="text-gray-400 text-sm leading-6 mb-6">
                {plan.desc}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>
                <span className="text-gray-400 text-sm ml-2">
                  INR
                </span>
              </div>

              <div className="space-y-4 flex-grow">
                {plan.features.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <CheckCircle size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 h-12 rounded border transition ${
                  plan.popular
                    ? "bg-gray-200 text-black hover:bg-white"
                    : "border-gray-500 hover:bg-white hover:text-black"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}

          {/* Shopify */}
          <div className="bg-[#101b2b] rounded-md border border-[#1d2b3c] p-7 flex flex-col">
            <h2 className="text-2xl font-bold mb-3">
              Business Starter
            </h2>

            <p className="text-gray-400 text-sm leading-6 mb-6">
              Convert visitors into revenue with high-speed retail UI.
            </p>

            <div className="mb-8">
              <span className="text-5xl font-bold">₹9,999</span>
              <span className="text-gray-400 text-sm ml-2">
                INR
              </span>
            </div>

            <div className="space-y-4 flex-grow">
              {plans[3].features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <CheckCircle size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-10 h-12 border border-gray-500 rounded hover:bg-white hover:text-black transition">
              Initialize Store
            </button>
          </div>

          {/* Enterprise */}
         <div className="lg:col-span-2 bg-[#0b1422] border border-[#1b2737] rounded-md p-10 flex flex-col lg:flex-row justify-between">

  {/* Left Content */}
  <div className="max-w-xl">

    <h2 className="text-4xl font-bold mb-4">
      Custom Enterprise
    </h2>

    <p className="text-gray-400 leading-7 mb-10 max-w-lg">
      Bespoke digital ecosystems for organizations requiring maximum
      scale, security, and specialized functionality.
    </p>

    <div className="grid grid-cols-2 gap-x-12 gap-y-6">

      <div className="flex items-start gap-3">
        <Shield size={20} className="mt-1 text-gray-300" />
        <div>
          <p className="text-white text-sm">Dedicated DevOps</p>
          <p className="text-white text-sm">Support</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Database size={20} className="mt-1 text-gray-300" />
        <div>
          <p className="text-white text-sm">Custom API</p>
          <p className="text-white text-sm">Integrations</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Rocket size={20} className="mt-1 text-gray-300" />
        <div>
          <p className="text-white text-sm">Enterprise-Grade</p>
          <p className="text-white text-sm">Performance</p>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Code size={20} className="mt-1 text-gray-300" />
        <div>
          <p className="text-white text-sm">Bespoke</p>
          <p className="text-white text-sm">Functionality</p>
        </div>
      </div>

    </div>

  </div>

  {/* Right Side */}
  <div className="flex flex-col justify-center items-end mt-10 lg:mt-0">

    <p className="text-gray-400 mb-5">
      Contact for Quote
    </p>

    <button className="w-72 h-14 bg-[#d8dceb] text-[#0b1422] font-semibold rounded hover:bg-white transition">
      Consult with Architects
    </button>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}

export default OffersPricing;