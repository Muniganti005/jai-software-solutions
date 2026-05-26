'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
  { label: 'HOME', href: '#home' },

  { label: 'SERVICES', href: '#services' },

  { label: 'CAREERS', href: '/careers' },

  { label: 'ABOUT US', href: '/about' },
]

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-gold-400/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  className="flex items-center gap-3"
>
  <Image
    src="/jai-logo.png"
    alt="Jai Software Solutions"
    width={50}
    height={50}
    className="rounded-xl"
  />

  <div>
    <p className="text-white font-bold text-sm">
      Jai Software Solutions
    </p>

    <p className="text-gray-400 text-xs">
      AI Powered Transformation

    </p>
  </div>
</motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-12 items-center">
            {navItems.map((item) => (
              <a
  key={item.label}
  href={item.href}
  className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-300"
>
  {item.label}
</a>
            ))}
          </div>

          {/* CTA Button */}
          <a href="/contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="hidden sm:block px-6 py-2.5 bg-gray-800 border border-gold-400/30 text-gold-400 font-semibold rounded-full hover:bg-gold-400/10 hover:border-gold-400/60 transition-all duration-300"
  >
    CONTACT US
  </motion.button>
</a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden pb-6 space-y-3"
          >
            {navItems.map((item) => (
              <a
  key={item.label}
  href={item.href}
  className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors duration-300"
>
  {item.label}
</a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
