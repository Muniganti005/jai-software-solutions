export default function ScheduleDemoPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-20">

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Schedule A Demo
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            Book a consultation to explore how AI automation
            can transform your business operations.
          </p>

        </div>

        {/* Demo Card */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-md text-center">

          <h2 className="text-3xl font-bold mb-6">
            Book Your Free AI Consultation
          </h2>

          <p className="text-gray-400 leading-8 mb-10 max-w-2xl mx-auto">
            Discuss automation opportunities, intelligent workflows,
            cloud transformation, and enterprise AI strategies with our experts.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-black/30 border border-white/10 rounded-xl px-6 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-black/30 border border-white/10 rounded-xl px-6 py-4 outline-none"
            />

          </div>

          <textarea
            rows={5}
            placeholder="Tell us about your business needs..."
            className="w-full bg-black/30 border border-white/10 rounded-xl px-6 py-4 outline-none mb-10"
          ></textarea>

          <button className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-bold hover:scale-105 transition-all duration-300">

            Schedule Consultation

          </button>

        </div>

      </div>

    </main>
  )
}