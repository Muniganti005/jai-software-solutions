'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import {
  Search,
  PenTool,
  Zap,
  Rocket,
  Sparkles,
  ArrowRight,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We analyze your business workflows, challenges, and automation opportunities.',
    icon: Search,
    link: '/process/discover',
  },

  {
    number: '02',
    title: 'Plan',
    description:
      'We design intelligent AI strategies and scalable digital architectures.',
    icon: PenTool,
    link: '/process/plan',
  },

  {
    number: '03',
    title: 'Build',
    description:
      'Our experts develop enterprise-grade AI solutions and applications.',
    icon: Zap,
    link: '/process/build',
  },

  {
    number: '04',
    title: 'Deploy',
    description:
      'We deploy secure cloud-native infrastructure with modern DevOps practices.',
    icon: Rocket,
    link: '/process/deploy',
  },

  {
    number: '05',
    title: 'Optimize',
    description:
      'Continuously monitor, improve, and optimize systems using AI insights.',
    icon: Sparkles,
    link: '/process/optimize',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-32 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >

          <p className="text-gold-400 text-sm font-semibold tracking-widest mb-4 flex items-center gap-3">

            <span className="w-8 h-0.5 bg-gradient-to-r from-gold-400 to-transparent"></span>

            OUR PROCESS

          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Intelligent Development Lifecycle
          </h2>

          <p className="text-gray-400 max-w-3xl text-lg leading-8">
            A modern AI-driven workflow designed to transform ideas into scalable,
            intelligent enterprise solutions.
          </p>

        </motion.div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">

          {steps.map((step, index) => {

            const Icon = step.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative group"
              >

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[40%] h-0.5 bg-gradient-to-r from-gold-400/40 to-transparent"></div>
                )}

                <Link href={step.link}>

                  <div className="backdrop-blur-md bg-gray-800/30 border border-gold-400/20 rounded-2xl p-8 text-center hover:bg-gray-800/50 hover:border-gold-400/50 hover:shadow-lg hover:shadow-gold-400/10 transition-all duration-300 h-full cursor-pointer">

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-600/5 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-gold-400/40 group-hover:to-gold-600/10 transition-all duration-300">

                      <Icon className="w-8 h-8 text-gold-400" />

                    </div>

                    

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 group-hover:text-gold-400 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Learn More */}
                    <div className="flex items-center justify-center gap-2 text-gold-400 text-sm font-medium group-hover:text-gold-300 transition-colors duration-300">

                      Learn More

                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />

                    </div>

                  </div>

                </Link>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}