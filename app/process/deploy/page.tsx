// app/process/deploy/page.tsx

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-28">

          <p className="text-gold-400 font-semibold tracking-widest mb-4">
            PROCESS 04
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Deploy
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-4xl mx-auto">
            Launch secure, scalable, and cloud-native enterprise systems
            using modern DevOps and infrastructure automation.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-28">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Cloud Deployment
            </h3>

            <p className="text-gray-400 leading-7">
              Deploy enterprise applications using scalable cloud infrastructure.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              DevOps Automation
            </h3>

            <p className="text-gray-400 leading-7">
              Automate software delivery pipelines and deployment workflows.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Kubernetes & Docker
            </h3>

            <p className="text-gray-400 leading-7">
              Modern containerized infrastructure and orchestration systems.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}