import Image from 'next/image'

import Link from 'next/link'

import {
  Rocket,
  Lightbulb,
  Users,
  Trophy,
} from 'lucide-react'

export default function CareersPage() {

  const benefits = [
    {
      title: 'Grow Your Career',
      description:
        'Get opportunities to work on challenging projects and accelerate your growth.',
      icon: Rocket,
    },

    {
      title: 'Innovate Every Day',
      description:
        'Work with the latest technologies and build solutions that matter.',
      icon: Lightbulb,
    },

    {
      title: 'Great Team Culture',
      description:
        'Collaborate with brilliant minds in a supportive and inclusive environment.',
      icon: Users,
    },

    {
      title: 'Make an Impact',
      description:
        'Your work will help transform businesses and create real impact.',
      icon: Trophy,
    },
  ]

  return (

    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 overflow-hidden">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-400 text-sm font-semibold mb-8">

              CAREERS

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">

              Build the Future

              <span className="block text-yellow-400">

                With Us

              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-xl mb-12">

              Join a team of innovators, problem solvers, and dreamers building AI-powered solutions that make a real impact across industries.

            </p>

            {/* STATS */}
            <div className="flex gap-16">

              <div>

                <h3 className="text-5xl font-bold text-yellow-400">

                  50+

                </h3>

                <p className="text-gray-400 mt-2">

                  Team Members

                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold text-yellow-400">

                  10+

                </h3>

                <p className="text-gray-400 mt-2">

                  Open Positions

                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-14">

              <Link href="/contact">

                <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition-all duration-300">

                  APPLY NOW

                </button>

              </Link>

              <Link href="/about">

                <button className="px-8 py-4 rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">

                  LEARN MORE

                </button>

              </Link>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

              <Image
                src="/images/careers-team.png"
                alt="Team Working"
                width={900}
                height={700}
                className="w-full h-auto object-cover hover:scale-105 transition-all duration-700"
                priority
              />

            </div>

          </div>

        </div>

      </section>

      {/* WHY JOIN US */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold mb-6">

            Why Join Us?

          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">

            We believe in growth, innovation, and creating meaningful impact together.

          </p>

        </div>

        {/* BENEFITS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item, index) => {

            const Icon = item.icon

            return (

              <div
                key={index}
                className="bg-white/5 border border-yellow-400/10 rounded-3xl p-8 hover:border-yellow-400/40 hover:bg-white/10 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-400/10 flex items-center justify-center mb-8">

                  <Icon className="w-8 h-8 text-yellow-400" />

                </div>

                <h3 className="text-2xl font-semibold mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-8">

                  {item.description}

                </p>

              </div>

            )
          })}

        </div>

      </section>

    </main>
  )
}