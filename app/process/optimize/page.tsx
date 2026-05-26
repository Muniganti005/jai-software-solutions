// app/process/optimize/page.tsx

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-28">

          <p className="text-gold-400 font-semibold tracking-widest mb-4">
            PROCESS 05
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Optimize
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-4xl mx-auto">
            Continuously monitor, analyze, and optimize enterprise systems
            using AI-driven insights and intelligent automation.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              AI Monitoring
            </h3>

            <p className="text-gray-400 leading-7">
              Intelligent monitoring and analytics for enterprise systems.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Performance Optimization
            </h3>

            <p className="text-gray-400 leading-7">
              Improve scalability, efficiency, and operational performance.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Continuous Innovation
            </h3>

            <p className="text-gray-400 leading-7">
              Enhance systems continuously using modern AI-driven improvements.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}