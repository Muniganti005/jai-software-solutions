export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Business Process Intelligence
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Transform business operations using AI-driven analytics,
            intelligent insights, and smart automation strategies.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              AI Analytics
            </h3>

            <p className="text-gray-400 leading-7">
              Gain valuable business insights using intelligent AI-powered analytics systems.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Workflow Monitoring
            </h3>

            <p className="text-gray-400 leading-7">
              Monitor business operations and optimize productivity in real-time.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Smart Recommendations
            </h3>

            <p className="text-gray-400 leading-7">
              Improve decision-making with AI-driven recommendations and insights.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}