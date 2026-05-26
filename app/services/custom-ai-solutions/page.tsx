import Image from 'next/image'

export default function Page() {

  return (

    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 overflow-hidden">

      <section className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-400 text-sm font-semibold mb-8">

              CUSTOM AI SOLUTIONS

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">

              Custom AI

              <span className="block text-yellow-400">

                Solutions

              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-xl mb-12">

              Tailored AI solutions designed to transform businesses through
              machine learning, automation, predictive analytics, and intelligent
              digital experiences built specifically for your organization.

            </p>

            {/* FEATURES */}
            <div className="space-y-6 mb-12">

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Machine Learning Models

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Build intelligent AI systems trained for business-specific use cases.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Intelligent Automation

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Automate complex workflows using advanced AI technologies.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Scalable Enterprise AI

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Deploy scalable AI systems that grow with your business operations.

                  </p>

                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition-all duration-300">

                BUILD AI SOLUTION

              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">

                REQUEST CONSULTATION

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

              <Image
                src="/images/custom-ai-solutions.png"
                alt="Custom AI Solutions"
                width={900}
                height={900}
                className="w-full h-auto object-cover hover:scale-105 transition-all duration-700"
                priority
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}