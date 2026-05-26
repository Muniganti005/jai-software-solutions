import Image from 'next/image'

export default function Page() {

  return (

    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 overflow-hidden">

      <section className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-400 text-sm font-semibold mb-8">

              ENTERPRISE APPLICATIONS

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">

              Enterprise Web

              <span className="block text-yellow-400">

                Applications

              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-xl mb-12">

              Build scalable, secure, and modern enterprise web applications
              designed for high performance, seamless user experiences,
              and digital transformation across industries.

            </p>

            {/* FEATURES */}
            <div className="space-y-6 mb-12">

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Modern Web Architecture

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Develop scalable frontend and backend architectures for enterprise systems.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Responsive User Experience

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Deliver intuitive and responsive interfaces optimized for all devices.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Secure & Scalable Systems

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Ensure enterprise-grade security, scalability, and application reliability.

                  </p>

                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition-all duration-300">

                BUILD WEB PLATFORM

              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">

                VIEW SOLUTIONS

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

              <Image
                src="/images/enterprise-web-applications.png"
                alt="Enterprise Web Applications"
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