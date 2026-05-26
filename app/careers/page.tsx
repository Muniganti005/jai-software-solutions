export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Careers
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-4xl mx-auto">
            Join Jai Software Solutions and help build the future of AI-powered
            enterprise automation, intelligent applications, and digital innovation.
          </p>

        </div>

        {/* Open Roles */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

            <h3 className="text-2xl font-bold mb-4 text-gold-400">
              AI Engineer
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Work on intelligent AI systems, automation platforms,
              and scalable enterprise applications.
            </p>

            <button className="px-6 py-3 rounded-full border border-gold-400/30 text-gold-400 hover:bg-gold-400/10 transition-all duration-300">
              Apply Now
            </button>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

            <h3 className="text-2xl font-bold mb-4 text-gold-400">
              Full Stack Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              Build modern enterprise-grade web applications
              and scalable digital platforms.
            </p>

            <button className="px-6 py-3 rounded-full border border-gold-400/30 text-gold-400 hover:bg-gold-400/10 transition-all duration-300">
              Apply Now
            </button>

          </div>

        </div>

      </div>

    </main>
  )
}