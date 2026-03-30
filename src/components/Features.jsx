import { motion } from 'framer-motion'
import { FileText, Calendar, Users, UserCheck, TrendingUp, FileDown } from 'lucide-react'

const features = [
    {
        icon: FileText,
        title: 'Facturation Intelligente',
        desc: 'Générez des devis et factures professionnelles avec TVA 19% calculée automatiquement. Suivez les paiements, acomptes et impayés en temps réel.',
        color: '#9333EA',
        tag: 'TVA 19% incluse',
    },
    {
        icon: Calendar,
        title: 'Calendrier de Shooting',
        desc: 'Planifiez vos sessions photo et vidéo sur un calendrier interactif. Vue mois/année, notifications et gestion des conflits de planning.',
        color: '#8b5cf6',
        tag: 'Vue mois / année',
    },
    {
        icon: Users,
        title: 'Gestion Clients (CRM)',
        desc: 'Centralisez tous vos clients, leurs coordonnées, matricules fiscales et historiques de commandes. Recherchez et filtrez en un instant.',
        color: '#06b6d4',
        tag: 'CRM intégré',
    },
    {
        icon: UserCheck,
        title: 'Suivi des Freelances',
        desc: 'Gérez vos collaborateurs : paiements, acomptes et soldes. Calculez précisément ce qui leur est dû après chaque prestation.',
        color: '#f59e0b',
        tag: 'Paiements & acomptes',
    },
    {
        icon: TrendingUp,
        title: 'Rentabilité en Temps Réel',
        desc: 'Visualisez votre bénéfice net instantanément : revenus encaissés moins frais freelances. Pilotez votre studio avec des données fiables.',
        color: '#10b981',
        tag: 'Bénéfice net calculé',
    },
    {
        icon: FileDown,
        title: 'PDFs Professionnels',
        desc: 'Exportez vos devis et factures en PDF haute qualité prêts à envoyer à vos clients. Logo, coordonnées, TVA — tout est formaté impeccablement.',
        color: '#ef4444',
        tag: 'Génération instantanée',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Features() {
    return (
        <section id="features" className="relative py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm font-medium text-purple-300 mb-5">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        Fonctionnalités
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-5">
                        Tout ce dont votre<br />
                        <span className="gradient-text">studio a besoin</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Une suite d'outils conçue spécifiquement pour les photographes et vidéastes professionnels en Tunisie.
                    </p>
                </motion.div>

                {/* Features grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {features.map((feat, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="group glass rounded-2xl p-7 cursor-default relative overflow-hidden transition-all duration-300"
                            style={{ border: `1px solid ${feat.color}18` }}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                style={{ background: `radial-gradient(circle at 50% 0%, ${feat.color}08, transparent 70%)` }}
                            />

                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative"
                                style={{ background: `${feat.color}18`, border: `1px solid ${feat.color}30` }}
                            >
                                <feat.icon size={22} style={{ color: feat.color }} />
                            </div>

                            {/* Tag */}
                            <div
                                className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-semibold mb-3"
                                style={{ background: `${feat.color}15`, color: feat.color }}
                            >
                                {feat.tag}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">{feat.desc}</p>

                            {/* Bottom accent */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(90deg, transparent, ${feat.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
