import Image from 'next/image'

export default function Page() {

  return (

    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 overflow-hidden">

      <section className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-400 text-sm font-semibold mb-8">

              CLOUD & DEVOPS

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">

              Cloud & DevOps

              <span className="block text-yellow-400">

                Engineering

              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-xl mb-12">

              Modern cloud infrastructure and DevOps automation solutions
              designed to improve scalability, deployment speed, security,
              and operational efficiency for enterprise applications.

            </p>

            {/* FEATURES */}
            <div className="space-y-6 mb-12">

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Cloud Infrastructure

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Deploy scalable cloud environments using AWS, Azure, and modern architectures.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    CI/CD Automation

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Automate build, testing, and deployment pipelines for faster releases.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Monitoring & Security

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Ensure system reliability with monitoring, logging, and security automation.

                  </p>

                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition-all duration-300">

                START CLOUD TRANSFORMATION

              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">

                EXPLORE DEVOPS

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

              <Image
                src="/images/cloud-devops.png"
                alt="Cloud & DevOps Engineering"
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