import { motion } from 'framer-motion'
import { Check, Sparkles, Download, ShieldCheck, Zap, Gift } from 'lucide-react'

export default function Pricing({ onSignup }) {
    const trialFeatures = [
        '15 jours d\'essai complet',
        'Toutes les fonctionnalités incluses',
        'Application Desktop (Mac & Windows)',
        'Aucune carte bancaire requise',
        'Support par email inclus',
    ]

    const proFeatures = [
        'Licence à vie (Achat unique)',
        'Application Desktop (Mac & Windows)',
        'Gestion illimitée (Clients, Factures, Devis)',
        'TVA 19% & Conformité Tunisienne',
        'Suivi de rentabilité & Freelances',
        'Mises à jour gratuites incluses',
        'Fonctionnalités sur mesure (Sur devis)',
    ]

    return (
        <section id="pricing" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-10">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-violet-500/20 text-xs font-medium text-violet-300 mb-3">
                        <Sparkles size={11} className="text-violet-400" />
                        Offre de lancement
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-black mb-3">
                        Commencez gratuitement,{' '}
                        <span className="gradient-text">possédez-le pour toujours</span>
                    </h2>
                    <p className="text-muted text-sm max-w-xl mx-auto">
                        15 jours d'essai sans engagement. Un seul paiement pour un accès à vie.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid lg:grid-cols-2 gap-5 max-w-4xl mx-auto">

                    {/* Card 1: Free Trial */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="glass rounded-2xl p-6 border border-white/10 flex flex-col"
                    >
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-bold text-green-400 uppercase tracking-widest mb-4 self-start">
                            <Gift size={10} />
                            Essai Gratuit
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-black text-white">15 Jours Gratuits</h3>
                            <p className="text-muted text-xs leading-relaxed mt-1">Toutes les fonctionnalités, sans carte bancaire.</p>
                        </div>

                        <div className="mb-4">
                            <div className="text-4xl font-black text-white">0 <span className="text-xl font-bold">DT</span></div>
                            <div className="text-green-400 text-[11px] font-bold mt-0.5">Aucune carte bancaire</div>
                        </div>

                        <div className="space-y-2 mb-5 flex-1">
                            {trialFeatures.map((feat, i) => (
                                <div key={i} className="flex items-center gap-2.5 text-xs">
                                    <div className="w-4 h-4 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20 flex-shrink-0">
                                        <Check size={9} className="text-green-400" />
                                    </div>
                                    <span className="text-muted/80">{feat}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={onSignup}
                            className="w-full py-3 rounded-xl border border-green-500/30 bg-green-500/10 text-green-300 text-sm font-bold hover:bg-green-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                        >
                            Démarrer l'essai gratuit
                        </button>
                    </motion.div>

                    {/* Card 2: Paid Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-2xl p-[1px] shadow-2xl overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.5), rgba(79,70,229,0.1))' }}
                    >
                        <div className="absolute top-4 right-4 z-10 px-2.5 py-0.5 rounded-full bg-violet-500 text-white text-[9px] font-black uppercase tracking-wider shadow-lg shadow-violet-500/30">
                            Recommandé
                        </div>

                        <div className="bg-[#0d1119] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[10px] font-bold text-violet-400 uppercase tracking-widest mb-4 self-start">
                                <ShieldCheck size={10} />
                                Licence à vie
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-black text-white">Pack Studio Pro</h3>
                                <p className="text-muted text-xs leading-relaxed mt-1">Payez une fois, gérez votre studio pour toujours.</p>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-end gap-1.5">
                                    <div className="text-4xl font-black text-white">699</div>
                                    <div className="mb-1">
                                        <div className="text-xl font-bold text-white">DT</div>
                                        <div className="text-violet-400 text-[10px] font-bold -mt-0.5">Paiement unique</div>
                                    </div>
                                </div>
                                <p className="text-subtle text-[11px] mt-0.5">Accès immédiat • Mises à jour incluses</p>
                            </div>

                            <div className="space-y-2 mb-4 flex-1">
                                {proFeatures.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-xs">
                                        <div className="w-4 h-4 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20 flex-shrink-0">
                                            <Check size={9} className="text-violet-400" />
                                        </div>
                                        <span className="text-muted/80">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-2">
                                <a
                                    href="/shootix_macos.dmg"
                                    download
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-violet-500/20"
                                >
                                    <Download size={14} />
                                    Télécharger pour macOS
                                </a>
                                <a
                                    href="/shootix_windows.exe"
                                    download
                                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl glass border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-all duration-300"
                                >
                                    <Download size={14} />
                                    Télécharger pour Windows
                                </a>
                            </div>

                            <div className="mt-4 pt-4 border-t border-white/5 text-center">
                                <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-muted">
                                    <Zap size={10} className="text-yellow-500" />
                                    <span>Besoin d'un module spécifique ? <span className="text-violet-400 font-semibold">Contactez-nous</span></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
