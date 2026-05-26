'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {

  return (

    <section className="relative min-h-screen overflow-hidden bg-[#050816] text-white flex items-center pt-36 lg:pt-0">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full"></div>

      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-4xl sm:text-5xl lg:text-8xl font-black leading-tight tracking-tight"
            >

              AI AUTOMATION

              <br />

              THAT

              <br />

              TRANSFORMS

              <br />

              YOUR

              <span className="block text-gold-400">

                BUSINESS.

              </span>

            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-8 text-base sm:text-lg lg:text-xl text-gray-400 leading-8 max-w-2xl"
            >

              We build intelligent systems that automate workflows,
              optimize business operations, and deliver enterprise-grade AI solutions.

            </motion.p>

            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12"
            >

              <Link
                href="/services"
                className="group inline-flex items-center gap-4 px-10 py-5 rounded-full border border-gold-400/40 text-gold-400 font-bold text-lg hover:bg-gold-400 hover:text-black transition-all duration-500"
              >

                EXPLORE OUR SERVICES

                <ArrowRight className="group-hover:translate-x-2 transition-all duration-300" />

              </Link>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[650px] flex items-center justify-center overflow-hidden"
          >

            {/* BIG BACKGROUND GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute w-[500px] h-[500px] rounded-full bg-gold-400/10 blur-3xl"
            />

            {/* MAIN ROTATING RINGS */}
            {[1, 2, 3].map((ring) => (

              <motion.div
                key={ring}
                animate={{
                  rotate: ring % 2 === 0 ? 360 : -360,
                }}
                transition={{
                  duration: 20 + ring * 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute rounded-full border border-gold-400/10"
                style={{
                  width: `${220 + ring * 120}px`,
                  height: `${220 + ring * 120}px`,
                }}
              >

                {/* MOVING ENERGY NODE */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="absolute top-0 left-1/2 -translate-x-1/2"
                >

                  <div className="w-5 h-5 rounded-full bg-gold-400 shadow-[0_0_25px_rgba(255,215,0,0.9)]"></div>

                </motion.div>

              </motion.div>

            ))}

            {/* CENTER AI CORE */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="relative z-20"
            >

              {/* OUTER GLOW */}
              <div className="absolute inset-0 w-52 h-52 bg-gradient-to-r from-gold-400/30 to-yellow-500/20 rounded-full blur-3xl"></div>

              {/* MAIN CORE */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="relative w-52 h-52 rounded-full border border-gold-400/30 bg-[#0b1020]/80 backdrop-blur-xl flex items-center justify-center shadow-[0_0_80px_rgba(255,215,0,0.15)]"
              >

                {/* INNER CORE */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="w-36 h-36 rounded-full bg-gradient-to-br from-gold-400 to-yellow-500 flex items-center justify-center shadow-[0_0_60px_rgba(255,215,0,0.5)]"
                >

                  <span className="text-5xl font-black text-black">

                    AI

                  </span>

                </motion.div>

              </motion.div>

            </motion.div>

            {/* FLOATING ICON CARDS */}
            {[
              { icon: '⚡', top: '15%', left: '10%' },
              { icon: '☁', top: '20%', right: '10%' },
              { icon: '🤖', bottom: '18%', left: '12%' },
              { icon: '📊', bottom: '12%', right: '12%' },
            ].map((item, i) => (

              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                }}
                className="absolute"
                style={item}
              >

                <div className="w-20 h-20 rounded-2xl bg-[#0b1020]/80 backdrop-blur-xl border border-gold-400/20 flex items-center justify-center text-3xl shadow-2xl">

                  {item.icon}

                </div>

              </motion.div>

            ))}

            {/* FLOATING PARTICLES */}
            {[...Array(20)].map((_, i) => (

              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                }}
                className="absolute w-2 h-2 bg-gold-400 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />

            ))}

          </motion.div>

        </div>

      </div>

    </section>

  )
}