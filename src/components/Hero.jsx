import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Flame, Clock } from 'lucide-react'

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
            <div className="relative w-[52px] h-[52px] rounded-xl overflow-hidden bg-[#0d1119] border border-white/10 shadow-lg flex items-center justify-center">
                {/* Top half line */}
                <div className="absolute inset-x-0 top-1/2 h-px bg-black/40 z-10" />
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={display}
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="text-2xl font-black text-white tabular-nums leading-none"
                    >
                        {display}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className="text-[9px] uppercase tracking-widest text-muted/50 font-bold">{label}</span>
        </div>
    )
}

export default function Hero({ onSignup }) {
    const timeLeft = useCountdown('2026-05-30T23:59:59')

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/12 blur-[130px]" />
                <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-fuchsia-700/15 blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/5 w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[90px]" />
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(147,51,234,1) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,1) 1px, transparent 1px)',
                        backgroundSize: '60px 60px',
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* —— Left Column —— */}
                    <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">

                        {/* H1 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.06] tracking-tight mb-4"
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
                            className="text-sm lg:text-base text-muted leading-relaxed mb-5"
                        >
                            Facturation, clients, calendrier, dépenses et rentabilité — tout en un.
                            <span className="text-white font-semibold"> 15 jours d'essai gratuit.</span>
                        </motion.p>

                        {/* ── Countdown ── */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mb-5"
                        >
                            <div className="inline-block glass rounded-xl border border-white/8 px-4 py-3">
                                {/* Promo label */}
                                <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                                    <Flame size={11} className="text-fuchsia-400 animate-pulse" />
                                    <p className="text-[10px] font-black uppercase tracking-widest text-fuchsia-300">
                                        Offre limitée — 549 DT au lieu de 699 DT
                                    </p>
                                </div>
                                {/* Timer label */}
                                <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
                                    <Clock size={12} className="text-muted/50" />
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-muted/50">
                                        Expire dans
                                    </p>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <CountdownUnit value={timeLeft.days} label="Jours" />
                                    <span className="text-2xl font-black text-white/20 mt-3 leading-none">:</span>
                                    <CountdownUnit value={timeLeft.hours} label="Heures" />
                                    <span className="text-2xl font-black text-white/20 mt-3 leading-none">:</span>
                                    <CountdownUnit value={timeLeft.minutes} label="Mins" />
                                    <span className="text-2xl font-black text-white/20 mt-3 leading-none">:</span>
                                    <CountdownUnit value={timeLeft.seconds} label="Secs" />
                                </div>
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.45 }}
                            className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
                        >
                            <button
                                onClick={onSignup}
                                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 transition-all duration-300 glow-violet shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Démarrer l'essai gratuit
                            </button>
                            <a
                                href="#pricing"
                                className="inline-flex items-center justify-center px-6 py-4 rounded-2xl text-sm font-bold glass border border-white/10 text-white hover:bg-white/5 transition-all duration-300"
                            >
                                Voir l'offre à 549 DT
                            </a>
                        </motion.div>

                        {/* Social proof micro-line */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className="text-[10px] text-muted/40 mt-4 font-medium"
                        >
                            ✓ Aucune carte bancaire &nbsp;·&nbsp; ✓ Accès immédiat &nbsp;·&nbsp; ✓ Annulable à tout moment
                        </motion.p>

                    </div>

                    {/* —— Right Column: Dashboard —— */}
                    <div className="flex-1 relative w-full max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.35 }}
                            className="relative animate-float"
                        >
                            {/* Glow behind card */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/10 rounded-3xl blur-2xl -z-10" />
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
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5 bg-[#0B0E14]/50">
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
                <div className="mx-auto text-[11px] font-bold text-muted/60 tracking-wider uppercase">Shootix Studio — Dashboard</div>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-[1271/645] overflow-hidden bg-[#1a1d26]">
                <img
                    src="/Screenshot.png"
                    alt="Shootix Dashboard"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14]/30 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.05] pointer-events-none" />
            </div>
        </div>
    )
}
