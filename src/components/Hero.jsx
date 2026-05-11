import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Flame, Clock, Check, Camera, FileText, Users, Wallet, BarChart2 } from 'lucide-react'

function useCountdown(targetDate) {
    const calc = (target) => {
        const diff = new Date(target) - new Date()
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / 1000 / 60) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        }
    }
    const [timeLeft, setTimeLeft] = useState(() => calc(targetDate))
    useEffect(() => {
        const t = setInterval(() => setTimeLeft(calc(targetDate)), 1000)
        return () => clearInterval(t)
    }, [targetDate])
    return timeLeft
}

function CountdownUnit({ value, label }) {
    const display = String(value).padStart(2, '0')
    return (
        <div className="flex flex-col items-center gap-1.5">
            <div className="relative w-[56px] h-[56px] rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-inner flex items-center justify-center">
                <div className="absolute inset-x-0 top-1/2 h-px bg-black/50 z-10" />
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={display}
                        initial={{ y: -18, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 18, opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeInOut' }}
                        className="text-2xl font-black text-white tabular-nums leading-none"
                    >
                        {display}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">{label}</span>
        </div>
    )
}

const modules = [
    { icon: FileText, label: 'Factures & Devis PDF' },
    { icon: Camera, label: 'Shootings & Agenda' },
    { icon: Users, label: 'Clients & Équipe' },
    { icon: Wallet, label: 'Dépenses & Charges' },
    { icon: BarChart2, label: 'Rentabilité Réelle' },
]

export default function Hero({ onSignup }) {
    const timeLeft = useCountdown('2026-05-30T23:59:59')

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
            {/* Layered background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full bg-purple-600/10 blur-[150px]" />
                <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-fuchsia-700/12 blur-[80px]" />
                <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-violet-700/10 blur-[80px]" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(147,51,234,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.8) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
                {/* Radial fade at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-night to-transparent" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 w-full text-center">



                {/* Main headline */}
                < motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.05 }}
                    className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.06] tracking-tight mb-5"
                >
                    Moins de paperasse.
                    <br />
                    <span className="gradient-text">Plus de créativité.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-base lg:text-lg text-muted max-w-xl mx-auto mb-8 leading-relaxed"
                >
                    Shootix centralise tout votre business de studio en un seul outil desktop — conçu pour les photographes &amp; vidéastes tunisiens.
                </motion.p>

                {/* Module pills */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="flex flex-wrap items-center justify-center gap-2 mb-10"
                >
                    {modules.map((m, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-3.5 py-2 rounded-full glass border border-white/8 text-xs font-semibold text-white/70"
                        >
                            <m.icon size={12} className="text-purple-400" />
                            {m.label}
                        </div>
                    ))}
                    <div className="flex items-center gap-2 px-3.5 py-2 rounded-full glass border border-white/8 text-xs font-semibold text-white/70">
                        <Check size={12} className="text-green-400" />
                        TVA 19% Conformité TN
                    </div>
                </motion.div>

                {/* CTA + Countdown row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    {/* Primary CTA block */}
                    <div className="flex flex-col items-center gap-2">
                        <button
                            onClick={onSignup}
                            className="inline-flex items-center justify-center px-10 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 shadow-2xl shadow-violet-500/25 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Démarrer l'essai gratuit — 15 jours
                        </button>
                        <a
                            href="#pricing"
                            className="w-full sm:w-[320px] inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 border border-violet-500 hover:border-fuchsia-500 hover:bg-violet-500/5 transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
                        >
                            Voir l'offre à 349 DT
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-16 bg-white/10" />

                    {/* Countdown */}
                    <div className="inline-block glass rounded-2xl border border-fuchsia-500/15 px-5 py-4">
                        <div className="flex items-center gap-2 mb-3 justify-center">
                            <Flame size={11} className="text-fuchsia-400 animate-pulse" />
                            <p className="text-[10px] font-black uppercase tracking-widest text-fuchsia-300">
                                349 DT — Offre expire dans
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CountdownUnit value={timeLeft.days} label="Jours" />
                            <span className="text-xl font-black text-white/20 mt-4 leading-none">:</span>
                            <CountdownUnit value={timeLeft.hours} label="Heures" />
                            <span className="text-xl font-black text-white/20 mt-4 leading-none">:</span>
                            <CountdownUnit value={timeLeft.minutes} label="Mins" />
                            <span className="text-xl font-black text-white/20 mt-4 leading-none">:</span>
                            <CountdownUnit value={timeLeft.seconds} label="Secs" />
                        </div>
                    </div>
                </motion.div>

                {/* Trust line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-[10px] text-white/25 mt-7 font-medium tracking-wide"
                >
                    ✓ Aucune carte bancaire &nbsp;·&nbsp; ✓ Accès immédiat &nbsp;·&nbsp; ✓ Annulable à tout moment
                </motion.p>

            </div>
        </section >
    )
}
