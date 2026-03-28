import { motion } from 'framer-motion'
import { ArrowRight, Camera } from 'lucide-react'

export default function CTABanner({ onSignup }) {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-3xl overflow-hidden p-12 text-center"
                    style={{
                        background: 'linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(79,70,229,0.15) 50%, rgba(30,22,55,0.9) 100%)',
                        border: '1px solid rgba(108,99,255,0.3)',
                    }}
                >
                    {/* Glow top */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
                    {/* Scattered orbs */}
                    <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-violet-600/10 blur-3xl" />
                    <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-indigo-600/10 blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-2.5 group mx-auto mb-6 justify-center">
                            <img src="/logo.png" alt="Shootix Logo" className="w-12 h-12 object-contain" />
                            <div>
                                <span className="text-xl font-black tracking-tight gradient-text">SHOOTIX</span>
                            </div>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-black mb-5">
                            Prêt à gérer votre studio<br />
                            <span className="gradient-text">comme un pro ?</span>
                        </h2>
                        <p className="text-muted text-lg max-w-xl mx-auto mb-8">
                            Rejoignez +200 photographes qui utilisent Shootix pour transformer leur passion en business profitable.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={onSignup}
                                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 glow-violet shadow-2xl"
                            >
                                Essai gratuit — 15 jours
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <a
                                href="https://shootix.tn"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold text-white glass hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                                Visiter shootix.tn
                            </a>
                        </div>

                        <p className="text-muted text-xs mt-5">Aucune carte bancaire requise · Annulable à tout moment</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
