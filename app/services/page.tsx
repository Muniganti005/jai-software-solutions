export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">
          Our AI Services
        </h1>

        <div className="space-y-10">

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-semibold mb-4">
              Intelligent Workflow Automation
            </h2>

            <p className="text-gray-400 leading-8">
              Automate repetitive business operations using AI-powered workflows and intelligent systems.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-semibold mb-4">
              AI-Powered Chatbots
            </h2>

            <p className="text-gray-400 leading-8">
              Build smart conversational AI assistants that engage customers 24/7.
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
            <h2 className="text-3xl font-semibold mb-4">
              Custom AI Solutions
            </h2>

            <p className="text-gray-400 leading-8">
              Tailored AI solutions designed specifically for your business growth and innovation.
            </p>
          </div>

        </div>

      </div>
    </main>
  )
}