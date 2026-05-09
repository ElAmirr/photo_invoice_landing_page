import { motion } from 'framer-motion'
import {
    FileText, Camera, Users, UserCheck, TrendingUp, FileDown, Wallet, Building, LayoutDashboard
} from 'lucide-react'

const features = [
    {
        icon: LayoutDashboard,
        title: 'Tableau de Bord Financier',
        desc: 'Vue d\'ensemble en temps réel : encaissements entreprises & particuliers, bénéfice net TTC, TVA à payer et paiements en attente. Filtrez par mois, trimestre ou année.',
        color: '#9333EA',
        tag: 'Temps réel',
    },
    {
        icon: FileText,
        title: 'Factures & Devis Professionnels',
        desc: 'Créez devis et factures numérotés automatiquement avec TVA 19% calculée. Suivez les acomptes, règlements partiels et impayés par client.',
        color: '#8b5cf6',
        tag: 'TVA 19% incluse',
    },
    {
        icon: Camera,
        title: 'Gestion des Shootings',
        desc: 'Planifiez vos séances photo et vidéo, assignez vos coéquipiers, fixez les tarifs et suivez les règlements de chaque shooting. Vue calendrier intégrée.',
        color: '#06b6d4',
        tag: 'Calendrier & Suivi',
    },
    {
        icon: Users,
        title: 'CRM Clients',
        desc: 'Centralisez tous vos clients avec leurs coordonnées, matricules fiscales et historique complet de commandes. Recherche et filtres instantanés.',
        color: '#10b981',
        tag: 'CRM intégré',
    },
    {
        icon: UserCheck,
        title: 'Gestion de l\'Équipe',
        desc: 'Gérez vos coéquipiers : montant convenu, acomptes versés et solde restant dû après chaque prestation. Règlements calculés automatiquement.',
        color: '#f59e0b',
        tag: 'Règlements auto',
    },
    {
        icon: Wallet,
        title: 'Gestion des Dépenses',
        desc: 'Suivez toutes vos charges (loyer, matériel, abonnements). Le bénéfice net est toujours calculé après déduction de vos frais réels.',
        color: '#f97316',
        tag: 'Charges & Rentabilité',
    },
    {
        icon: Building,
        title: 'Paramètres Société',
        desc: 'Configurez votre logo, coordonnées, matricule fiscale et RIB. Ces informations s\'appliquent automatiquement à tous vos documents PDF.',
        color: '#64748b',
        tag: 'PDF personnalisé',
    },
    {
        icon: FileDown,
        title: 'PDF Téléchargeables',
        desc: 'Générez et téléchargez vos devis et factures en PDF haute qualité. Logo, TVA 19%, coordonnées completes — prêts à envoyer à vos clients en un clic.',
        color: '#ef4444',
        tag: 'Téléchargement instantané',
    },
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Features() {
    return (
        <section id="features" className="relative py-24 overflow-hidden">
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
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-sm font-medium text-purple-300 mb-5">
                        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                        Fonctionnalités
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-4">
                        Tout ce dont votre<br />
                        <span className="gradient-text">studio a besoin</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        8 modules conçus spécifiquement pour les photographes et vidéastes professionnels en Tunisie.
                    </p>
                </motion.div>

                {/* Features grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {features.map((feat, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="group glass rounded-2xl p-6 cursor-default relative overflow-hidden transition-all duration-300"
                            style={{ border: `1px solid ${feat.color}18` }}
                        >
                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                style={{ background: `radial-gradient(circle at 50% 0%, ${feat.color}08, transparent 70%)` }}
                            />

                            {/* Icon */}
                            <div
                                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative"
                                style={{ background: `${feat.color}18`, border: `1px solid ${feat.color}30` }}
                            >
                                <feat.icon size={20} style={{ color: feat.color }} />
                            </div>

                            {/* Tag */}
                            <div
                                className="inline-block px-2 py-0.5 rounded-lg text-[10px] font-semibold mb-2.5"
                                style={{ background: `${feat.color}15`, color: feat.color }}
                            >
                                {feat.tag}
                            </div>

                            <h3 className="text-sm font-bold text-white mb-2">{feat.title}</h3>
                            <p className="text-muted text-xs leading-relaxed">{feat.desc}</p>

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
