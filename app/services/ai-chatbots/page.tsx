export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-8">
          AI-Powered Chatbots
        </h1>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mb-16">
          Build intelligent conversational AI assistants that engage customers,
          answer queries instantly, and improve customer experience 24/7.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">
              Smart Conversations
            </h3>

            <p className="text-gray-400">
              AI chatbots capable of understanding natural language interactions.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">
              24/7 Support
            </h3>

            <p className="text-gray-400">
              Provide instant support and improve customer engagement anytime.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-semibold mb-4">
              Multi Platform
            </h3>

            <p className="text-gray-400">
              Deploy across websites, WhatsApp, and enterprise systems.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}