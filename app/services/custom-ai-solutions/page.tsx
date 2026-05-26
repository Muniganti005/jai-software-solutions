export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Custom AI Solutions
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Tailored AI solutions designed specifically for your business needs,
            helping organizations innovate and scale efficiently.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              AI Applications
            </h3>

            <p className="text-gray-400 leading-7">
              Build custom AI-powered applications for enterprise workflows.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Predictive Intelligence
            </h3>

            <p className="text-gray-400 leading-7">
              Use predictive AI models to improve decision-making and planning.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Enterprise Integration
            </h3>

            <p className="text-gray-400 leading-7">
              Integrate AI systems seamlessly with enterprise applications and platforms.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}