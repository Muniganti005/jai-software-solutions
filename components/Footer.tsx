'use client'

import Link from 'next/link'

import {
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Twitter,
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-gold-400/10 pt-20 pb-10 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* Logo Section */}
          <div>

            <div className="flex items-center gap-4 mb-6">

              <img
                src="/jai-logo.png"
                alt="Jai Software Solutions"
                className="w-16 h-16 rounded-xl"
              />

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Jai Software Solutions
                </h2>

                <p className="text-gray-400">
                  AI Powered Innovation
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-8 mb-8">
              Transforming businesses with intelligent AI automation,
              enterprise applications, cloud engineering,
              and scalable digital solutions.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 border border-gold-400/30 rounded-xl flex items-center justify-center hover:bg-gold-400/10 transition-all duration-300"
              >
                <Linkedin className="text-gold-400 w-5 h-5" />
              </a>

              <a
                href="#"
                className="w-12 h-12 border border-gold-400/30 rounded-xl flex items-center justify-center hover:bg-gold-400/10 transition-all duration-300"
              >
                <Twitter className="text-gold-400 w-5 h-5" />
              </a>

              <a
                href="mailto:contact@jaisoftwaresolutions.com"
                className="w-12 h-12 border border-gold-400/30 rounded-xl flex items-center justify-center hover:bg-gold-400/10 transition-all duration-300"
              >
                <Mail className="text-gold-400 w-5 h-5" />
              </a>

            </div>

          </div>

          {/* Navigation */}
<div>

  <h3 className="text-white text-xl font-bold mb-8">
    Navigation
  </h3>

  <div className="space-y-5">

    <Link
      href="/"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      Home
    </Link>

    <Link
      href="/careers"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      Careers
    </Link>

    <Link
      href="/about"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      About Us
    </Link>

    <Link
      href="/contact"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      Contact
    </Link>

  </div>

</div>

          {/* Services */}
<div>

  <h3 className="text-white text-xl font-bold mb-8">
    Services
  </h3>

  <div className="space-y-5">

    <Link
      href="/services/workflow-automation"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      Intelligent Workflow Automation
    </Link>

    <Link
      href="/services/ai-chatbots"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      AI-Powered Chatbots
    </Link>

    <Link
      href="/services/business-process-intelligence"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      Business Process Intelligence
    </Link>

    <Link
      href="/services/custom-ai-solutions"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      Custom AI Solutions
    </Link>

    <Link
      href="/services/cloud-devops"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      Cloud & DevOps Engineering
    </Link>

    <Link
      href="/services/enterprise-web-applications"
      className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
    >
      Enterprise Web Applications
    </Link>

  </div>

</div>
          {/* Contact */}
          <div>

            <h3 className="text-white text-xl font-bold mb-8">
              Contact
            </h3>

            <div className="space-y-8">

              <div className="flex gap-4">

                <Mail className="text-gold-400 w-6 h-6 mt-1" />

                <div>

                  <p className="text-gray-500 text-sm mb-1">
                    Email
                  </p>

                  <p className="text-gray-300">
                    contact@jaisoftwaresolutions.com
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Phone className="text-gold-400 w-6 h-6 mt-1" />

                <div>

                  <p className="text-gray-500 text-sm mb-1">
                    Phone
                  </p>

                  <p className="text-gray-300">
                    +91 8790444627
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-gold-400 w-6 h-6 mt-1" />

                <div>

                  <p className="text-gray-500 text-sm mb-1">
                    Location
                  </p>

                  <p className="text-gray-300 leading-7">
                    Pragathi Nagar,
                    Hyderabad,
                    India
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gold-400/10 mt-20 pt-8 text-center">

          <p className="text-gray-500">
            © 2026 Jai Software Solutions. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  )
}