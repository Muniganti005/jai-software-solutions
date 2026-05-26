'use client'

import Link from 'next/link'

import { useState } from 'react'

import { Menu, X } from 'lucide-react'

import { motion } from 'framer-motion'

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {
      label: 'HOME',
      href: '/',
    },

    {
      label: 'SERVICES',
      href: '/#services',
    },

    {
      label: 'CAREERS',
      href: '/careers',
    },

    {
      label: 'ABOUT US',
      href: '/about',
    },
  ]

  return (

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#050816]/90 border-b border-yellow-400/10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 cursor-pointer"
            >

              <img
                src="/jai-logo.png"
                alt="Jai Software Solutions"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-xl"
              />

              <div>

                <h1 className="text-white font-bold text-lg sm:text-2xl leading-tight">

                  Jai Software Solutions

                </h1>

                <p className="text-gray-400 text-xs sm:text-sm">

                  AI Powered Transformation

                </p>

              </div>

            </motion.div>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">

            {navItems.map((item) => (

              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold tracking-wide text-gray-300 hover:text-yellow-400 transition-all duration-300"
              >

                {item.label}

              </Link>

            ))}

          </div>

          {/* Contact Button Desktop */}
          <Link href="/contact">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-8 py-3 rounded-full border border-yellow-400/30 text-yellow-400 font-bold hover:bg-yellow-400/10 transition-all duration-300"
            >

              CONTACT US

            </motion.button>

          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >

            {isOpen ? (

              <X size={30} />

            ) : (

              <Menu size={30} />

            )}

          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0b1120] border border-white/10 rounded-2xl p-6 mt-4 mb-4"
          >

            <div className="flex flex-col gap-6">

              {navItems.map((item) => (

                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-yellow-400 transition-all duration-300"
                >

                  {item.label}

                </Link>

              ))}

              {/* Mobile Contact Button */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
              >

                <button className="w-full mt-2 px-6 py-4 rounded-full border border-yellow-400/30 text-yellow-400 font-bold hover:bg-yellow-400/10 transition-all duration-300">

                  CONTACT US

                </button>

              </Link>

            </div>

          </motion.div>

        )}

      </div>

    </nav>
  )
}