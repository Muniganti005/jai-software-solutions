export default function StartProjectPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-20">

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Start Your Project
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
            Let’s build intelligent AI-powered solutions tailored to your business goals.
          </p>

        </div>

        {/* Form */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-md">

          <div className="grid md:grid-cols-2 gap-8">

            <input
              type="text"
              placeholder="Full Name"
              className="bg-black/30 border border-white/10 rounded-xl px-6 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-black/30 border border-white/10 rounded-xl px-6 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="bg-black/30 border border-white/10 rounded-xl px-6 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Project Type"
              className="bg-black/30 border border-white/10 rounded-xl px-6 py-4 outline-none"
            />

          </div>

          <textarea
            placeholder="Describe your project requirements..."
            rows={6}
            className="w-full mt-8 bg-black/30 border border-white/10 rounded-xl px-6 py-4 outline-none"
          ></textarea>

          <button className="mt-10 px-10 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold hover:scale-105 transition-all duration-300">

            Submit Project Inquiry

          </button>

        </div>

      </div>

    </main>
  )
}