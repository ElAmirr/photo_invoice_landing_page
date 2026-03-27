import { motion } from 'framer-motion'
import { Check, Sparkles, Zap } from 'lucide-react'

const plans = [
    {
        name: 'Starter',
        price: 'Gratuit',
        period: '14 jours d\'essai',
        desc: 'Découvrez Shootix sans engagement. Idéal pour tester toutes les fonctionnalités.',
        color: '#6C63FF',
        features: [
            '3 clients maximum',
            '5 devis / mois',
            '5 factures / mois',
            'Calendrier de shooting',
            'Export PDF basique',
            'Support email',
        ],
        cta: 'Commencer gratuitement',
        highlighted: false,
    },
    {
        name: 'Pro',
        price: '29 DT',
        period: '/ mois HT',
        desc: 'La solution complète pour les photographes professionnels actifs.',
        color: '#6C63FF',
        features: [
            'Clients illimités',
            'Devis & factures illimités',
            'TVA 19% automatique',
            'Suivi freelances avancé',
            'Rentabilité en temps réel',
            'PDFs professionnels',
            'Calendrier interactif',
            'Support prioritaire',
        ],
        cta: 'Choisir Pro',
        highlighted: true,
    },
    {
        name: 'Studio',
        price: '59 DT',
        period: '/ mois HT',
        desc: 'Pour les studios avec plusieurs photographes et un fort volume d\'activité.',
        color: '#8b5cf6',
        features: [
            'Tout ce qui est dans Pro',
            '3 utilisateurs inclus',
            'Tableau de bord multi-studio',
            'Rapports avancés',
            'API access',
            'Onboarding dédié',
            'SLA garanti',
        ],
        cta: 'Contacter l\'équipe',
        highlighted: false,
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-900/10 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 text-sm font-medium text-violet-300 mb-5">
                        <Sparkles size={13} className="text-violet-400" />
                        Tarifs transparents
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-5">
                        Un prix juste pour<br />
                        <span className="gradient-text">chaque étape</span>
                    </h2>
                    <p className="text-muted text-lg max-w-xl mx-auto">
                        Commencez gratuitement. Passez au plan supérieur quand vous en avez besoin.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className={`relative rounded-2xl p-8 transition-all duration-300 ${plan.highlighted
                                    ? 'bg-gradient-to-br from-violet-600/20 to-indigo-700/20 border border-violet-500/40 glow-violet scale-105'
                                    : 'glass border border-white/8'
                                }`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-xs font-bold text-white shadow-lg">
                                    <Zap size={11} className="fill-white" />
                                    Recommandé
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                                <p className="text-muted text-sm mb-4">{plan.desc}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-white">{plan.price}</span>
                                    <span className="text-muted text-sm">{plan.period}</span>
                                </div>
                            </div>

                            <a
                                href="#"
                                className={`block w-full py-3 rounded-xl text-center text-sm font-semibold transition-all duration-300 mb-7 ${plan.highlighted
                                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 glow-sm'
                                        : 'glass text-white hover:bg-white/10 border border-white/10'
                                    }`}
                            >
                                {plan.cta}
                            </a>

                            <div className="space-y-3">
                                {plan.features.map((feat, j) => (
                                    <div key={j} className="flex items-center gap-3 text-sm">
                                        <div
                                            className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center"
                                            style={{ background: `${plan.color}20` }}
                                        >
                                            <Check size={11} style={{ color: plan.color }} />
                                        </div>
                                        <span className="text-muted">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
