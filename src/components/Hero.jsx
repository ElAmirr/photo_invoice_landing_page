import { motion } from 'framer-motion'
import { ArrowRight, Play, Star } from 'lucide-react'

export default function Hero() {
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
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 text-sm font-medium text-violet-300 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                            Nouveau · Version 2026
                            <Star size={12} className="fill-violet-400 text-violet-400" />
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
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
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg text-muted leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
                        >
                            Shootix centralise tout ce dont vous avez besoin : facturation avec TVA 19%,
                            calendrier de shooting, gestion clients et suivi de rentabilité — en un seul outil élégant.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#pricing"
                                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 glow-violet shadow-2xl"
                            >
                                Commencer gratuitement
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#features"
                                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-base font-semibold text-white glass hover:bg-white/10 transition-all duration-300"
                            >
                                <Play size={16} className="fill-white" />
                                Voir la démo
                            </a>
                        </motion.div>

                        {/* Social proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
                        >
                            <div className="flex -space-x-2">
                                {['#6C63FF', '#4F46E5', '#7C3AED', '#8B5CF6'].map((color, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full border-2 border-night flex items-center justify-center text-xs font-bold"
                                        style={{ backgroundColor: color }}
                                    >
                                        {['A', 'M', 'S', 'K'][i]}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                    {'★★★★★'}
                                </div>
                                <span className="text-xs text-muted">+200 photographes satisfaits</span>
                            </div>
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
