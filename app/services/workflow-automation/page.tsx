export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Intelligent Workflow Automation
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Automate repetitive business operations using AI-powered workflows,
            intelligent task management, and smart enterprise automation systems.
          </p>

        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Feature 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Smart Automation
            </h3>

            <p className="text-gray-400 leading-7">
              Automate repetitive workflows and improve operational efficiency
              using intelligent AI-driven systems.
            </p>

          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Process Integration
            </h3>

            <p className="text-gray-400 leading-7">
              Integrate enterprise applications, APIs, and cloud platforms
              for seamless digital operations.
            </p>

          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              AI Insights
            </h3>

            <p className="text-gray-400 leading-7">
              Gain intelligent recommendations and workflow analytics
              to optimize productivity and business performance.
            </p>

          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center mt-24">

          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
            Start Automating Your Business
          </button>

        </div>

      </div>

    </main>
  )
}