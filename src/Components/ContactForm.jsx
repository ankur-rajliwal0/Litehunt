import { Mail, MapPin, Phone } from "lucide-react";

const ContactForm = () => {
return ( <section className="bg-[#06131F] py-20"> <div className="max-w-[1140px] mx-auto px-4">


    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">

      {/* Contact Form */}

      <div className="rounded-xl border border-[#1C2F40] bg-[#0D1C2A] p-8">

        <form className="space-y-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="mb-3 font-inter block text-xs uppercase tracking-[3px] text-[#94A3B8]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-[#1C2F40] bg-[#06131F] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="mb-3 font-inter block text-xs uppercase tracking-[3px] text-[#94A3B8]">
                Email Address
              </label>

              <input
                type="email"
                placeholder="john@company.com"
                className="w-full rounded-lg border border-[#1C2F40] bg-[#06131F] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="mb-3 font-inter block text-xs uppercase tracking-[3px] text-[#94A3B8]">
                Project Type
              </label>

              <select className="w-full font-inter rounded-lg border border-[#1C2F40] bg-[#06131F] px-4 py-3 text-white outline-none focus:border-cyan-400">

                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Ecommerce</option>
                <option>SEO</option>

              </select>
            </div>

            <div>
              <label className="mb-3 font-inter block text-xs uppercase tracking-[3px] text-[#94A3B8]">
                Estimated Budget
              </label>

              <select className="w-full font-inter rounded-lg border border-[#1C2F40] bg-[#06131F] px-4 py-3 text-white outline-none focus:border-cyan-400">

                <option>$5k - $10k</option>
                <option>$10k - $25k</option>
                <option>$25k+</option>

              </select>
            </div>

          </div>

          <div>

            <label className="mb-3 font-inter block text-xs uppercase tracking-[3px] text-[#94A3B8]">
              Project Brief
            </label>

            <textarea
              rows={6}
              placeholder="Tell us about your project requirements and goals..."
              className="w-full resize-none rounded-lg border border-[#1C2F40] bg-[#06131F] px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            />

          </div>

          <button className="rounded-lg font-inter bg-[#22D3EE] px-8 py-4 font-semibold text-[#06131F] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]">
            Send Project Request
          </button>

        </form>

      </div>

      {/* Contact Info */}

      <div className="rounded-xl border border-[#1C2F40] bg-[#0D1C2A] p-8">

        <h3 className="flex items-center font-inter gap-3 text-3xl font-bold text-white">
          <MapPin className="text-cyan-400" />
          Our Studio
        </h3>

        <p className="mt-6 leading-8 font-inter text-[#94A3B8]">
          LiteHunt Engineering Hub
          <br />
          128 Tech Plaza, 4th Floor
          <br />
          Silicon Valley, CA 94043
        </p>

        <div className="my-8 border-t border-[#1C2F40]"></div>

        <div className="space-y-6">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#132434]">
              <Mail className="text-cyan-400" />
            </div>

            <div>
              <p className="text-xs font-inter uppercase tracking-[3px] text-[#94A3B8]">
                Email Us
              </p>

              <p className="mt-1 font-inter font-semibold text-white">
                hello@litehunt.com
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#132434]">
              <Phone className="text-cyan-400" />
            </div>

            <div>
              <p className="text-xs font-inter uppercase tracking-[3px] text-[#94A3B8]">
                Call Us
              </p>

              <p className="mt-1 font-inter font-semibold text-white">
                +1 (555) 012-3456
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>


);
};

export default ContactForm;
