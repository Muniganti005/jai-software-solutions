import Image from 'next/image'

export default function Page() {

  return (

    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 overflow-hidden">

      <section className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-block px-5 py-2 rounded-full border border-yellow-400/30 text-yellow-400 text-sm font-semibold mb-8">

              AI CHATBOTS

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">

              AI-Powered

              <span className="block text-yellow-400">

                Chatbots

              </span>

            </h1>

            <p className="text-gray-400 text-lg leading-9 max-w-xl mb-12">

              Build intelligent conversational AI assistants that automate customer interactions,
              improve engagement, and provide real-time support across digital platforms.

            </p>

            {/* FEATURES */}
            <div className="space-y-6 mb-12">

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Smart Customer Support

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Deliver 24/7 automated customer assistance with AI-driven conversations.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Human-Like Conversations

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Advanced NLP models create natural and intelligent conversations.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-3"></div>

                <div>

                  <h3 className="text-xl font-semibold mb-2">

                    Multi-Platform Integration

                  </h3>

                  <p className="text-gray-400 leading-7">

                    Integrate chatbots into websites, apps, WhatsApp, and enterprise systems.

                  </p>

                </div>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition-all duration-300">

                BUILD CHATBOT

              </button>

              <button className="px-8 py-4 rounded-full border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300">

                LIVE DEMO

              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

            {/* Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

              <Image
                src="/images/ai-chatbot.png"
                alt="AI Chatbot"
                width={900}
                height={900}
                className="w-full h-auto object-cover hover:scale-105 transition-all duration-700"
                priority
              />

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}