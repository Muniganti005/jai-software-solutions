export default function Page() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Cloud & DevOps Engineering
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Deploy scalable cloud infrastructure, automate delivery pipelines,
            and modernize enterprise systems using DevOps best practices.
          </p>

        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Cloud Infrastructure
            </h3>

            <p className="text-gray-400 leading-7">
              Build scalable and secure cloud-native enterprise solutions.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              CI/CD Automation
            </h3>

            <p className="text-gray-400 leading-7">
              Automate software delivery and deployment pipelines efficiently.
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md">

            <h3 className="text-2xl font-semibold mb-4 text-gold-400">
              Docker & Kubernetes
            </h3>

            <p className="text-gray-400 leading-7">
              Modern containerized infrastructure and orchestration solutions.
            </p>

          </div>

        </div>

      </div>

    </main>
  )
}