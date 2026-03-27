import { motion } from 'framer-motion'
import { Zap, Clock, Shield, BarChart2 } from 'lucide-react'

const benefits = [
    {
        icon: Zap,
        title: 'Zéro configuration',
        desc: 'Commencez à utiliser Shootix en moins de 5 minutes. Interface intuitive pensée pour les créatifs, pas pour les comptables.',
        color: '#f59e0b',
    },
    {
        icon: Clock,
        title: '3h économisées par semaine',
        desc: 'Finies les heures perdues sur des tableurs. Générez vos devis et factures en 30 secondes, PDF inclus.',
        color: '#6C63FF',
    },
    {
        icon: Shield,
        title: 'Conformité fiscale tunisienne',
        desc: 'TVA 19%, matricule fiscale, numérotation automatique — vos documents sont conformes aux exigences légales tunisiennes.',
        color: '#10b981',
    },
    {
        icon: BarChart2,
        title: 'Vision 360° de vos finances',
        desc: 'Bénéfice net en temps réel, CA facturé vs encaissé, suivi des freelances. Prenez de meilleures décisions pour votre studio.',
        color: '#8b5cf6',
    },
]

export default function WhyShootix() {
    return (
        <section id="why" className="py-28 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[100px]" />
                <div className="absolute left-0 bottom-1/3 w-[300px] h-[300px] rounded-full bg-indigo-900/10 blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Visual stats panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="glass rounded-3xl p-8 border border-violet-500/15 relative overflow-hidden">
                            {/* Glow */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

                            <div className="text-sm font-semibold text-violet-400 mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                                Tableau de bord — Bénéfice Net
                            </div>

                            {/* Big stat */}
                            <div className="mb-8">
                                <p className="text-muted text-xs mb-1">Bénéfice net ce mois</p>
                                <div className="text-5xl font-black gradient-text">2 250.000</div>
                                <div className="text-muted text-sm mt-1">DT · encaissé − freelances</div>
                            </div>

                            {/* Breakdown bars */}
                            {[
                                { label: 'CA Encaissé', value: 2450, max: 3778, color: '#6C63FF' },
                                { label: 'Frais Freelances', value: 200, max: 3778, color: '#ef4444' },
                                { label: 'Bénéfice Net', value: 2250, max: 3778, color: '#10b981' },
                            ].map((item, i) => (
                                <div key={i} className="mb-4">
                                    <div className="flex justify-between text-xs mb-1.5">
                                        <span className="text-muted">{item.label}</span>
                                        <span className="text-white font-semibold">{item.value.toLocaleString()} DT</span>
                                    </div>
                                    <div className="h-2 rounded-full bg-white/5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${(item.value / item.max) * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.2, delay: i * 0.2 }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        />
                                    </div>
                                </div>
                            ))}

                            {/* Shooting count */}
                            <div className="mt-6 grid grid-cols-3 gap-4">
                                {[
                                    { label: 'Shootings / 30j', value: '7', color: '#6C63FF' },
                                    { label: 'Clients actifs', value: '4', color: '#10b981' },
                                    { label: 'Factures impayées', value: '2', color: '#f59e0b' },
                                ].map((s, i) => (
                                    <div key={i} className="text-center p-3 rounded-xl" style={{ background: `${s.color}10`, border: `1px solid ${s.color}20` }}>
                                        <div className="text-2xl font-black" style={{ color: s.color }}>{s.value}</div>
                                        <div className="text-[10px] text-muted mt-0.5">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Benefits */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="mb-10"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 text-sm font-medium text-violet-300 mb-5">
                                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                                Pourquoi Shootix ?
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
                                La simplicité au service de<br />
                                <span className="gradient-text">votre créativité</span>
                            </h2>
                            <p className="text-muted text-base leading-relaxed">
                                Arrêtez de jongler entre Excel, WhatsApp et vos notes papier. Shootix vous donne une vue claire de votre activité pour que vous puissiez vous concentrer sur ce qui compte vraiment : <strong className="text-white">la création.</strong>
                            </p>
                        </motion.div>

                        <div className="space-y-5">
                            {benefits.map((b, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="group flex gap-4 p-4 rounded-2xl glass hover:bg-white/5 transition-all duration-300 cursor-default"
                                    style={{ border: `1px solid ${b.color}15` }}
                                >
                                    <div
                                        className="w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center"
                                        style={{ background: `${b.color}18` }}
                                    >
                                        <b.icon size={20} style={{ color: b.color }} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-1">{b.title}</h4>
                                        <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
