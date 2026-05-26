'use client'

import Image from 'next/image'

import { motion } from 'framer-motion'

import {
  UploadCloud,
  ShieldCheck,
  ServerCog,
  Activity,
} from 'lucide-react'

export default function DeployPage() {

  const features = [
    {
      title: 'Cloud Deployment',
      description:
        'Deploy scalable AI applications securely across enterprise cloud environments.',
      icon: UploadCloud,
    },

    {
      title: 'Infrastructure Security',
      description:
        'Protect enterprise systems with secure deployment pipelines and monitoring.',
      icon: ShieldCheck,
    },

    {
      title: 'DevOps Automation',
      description:
        'Automate CI/CD workflows, scaling operations, and infrastructure management.',
      icon: ServerCog,
    },

    {
      title: 'Real-Time Monitoring',
      description:
        'Continuously monitor systems, APIs, cloud workloads, and application health.',
      icon: Activity,
    },
  ]

  return (

    <main className="min-h-screen bg-[#050816] text-white overflow-hidden pt-32 pb-20">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      </div>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="inline-block px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-400 text-sm font-semibold mb-8">

              DEPLOY

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">

              Deploy AI

              <span className="block text-yellow-400">

                At Scale

              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-xl mb-14">

              We deploy secure, scalable, and enterprise-grade AI systems
              using cloud-native architectures, DevOps automation,
              and intelligent infrastructure management.

            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-14">

              <div>

                <h3 className="text-4xl font-bold text-yellow-400">

                  99.99%

                </h3>

                <p className="text-gray-400 mt-2">

                  Uptime

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-cyan-400">

                  1M+

                </h3>

                <p className="text-gray-400 mt-2">

                  Deployments

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-purple-400">

                  24/7

                </h3>

                <p className="text-gray-400 mt-2">

                  Monitoring

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-green-400">

                  100%

                </h3>

                <p className="text-gray-400 mt-2">

                  Secure Delivery

                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition-all duration-300 shadow-2xl">

                DEPLOY NOW

              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">

                VIEW CLOUD ARCHITECTURE

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

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full animate-pulse"></div>

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
                src="/images/deploy-ai.png"
                alt="Deploy AI"
                width={900}
                height={900}
                priority
                className="w-full h-auto object-cover"
              />

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold mb-6">

            Our Deployment Process

          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto">

            We deliver cloud-native enterprise deployments with intelligent automation,
            infrastructure security, DevOps pipelines, and real-time monitoring systems.

          </p>

        </div>

        {/* FEATURE CARDS */}
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

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-cyan-500/20 flex items-center justify-center mb-8">

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