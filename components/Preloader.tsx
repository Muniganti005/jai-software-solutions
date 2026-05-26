'use client'

import { useEffect, useState } from 'react'

import {
  motion,
  AnimatePresence,
} from 'framer-motion'

export default function Preloader() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 2800)

    return () => clearTimeout(timer)

  }, [])

  if (!loading) return null

  return (

    <AnimatePresence>

      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 1.02,
        }}
        transition={{
          duration: 1,
        }}
        className="fixed inset-0 z-[99999] bg-[#050816] flex items-center justify-center overflow-hidden"
      >

        {/* Background Glow */}
        <div className="absolute w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl"></div>

        {/* Neural Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute w-96 h-96 rounded-full border border-yellow-400/10"
        />

        {/* Main Content */}
        <div className="relative flex flex-col items-center">

          {/* Gold Animated Line */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 220,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-12"
          />

          {/* Logo Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 1,
            }}
            className="text-5xl md:text-7xl font-bold text-white tracking-wide text-center"
          >

            JAI SOFTWARE SOLUTIONS

          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.2,
              duration: 1,
            }}
            className="mt-6 text-gray-400 text-lg tracking-[0.4em] uppercase text-center"
          >

            AI Powered Transformation

          </motion.p>

          {/* Neural Pulse */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="mt-14 w-4 h-4 rounded-full bg-yellow-400 shadow-[0_0_25px_rgba(255,215,0,0.8)]"
          />

          {/* Loading Glow Line */}
          <div className="mt-16 w-72 h-[2px] bg-white/10 overflow-hidden rounded-full">

            <motion.div
              initial={{
                x: '-100%',
              }}
              animate={{
                x: '100%',
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'linear',
              }}
              className="w-32 h-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            />

          </div>

        </div>

      </motion.div>

    </AnimatePresence>
  )
}