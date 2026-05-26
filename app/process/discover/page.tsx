export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-28">

          <p className="text-gold-400 font-semibold tracking-widest mb-4">
            PROCESS 01
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Discover
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-4xl mx-auto">
            We begin by understanding your business goals, operational challenges,
            workflows, and digital transformation opportunities to create intelligent AI strategies.
          </p>

        </div>

        {/* What We Do */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold mb-10 text-gold-400">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

              <h3 className="text-2xl font-semibold mb-5">
                Business Analysis
              </h3>

              <p className="text-gray-400 leading-8">
                We analyze existing workflows, systems, and operational bottlenecks
                to identify opportunities for automation and AI-driven improvements.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

              <h3 className="text-2xl font-semibold mb-5">
                Digital Transformation Strategy
              </h3>

              <p className="text-gray-400 leading-8">
                Our experts define intelligent transformation strategies
                aligned with your business objectives and growth plans.
              </p>

            </div>

          </div>

        </div>

        {/* Key Features */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold mb-12 text-gold-400">
            Key Focus Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Workflow Assessment
              </h3>

              <p className="text-gray-400 leading-7">
                Evaluate existing business operations and identify optimization opportunities.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-4">
                AI Opportunity Discovery
              </h3>

              <p className="text-gray-400 leading-7">
                Discover areas where AI and automation can improve productivity and efficiency.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <h3 className="text-2xl font-semibold mb-4">
                Enterprise Consultation
              </h3>

              <p className="text-gray-400 leading-7">
                Strategic consulting for enterprise modernization and intelligent automation.
              </p>

            </div>

          </div>

        </div>

        {/* Benefits */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold mb-12 text-gold-400">
            Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <ul className="space-y-5 text-gray-300">

                <li>✔ Better operational visibility</li>
                <li>✔ Improved business efficiency</li>
                <li>✔ Intelligent automation roadmap</li>
                <li>✔ Scalable digital strategy</li>

              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <ul className="space-y-5 text-gray-300">

                <li>✔ AI-driven innovation opportunities</li>
                <li>✔ Enterprise modernization planning</li>
                <li>✔ Reduced operational bottlenecks</li>
                <li>✔ Future-ready business architecture</li>

              </ul>
            </div>

          </div>

        </div>

        {/* Technologies */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold mb-10 text-gold-400">
            Technologies & Expertise
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              'AI Analytics',
              'Automation',
              'Enterprise Systems',
              'Cloud',
              'Business Intelligence',
              'Digital Transformation',
              'Workflow Analysis',
              'Scalable Architecture',
            ].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-24">

          <h2 className="text-4xl font-bold mb-8">
            Ready To Transform Your Business?
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-3xl mx-auto leading-8">
            Let’s identify opportunities for intelligent automation
            and scalable AI transformation.
          </p>

          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
            Start Your Journey
          </button>

        </div>

      </div>

    </main>
  )
}