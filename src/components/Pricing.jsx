import { motion } from 'framer-motion'
import { Check, Sparkles, Download, ShieldCheck, Zap } from 'lucide-react'

export default function Pricing({ onSignup }) {
    const features = [
        '15 jours d\'essai gratuit complet',
        'Licence à vie (Achat unique)',
        'Application Desktop (Mac & Windows)',
        'Gestion illimitée (Clients, Factures, Devis)',
        'TVA 19% & Conformité Tunisienne',
        'Suivi de rentabilité & Freelances',
        'Mises à jour gratuites incluses',
        'Fonctionnalités sur mesure (Sur devis)',
    ]

    return (
        <section id="pricing" className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 text-sm font-medium text-violet-300 mb-5">
                        <Sparkles size={13} className="text-violet-400" />
                        Offre de lancement
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-5">
                        Un investissement unique pour<br />
                        <span className="gradient-text">votre succès durable</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Pas d'abonnement mensuel. Payez une fois, possédez-le pour toujours.
                        Profitez de 15 jours d'essai pour valider votre choix.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-[2.5rem] p-1 shadow-2xl overflow-hidden bg-gradient-to-br from-violet-500/30 via-transparent to-indigo-500/20 border border-white/5"
                    >
                        <div className="absolute inset-0 bg-night/80 backdrop-blur-3xl rounded-[2.4rem] -z-10" />

                        <div className="grid md:grid-cols-2">
                            {/* Left Side: Info */}
                            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-bold text-violet-400 uppercase tracking-widest mb-6">
                                    <ShieldCheck size={12} />
                                    Licence à vie
                                </div>

                                <h3 className="text-3xl font-black text-white mb-4">Pack Studio Pro</h3>
                                <p className="text-muted text-sm leading-relaxed mb-8">
                                    La solution complète pour les photographes et studios en Tunisie.
                                    Installez l'app sur votre ordinateur et gérez tout localement.
                                </p>

                                <div className="space-y-4 mb-8">
                                    {features.map((feat, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm">
                                            <div className="w-5 h-5 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20">
                                                <Check size={12} className="text-violet-400" />
                                            </div>
                                            <span className="text-muted/80">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Pricing & CTA */}
                            <div className="p-8 md:p-12 flex flex-col justify-center bg-white/[0.02]">
                                <div className="text-center mb-10">
                                    <div className="text-muted text-xs font-semibold uppercase tracking-widest mb-2">Prix de lancement</div>
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <span className="text-6xl font-black text-white">699</span>
                                        <div className="text-left">
                                            <div className="text-2xl font-bold text-white">DT</div>
                                            <div className="text-violet-400 text-xs font-bold -mt-1">Paiement unique</div>
                                        </div>
                                    </div>
                                    <p className="text-subtle text-xs">Accès immédiat • Mises à jour incluses</p>
                                </div>

                                <div className="space-y-4">
                                    <a
                                        href="/shootix_macos.dmg"
                                        download
                                        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-violet-500/20"
                                    >
                                        <Download size={18} />
                                        Télécharger pour macOS
                                    </a>
                                    <a
                                        href="/shootix_windows.exe"
                                        download
                                        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-violet-500/20"
                                    >
                                        <Download size={18} />
                                        Télécharger pour Windows
                                    </a>

                                    <button
                                        onClick={onSignup}
                                        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl glass border border-white/10 text-white font-bold hover:bg-white/5 transition-all duration-300"
                                    >
                                        S'inscrire pour l'essai (15j)
                                    </button>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/5 text-center">
                                    <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-muted">
                                        <Zap size={12} className="text-yellow-500" />
                                        <span>Besoin d'un module spécifique ?</span>
                                    </div>
                                    <p className="text-[10px] text-subtle mt-1 px-4">
                                        Nous développons vos fonctionnalités sur mesure par devis pour adapter Shootix à votre flux unique.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
