export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-24">

          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            About Jai Software Solutions
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-4xl mx-auto">
            Jai Software Solutions is an AI-driven technology company focused on intelligent automation,
            enterprise software solutions, cloud engineering, and digital transformation services
            for modern businesses.
          </p>

        </div>

        {/* Mission */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold mb-8 text-gold-400">
            Our Mission
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-5xl">
            Our mission is to empower organizations through innovative AI technologies,
            intelligent automation systems, and scalable enterprise solutions that
            accelerate business growth and digital transformation.
          </p>

        </div>

        {/* Expertise */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold mb-12 text-gold-400">
            Our Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                AI Automation
              </h3>

              <p className="text-gray-400 leading-7">
                Intelligent workflow automation and smart AI-powered business solutions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Cloud Engineering
              </h3>

              <p className="text-gray-400 leading-7">
                Scalable cloud-native infrastructure and DevOps solutions.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Enterprise Applications
              </h3>

              <p className="text-gray-400 leading-7">
                Modern enterprise-grade web applications and digital platforms.
              </p>
            </div>

          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold mb-12 text-gold-400">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <ul className="space-y-4 text-gray-300">

                <li>✔ AI-First Innovation Strategy</li>
                <li>✔ Scalable Enterprise Solutions</li>
                <li>✔ Modern Cloud Infrastructure</li>
                <li>✔ Intelligent Workflow Automation</li>

              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <ul className="space-y-4 text-gray-300">

                <li>✔ Secure & Reliable Systems</li>
                <li>✔ Future-Ready Technologies</li>
                <li>✔ Modern UI/UX Experiences</li>
                <li>✔ Customer-Centric Solutions</li>

              </ul>
            </div>

          </div>

        </div>

        {/* Technology Stack */}
        <div className="mb-24">

          <h2 className="text-4xl font-bold mb-10 text-gold-400">
            Technologies We Use
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              'React',
              'Next.js',
              'AI',
              'AWS',
              'Docker',
              'Kubernetes',
              'Cloud',
              'Automation',
              'Node.js',
              'Enterprise APIs',
            ].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300"
              >
                {tech}
              </div>
            ))}

          </div>

        </div>

        {/* Vision */}
        <div className="text-center mt-24">

          <h2 className="text-4xl font-bold mb-8">
            Building The Future Of Intelligent Enterprise Solutions
          </h2>

          <p className="text-gray-400 text-lg max-w-4xl mx-auto leading-8">
            We believe AI and automation will redefine the future of business,
            and our goal is to help organizations lead that transformation.
          </p>

        </div>

      </div>

    </main>
  )
}