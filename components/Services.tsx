'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import {
  Zap,
  MessageSquare,
  Cog,
  Sparkles,
  Cloud,
  Globe,
  ArrowRight,
} from 'lucide-react'

const services = [
  {
    title: 'Intelligent Workflow Automation',
    description:
      'Automate repetitive business processes using AI-powered workflows.',
    link: '/services/workflow-automation',
    icon: Zap,
  },

  {
    title: 'AI-Powered Chatbots',
    description:
      'Build intelligent conversational AI assistants.',
    link: '/services/ai-chatbots',
    icon: MessageSquare,
  },

  {
    title: 'Business Process Intelligence',
    description:
      'AI-driven analytics and intelligent insights.',
    link: '/services/business-process-intelligence',
    icon: Cog,
  },

  {
    title: 'Custom AI Solutions',
    description:
      'Tailored AI solutions for digital transformation.',
    link: '/services/custom-ai-solutions',
    icon: Sparkles,
  },

  {
    title: 'Cloud & DevOps Engineering',
    description:
      'Cloud infrastructure and DevOps automation.',
    link: '/services/cloud-devops',
    icon: Cloud,
  },

  {
    title: 'Enterprise Web Applications',
    description:
      'Modern scalable enterprise web applications.',
    link: '/services/enterprise-web-applications',
    icon: Globe,
  },
]

export default function Services() {
  return (
    <section
  id="services"
  className="relative py-32 overflow-hidden scroll-mt-32"
>

      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl"></div>

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
            OUR SERVICES
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            End-to-End AI Automation
            <br />
            <span className="text-gold-400">
              Services for Every Business
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg">
            From strategy to deployment, we provide comprehensive AI automation services tailored to your business needs.
          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => {

            const Icon = service.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >

                <div className="backdrop-blur-md bg-gray-800/30 border border-gold-400/20 p-8 rounded-2xl h-full transition-all duration-300 hover:bg-gray-800/50 hover:border-gold-400/50 hover:shadow-lg hover:shadow-gold-400/10">

                  {/* Icon */}
                  <div className="mb-6 w-16 h-16 bg-gradient-to-br from-gold-400/20 to-gold-600/5 rounded-xl flex items-center justify-center group-hover:from-gold-400/40 group-hover:to-gold-600/10 transition-all duration-300">

                    <Icon className="w-8 h-8 text-gold-400" />

                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-gold-400 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <Link href={service.link}>

                    <button className="flex items-center gap-2 text-gold-400 hover:text-gold-300 transition-colors duration-300">

                      Learn More

                      <ArrowRight className="w-4 h-4" />

                    </button>

                  </Link>

                </div>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}