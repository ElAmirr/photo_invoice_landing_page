import { motion } from 'framer-motion'
import { Clock, TrendingUp, ShieldCheck, BarChart2 } from 'lucide-react'

const benefits = [
    {
        icon: Clock,
        title: '3h économisées par semaine',
        desc: 'Finies les heures perdues sur Excel. Devis, factures, suivi de paiements — tout se fait en quelques clics. Consacrez votre temps à la création.',
        color: '#9333EA',
    },
    {
        icon: TrendingUp,
        title: 'Bénéfice net en temps réel',
        desc: 'Revenus encaissés, charges déduites, TVA calculée. Le tableau de bord vous donne une vision claire de votre rentabilité par mois, trimestre ou année.',
        color: '#10b981',
    },
    {
        icon: ShieldCheck,
        title: 'Conformité fiscale tunisienne',
        desc: 'TVA 19%, matricule fiscale, numérotation automatique, RIB. Vos devis et factures sont conformes aux exigences légales dès la première utilisation.',
        color: '#f59e0b',
    },
    {
        icon: BarChart2,
        title: 'Studio, clients & équipe — un seul outil',
        desc: 'Gérez vos clients, shootings, coéquipiers et dépenses dans une seule application. Fini de jongler entre WhatsApp, Excel et papier.',
        color: '#06b6d4',
    },
]

export default function WhyShootix() {
    return (
        <section id="why" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[100px]" />
                <div className="absolute left-0 bottom-1/3 w-[300px] h-[300px] rounded-full bg-fuchsia-900/10 blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm font-medium text-purple-300 mb-5">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        Pourquoi Shootix ?
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
                        La gestion de studio,<br />
                        <span className="gradient-text">enfin simple</span>
                    </h2>
                    <p className="text-muted text-lg leading-relaxed max-w-2xl mx-auto">
                        Shootix est conçu pour les créatifs qui veulent piloter leur business sans être comptables. Un outil pensé pour la réalité des studios photo & vidéo en Tunisie.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {benefits.map((b, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group flex flex-col gap-4 p-6 rounded-2xl glass hover:bg-white/5 transition-all duration-300 cursor-default text-center"
                            style={{ border: `1px solid ${b.color}15` }}
                        >
                            <div
                                className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center"
                                style={{ background: `${b.color}18`, border: `1px solid ${b.color}30` }}
                            >
                                <b.icon size={22} style={{ color: b.color }} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1.5">{b.title}</h4>
                                <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
