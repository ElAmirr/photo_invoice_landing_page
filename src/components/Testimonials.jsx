import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Ahmed Mansouri',
        role: 'Photographe indépendant, Tunis',
        text: 'Shootix a transformé ma façon de gérer mon activité. En 3 clics, je génère une facture avec la TVA — ce qui me prenait 30 minutes avant prend maintenant 30 secondes.',
        avatar: 'AM',
        stars: 5,
        color: '#6C63FF',
    },
    {
        name: 'Salma Benhali',
        role: 'Studio Lumière, Sfax',
        text: 'Le calendrier de shooting est incroyable. Je visualise toute mon activité d\'un coup d\'œil et je ne rate plus aucun shooting. Mes clients sont impressionnés par mes devis PDF.',
        avatar: 'SB',
        stars: 5,
        color: '#8b5cf6',
    },
    {
        name: 'Karim Dridi',
        role: 'Vidéaste corporate, Sousse',
        text: 'Enfin un outil conçu pour la Tunisie ! La gestion des freelances et le calcul du bénéfice net m\'ont fait économiser des heures chaque semaine. Je recommande à tous mes collègues.',
        avatar: 'KD',
        stars: 5,
        color: '#10b981',
    },
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-1/4 top-1/2 w-[400px] h-[400px] rounded-full bg-violet-900/10 blur-[100px]" />
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
                        <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                        Témoignages
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black mb-5">
                        Ce que disent nos<br />
                        <span className="gradient-text">photographes</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ y: -4 }}
                            className="glass rounded-2xl p-7 relative overflow-hidden group transition-all duration-300"
                            style={{ border: `1px solid ${t.color}18` }}
                        >
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

                            <Quote size={28} className="mb-4 opacity-30" style={{ color: t.color }} />

                            <p className="text-muted text-sm leading-relaxed mb-6">"{t.text}"</p>

                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                                >
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">{t.name}</div>
                                    <div className="text-muted text-xs">{t.role}</div>
                                </div>
                                <div className="ml-auto text-yellow-400 text-xs">
                                    {'★'.repeat(t.stars)}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
