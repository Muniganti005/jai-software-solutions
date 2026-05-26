'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-gold-600/10"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-gray-800/30 border border-gold-400/20 rounded-3xl p-16 md:p-24 text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform
            <br />
            <span className="text-gold-400">Your Business?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how AI automation can drive growth and efficiency for your organization.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

  {/* Start Project */}
  <Link href="/start-project">

    <button className="px-10 py-4 rounded-full border border-gold-400/30 text-gold-400 font-bold hover:bg-gold-400/10 transition-all duration-300">

      START YOUR PROJECT →

    </button>

  </Link>

  {/* Schedule Demo */}
  <Link href="/schedule-demo">

    <button className="px-10 py-4 rounded-full border border-gold-400/30 text-gold-400 font-bold hover:bg-gold-400/10 transition-all duration-300">

      SCHEDULE A DEMO →

    </button>

  </Link>

</div>
        </motion.div>
      </div>
    </section>
  )
}
