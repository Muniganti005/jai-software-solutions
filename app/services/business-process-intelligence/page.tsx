import Image from 'next/image'

export default function Page() {

  return (

    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 overflow-hidden">

      <section className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-400 text-sm font-semibold mb-8">

              BUSINESS INTELLIGENCE

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">

              Business Process

              <span className="block text-yellow-400">

                Intelligence

              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-xl mb-12">

              AI-driven analytics and intelligent insights that help businesses
              optimize operations, improve decision-making, and increase
              organizational efficiency through real-time data intelligence.

            </p>

            {/* FEATURES */}
            <div className="space-y-6 mb-12">

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Real-Time Analytics

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Monitor business performance with AI-powered dashboards and insights.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Predictive Intelligence

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Forecast trends and identify opportunities using machine learning models.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Process Optimization

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Improve operational workflows with intelligent automation and reporting.

                  </p>

                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition-all duration-300">

                ANALYZE BUSINESS

              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">

                VIEW INSIGHTS

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

              <Image
                src="/images/business-process.png"
                alt="Business Process Intelligence"
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