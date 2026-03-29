import { motion } from 'framer-motion'

export default function Hero({ onSignup }) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[120px]" />
                <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-800/15 blur-[80px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-violet-500/10 blur-[80px]" />
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(108,99,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Text */}
                    <div className="flex-1 text-center lg:text-left">

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6"
                        >
                            Gérez votre{' '}
                            <span className="gradient-text">studio photo</span>
                            {' '}comme un pro
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
                        >
                            Shootix centralise tout : facturation, devis, calendrier, clients et rentabilité, gestion de lequipe'.
                            <span className="text-white font-bold block mt-2">Pack Studio Pro — 699 DT à vie. Profitez de 15 jours d'essai gratuit.</span>
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <button
                                onClick={onSignup}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 glow-violet shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Démarrer l'essai gratuit — 15 jours
                            </button>
                        </motion.div>

                    </div>

                    {/* Right: Dashboard Preview */}
                    <div className="flex-1 relative w-full max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.3 }}
                            className="relative animate-float"
                        >
                            <DashboardPreview />

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function DashboardPreview() {
    return (
        <div className="rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl bg-[#0B0E14]/90 backdrop-blur-xl group">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 relative z-10 bg-[#0B0E14]/50">
                <div className="flex gap-1.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-inner relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
                <div className="mx-auto text-[11px] font-bold text-muted/60 tracking-wider uppercase opacity-80">Shootix Studio — Dashboard</div>
            </div>

            {/* Actual Screenshot */}
            <div className="relative aspect-[1271/645] overflow-hidden bg-[#1a1d26]">
                <img
                    src="/Screenshot.png"
                    alt="Shootix Dashboard"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                />

                {/* Subtle Overlay to match theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] pointer-events-none" />
            </div>
        </div>
    )
}
