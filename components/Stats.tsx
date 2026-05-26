'use client'

import { motion } from 'framer-motion'

import {
  Brain,
  Cloud,
  ShieldCheck,
  Clock3,
} from 'lucide-react'

const stats = [
  {
    number: 'AI+',
    label: 'Intelligent Automation',
    icon: Brain,
  },

  {
    number: 'Cloud',
    label: 'Scalable Infrastructure',
    icon: Cloud,
  },

  {
    number: '24/7',
    label: 'Enterprise Support',
    icon: Clock3,
  },

  {
    number: 'Secure',
    label: 'Reliable Solutions',
    icon: ShieldCheck,
  },
]

export default function Stats() {
  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="backdrop-blur-md bg-gray-800/20 border border-gold-400/20 rounded-[40px] p-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {stats.map((stat, index) => {

              const Icon = stat.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >

                  <div className="flex justify-center mb-6">

                    <Icon className="w-12 h-12 text-gold-400" />

                  </div>

                  <h3 className="text-5xl font-bold text-gold-400 mb-4">
                    {stat.number}
                  </h3>

                  <p className="text-gray-400 text-lg">
                    {stat.label}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}