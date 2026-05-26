import type { Metadata } from 'next'
import Preloader from '@/components/Preloader'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JAI Software Solutions - AI Automation Services',
  description: 'Transform your business with AI automation solutions. Custom AI chatbots, workflow automation, and process optimization.',
  keywords: 'AI automation, AI solutions, chatbots, workflow automation, business automation',
  authors: [{ name: 'JAI Software Solutions' }],
  openGraph: {
    title: 'JAI Software Solutions',
    description: 'AI Automation That Transforms Your Business',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-dark-900 text-white overflow-x-hidden`}>
        <Preloader />
          <Navbar />
        {children}
      </body>
    </html>
  )
}
