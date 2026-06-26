const processSteps = [
  {
    id: "01",
    title: "Architecture Over Aesthetics",
    description:
      "We design from the database up. A beautiful interface is meaningless if the foundation cannot scale or maintain security integrity.",
  },
  {
    id: "02",
    title: "Performance as a Feature",
    description:
      "Every millisecond counts. We optimize asset delivery, code splitting, and caching strategies to ensure instant load times across all devices.",
  },
  {
    id: "03",
    title: "Clean Code Standards",
    description:
      "We follow strict linting, documentation, and testing protocols. Your code is a long-term asset, not a temporary fix.",
  },
];

const EngineeringProcess = () => {
  return (
    <section className="bg-[#06131F] py-20 lg:py-28">
      <div className="max-w-[1140px] mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center font-inter">

          {/* Left */}

          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#D4E4FA]">
              The
              <span className="italic text-white">
                {" "}Engineering-First{" "}
              </span>
              Approach
            </h2>

            <div className="mt-12 space-y-10">

              {processSteps.map((step) => (
                <div key={step.id} className="flex gap-6">

                  <span className="text-sm font-semibold tracking-[3px] text-[#64748B]">
                    {step.id}
                  </span>

                  <div>

                    <h3 className="text-xl font-semibold text-[#D4E4FA]">
                      {step.title}
                    </h3>

                    <p className="mt-3 leading-8 text-[#94A3B8]">
                      {step.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="relative overflow-hidden">

            {/* Glow */}

            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-cyan-400/10 blur-[90px]" />

            <div className="relative overflow-hidden rounded-xl border border-[#1C2F40] bg-[#0D1C2A] p-6 shadow-[0_0_50px_rgba(0,0,0,.35)]">

              {/* Window Header */}

              <div className="mb-6 flex gap-2">

                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>

              </div>

              <pre className="overflow-x-auto text-sm leading-8 text-[#8FA7C3]">
{`// Optimization Protocol

class PerformanceEngine {

  private readonly latencyThreshold = 100;

  constructor() {
    this.optimizeAssets();
    this.hydrateState();
  }

  public deploy() {
    return await this.verifyIntegrity();
  }
}

✓ Status: ALL SYSTEMS OPERATIONAL`}
              </pre>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EngineeringProcess;

