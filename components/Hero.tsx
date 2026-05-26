'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-gold-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-gradient-to-b from-gold-400/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03)_0%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            </div>

          <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            AI AUTOMATION
            <br />
            THAT TRANSFORMS
            <br />
            YOUR <span className="text-gold-400">BUSINESS.</span>
          </h1>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
            We build intelligent systems that automate complex workflows and drive real results. From AI chatbots to process optimization, we deliver enterprise-grade solutions.
          </p>

          <motion.a
  href="#services"
  whileHover={{ scale: 1.05, x: 10 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-gray-800 border border-gold-400/40 text-gold-400 font-bold rounded-full hover:bg-gold-400/10 hover:border-gold-400/80 transition-all duration-300 flex items-center gap-3 group w-fit cursor-pointer"
>

  EXPLORE OUR SERVICES

  <ArrowRight
    size={20}
    className="group-hover:translate-x-1 transition-transform"
  />

</motion.a>

        </motion.div>

        {/* Right - Animated Orb with Network Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">
            {/* Outer rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border border-gold-400/20 rounded-full"
            ></motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-12 border border-gold-400/15 rounded-full"
            ></motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-24 border border-gold-400/10 rounded-full"
            ></motion.div>

            {/* Glowing core */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-32 bg-gradient-to-br from-gold-400/30 to-gold-600/10 rounded-full blur-2xl"
            ></motion.div>

            {/* Central bright point */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-gold-300 to-gold-500 rounded-full blur-3xl opacity-40"
            ></motion.div>

            {/* Floating particles in network pattern */}
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * Math.PI * 2
              const radius = 120
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <motion.div
                  key={i}
                  animate={{
                    x: [x, x * 1.2, x],
                    y: [y, y * 1.2, y],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute w-2 h-2 bg-gold-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: -4,
                    marginTop: -4,
                  }}
                >
                  <div className="absolute inset-0 bg-gold-400 rounded-full blur-sm opacity-50"></div>
                </motion.div>
              )
            })}

            {/* Connecting lines between particles */}
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 3px rgba(255,215,0,0.1))' }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,215,0,0.3)" />
                  <stop offset="100%" stopColor="rgba(255,215,0,0)" />
                </linearGradient>
              </defs>
              {[...Array(8)].map((_, i) => {
                const angle1 = (i / 8) * Math.PI * 2
                const angle2 = ((i + 1) / 8) * Math.PI * 2
                const radius = 120
                const x1 = 50 + (Math.cos(angle1) * radius) / 10
                const y1 = 50 + (Math.sin(angle1) * radius) / 10
                const x2 = 50 + (Math.cos(angle2) * radius) / 10
                const y2 = 50 + (Math.sin(angle2) * radius) / 10
                return (
                  <line
                    key={i}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                )
              })}
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <ChevronDown className="text-gold-400 w-5 h-5" />
      </motion.div>
    </section>
  )
}
