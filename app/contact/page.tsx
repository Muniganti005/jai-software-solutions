import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-8">
            Let’s build intelligent digital solutions together.
            Reach out to our AI software team for consultation,
            cloud services, automation, and enterprise solutions.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <div className="space-y-8">

              {/* Phone */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold mb-2 text-gold-400">
                  📞 Phone
                </h3>

                <p className="text-gray-300">
                  +91 8790444627                </p>
              </div>

              {/* Email */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold mb-2 text-gold-400">
                  📧 Email
                </h3>

                <p className="text-gray-300">
                  contact@jaisoftwaresolutions.com
                </p>
              </div>

              {/* India Location */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="text-xl font-semibold mb-2 text-gold-400">
                  🇮🇳 India Location
                </h3>

                <p className="text-gray-300">
                  Pragathi Nagar,Hyderabad, Telangana, India
                </p>
              </div>

            </div>

            {/* Button */}
            <button className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-white hover:scale-105 transition-all duration-300 shadow-xl">
              Schedule A Free Consultation
            </button>

          </div>

          {/* Right Side Image */}
          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>

            <Image
              src="/jai-logo.png"
              alt="Jai Software Solutions"
              width={600}
              height={600}
              className="relative z-10 rounded-3xl shadow-2xl border border-white/10"
            />
          </div>

        </div>

      </div>
    </main>
  )
}