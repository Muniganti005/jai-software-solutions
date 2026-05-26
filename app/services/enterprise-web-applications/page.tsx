export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Enterprise Web Applications
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Modern enterprise-grade web applications built with scalable architecture,
            secure APIs, and intelligent digital experiences.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Modern UI/UX
            </h3>

            <p className="text-gray-400 leading-7">
              Beautiful responsive user experiences for enterprise applications.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Scalable Architecture
            </h3>

            <p className="text-gray-400 leading-7">
              Enterprise-grade scalable platforms built for modern businesses.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Secure APIs
            </h3>

            <p className="text-gray-400 leading-7">
              Secure API integrations and modern backend infrastructure solutions.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}