'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import {
  CalendarCheck,
  Clock3,
  Video,
  BrainCircuit,
} from 'lucide-react'

export default function ScheduleDemoPage() {

  const features = [
    {
      title: 'Live AI Demonstration',
      description:
        'Experience intelligent AI workflows and automation solutions in real time.',
      icon: Video,
    },

    {
      title: 'Business Consultation',
      description:
        'Discuss your business challenges and transformation opportunities.',
      icon: BrainCircuit,
    },

    {
      title: 'Flexible Scheduling',
      description:
        'Choose convenient demo times tailored to your availability.',
      icon: Clock3,
    },

    {
      title: 'Enterprise Solutions',
      description:
        'Explore scalable AI solutions designed for enterprise growth.',
      icon: CalendarCheck,
    },
  ]

  return (

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden pt-32 pb-20">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-block px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-400 text-sm font-semibold mb-8">

              SCHEDULE DEMO

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">

              Experience AI

              <span className="block text-yellow-400">

                In Action

              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-xl mb-14">

              Schedule a live AI demonstration and discover how intelligent
              automation, cloud systems, and enterprise AI solutions
              can transform your business operations.

            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-14">

              <div>

                <h3 className="text-4xl font-bold text-yellow-400">

                  500+

                </h3>

                <p className="text-gray-400 mt-2">

                  Live Demos

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-cyan-400">

                  98%

                </h3>

                <p className="text-gray-400 mt-2">

                  Client Satisfaction

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-purple-400">

                  24/7

                </h3>

                <p className="text-gray-400 mt-2">

                  Global Support

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-green-400">

                  AI

                </h3>

                <p className="text-gray-400 mt-2">

                  Smart Solutions

                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition-all duration-300 shadow-2xl">

                BOOK DEMO

              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">

                CONTACT TEAM

              </button>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>

            {/* FLOATING EFFECTS */}
            <div className="absolute -top-10 -left-10 w-24 h-24 border border-cyan-400/30 rounded-full animate-spin-slow"></div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-yellow-400/20 rounded-full animate-pulse"></div>

            {/* IMAGE CARD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl"
            >

              <Image
                src="/images/schedule-demo.png"
                alt="Schedule Demo"
                width={900}
                height={900}
                priority
                className="w-full h-auto object-cover"
              />

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold mb-6">

            What You'll Experience

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">

            Explore how our AI-powered systems automate workflows,
            improve productivity, and transform enterprise operations.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => {

            const Icon = item.icon

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-yellow-400/30 hover:bg-white/10 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-purple-500/20 flex items-center justify-center mb-8">

                  <Icon className="w-8 h-8 text-yellow-400" />

                </div>

                <h3 className="text-2xl font-semibold mb-4">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-8">

                  {item.description}

                </p>

              </motion.div>

            )
          })}

        </div>

      </section>

    </main>
  )
}