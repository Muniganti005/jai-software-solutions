// app/process/plan/page.tsx

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-28">

          <p className="text-gold-400 font-semibold tracking-widest mb-4">
            PROCESS 02
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Plan
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-4xl mx-auto">
            We create intelligent AI strategies, scalable architectures,
            and automation roadmaps tailored to your business goals.
          </p>

        </div>

        {/* What We Do */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold mb-10 text-gold-400">
            Strategic Planning
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

              <h3 className="text-2xl font-semibold mb-5">
                AI Architecture
              </h3>

              <p className="text-gray-400 leading-8">
                Design scalable enterprise-grade AI architectures optimized
                for performance, security, and future scalability.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

              <h3 className="text-2xl font-semibold mb-5">
                Automation Strategy
              </h3>

              <p className="text-gray-400 leading-8">
                Define intelligent automation workflows to improve productivity
                and streamline operations.
              </p>

            </div>

          </div>

        </div>

        {/* Technologies */}
        <div className="mb-28">

          <h2 className="text-4xl font-bold mb-10 text-gold-400">
            Planning Technologies
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              'AI Strategy',
              'Cloud Architecture',
              'Automation Planning',
              'Enterprise Systems',
              'Scalable Infrastructure',
              'Digital Transformation',
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

      </div>

    </main>
  )
}