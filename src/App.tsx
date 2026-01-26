import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background gradients for premium feel */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <main className="max-w-4xl w-full text-center relative z-10 space-y-8">
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
            GastonMob
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Welcome to your premium React application powered by <span className="text-blue-400 font-medium">Vite</span> and <span className="text-cyan-400 font-medium">Tailwind CSS v4</span>.
            Build something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {['Fast', 'Modern', 'Scalable'].map((feature) => (
            <div key={feature} className="group p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{feature}</h3>
              <p className="text-neutral-500 text-sm">Engineered for performance and developer experience.</p>
            </div>
          ))}
        </div>

        <div className="pt-10">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
          >
            Count is {count}
          </button>
        </div>
      </main>

      <footer className="absolute bottom-8 text-neutral-600 text-sm">
        <p>GastonMob SyncUp &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
