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
        'Suivi de rentabilité & Dépenses',
        'Gestion des Freelances',
        'Mises à jour gratuites incluses',
    ]

    return (
        <section id="pricing" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-10">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/15 blur-[120px]" />
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
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-purple-500/20 text-xs font-medium text-purple-300 mb-3">
                        <Sparkles size={11} className="text-purple-400" />
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
                <div className="grid lg:grid-cols-3 gap-5 max-w-6xl mx-auto">

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
                            className="w-full py-3 rounded-xl border border-green-500/30 bg-green-500/10 text-green-300 text-sm font-bold hover:bg-green-500/20 transition-all duration-300"
                        >
                            Démarrer l'essai
                        </button>
                    </motion.div>

                    {/* Card 2: Yearly Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="glass rounded-2xl p-6 border border-white/10 flex flex-col"
                    >
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-4 self-start">
                            <Zap size={10} />
                            Abonnement
                        </div>

                        <div className="mb-4">
                            <h3 className="text-xl font-black text-white">Pack Annuel</h3>
                            <p className="text-muted text-xs leading-relaxed mt-1">L'essentiel pour votre studio à petit prix.</p>
                        </div>

                        <div className="mb-4">
                            <div className="text-4xl font-black text-white">299 <span className="text-xl font-bold">DT</span></div>
                            <div className="text-blue-400 text-[11px] font-bold mt-0.5">Par an</div>
                        </div>

                        <div className="space-y-2 mb-5 flex-1">
                            {proFeatures.slice(1).map((feat, i) => (
                                <div key={i} className="flex items-center gap-2.5 text-xs">
                                    <div className="w-4 h-4 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 flex-shrink-0">
                                        <Check size={9} className="text-blue-400" />
                                    </div>
                                    <span className="text-muted/80">{feat}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={onSignup}
                            className="w-full py-3 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-bold hover:bg-blue-500/20 transition-all duration-300"
                        >
                            Choisir l'annuel
                        </button>
                    </motion.div>

                    {/* Card 3: Lifetime Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-2xl p-[1px] shadow-2xl overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, rgba(147,51,234,0.5), rgba(192,38,211,0.2))' }}
                    >
                        <div className="absolute top-4 right-4 z-10 px-2.5 py-0.5 rounded-full bg-fuchsia-600 text-white text-[9px] font-black uppercase tracking-wider shadow-lg shadow-fuchsia-500/30">
                            Meilleure Offre
                        </div>

                        <div className="bg-[#0d1119] rounded-[calc(1rem-1px)] p-6 h-full flex flex-col">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-4 self-start">
                                <ShieldCheck size={10} />
                                Licence à vie
                            </div>

                            <div className="mb-4">
                                <h3 className="text-xl font-black text-white">Pack Studio Pro</h3>
                                <p className="text-muted text-xs leading-relaxed mt-1">Payez une fois, possédez-le pour toujours.</p>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-baseline gap-2">
                                    <div className="text-4xl font-black text-white">549 DT</div>
                                    <div className="text-lg text-muted/50 line-through font-bold">699 DT</div>
                                </div>
                                <div className="text-fuchsia-400 text-[10px] font-bold mt-1 uppercase tracking-wider">
                                    Offre limitée jusqu'au 30 Mai
                                </div>
                            </div>

                            <div className="space-y-2 mb-4 flex-1">
                                {proFeatures.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-xs">
                                        <div className="w-4 h-4 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 flex-shrink-0">
                                            <Check size={9} className="text-purple-400" />
                                        </div>
                                        <span className="text-muted/80 font-medium">{feat}</span>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={onSignup}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-purple-500/20"
                            >
                                Choisir à vie
                            </button>
                        </div>
                    </motion.div>

                </div>
                {/* Download Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

                    <p className="text-muted text-sm mb-8">Téléchargez la dernière version de Shootix pour votre système.</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                        <a
                            href="https://drive.google.com/uc?export=download&id=1Esnv62q0czZRkc3sxMDLla7wOU1VpzIW"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 rounded-xl glass border border-white/10 text-white text-sm font-bold hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                        >
                            <Download size={16} className="text-purple-400 group-hover:scale-110 transition-transform" />
                            macOS (v1.0.5)
                        </a>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1Xy9M_UdFedjcUsF89aPDNmQUr7l-Dhuz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-3 rounded-xl glass border border-white/10 text-white text-sm font-bold hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
                        >
                            <Download size={16} className="text-blue-400 group-hover:scale-110 transition-transform" />
                            Windows (v1.0.5)
                        </a>
                    </div>

                    <p className="text-[10px] text-muted/50 mt-6 uppercase tracking-widest font-medium">
                        Compatible avec macOS 11+ & Windows 10+
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
