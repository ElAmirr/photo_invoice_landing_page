import { Camera, Instagram, Twitter, Linkedin, Globe, Mail, Phone } from 'lucide-react'

const links = {
    Produit: ['Fonctionnalités', 'Tarifs', 'Témoignages', 'Changelog'],
    Ressources: ['Documentation', 'Guide de démarrage', 'Blog', "Centre d'aide"],
    Légal: ['Conditions d\'utilisation', 'Politique de confidentialité', 'Mentions légales'],
}

export default function Footer() {
    return (
        <footer className="border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <a href="#" className="flex items-center gap-2.5 mb-5 group">
                            <img src="/logo.png" alt="Shootix Logo" className="w-12 h-12 object-contain" />
                            <div>
                                <span className="text-xl font-black tracking-tight gradient-text">SHOOTIX</span>
                            </div>
                        </a>
                        <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
                            La plateforme tout-en-un conçue pour les photographes et vidéastes professionnels en Tunisie. Gérez votre studio avec élégance.
                        </p>

                        {/* Contact */}
                        <div className="space-y-2 mb-6">
                            <a href="https://shootix.tn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-violet-400 text-sm transition-colors group">
                                <Globe size={14} className="group-hover:text-violet-400" />
                                shootix.tn
                            </a>
                            <a href="mailto:contact@shootix.tn" className="flex items-center gap-2 text-muted hover:text-violet-400 text-sm transition-colors group">
                                <Mail size={14} />
                                contact@shootix.tn
                            </a>
                            <a href="tel:+216XX000000" className="flex items-center gap-2 text-muted hover:text-violet-400 text-sm transition-colors group">
                                <Phone size={14} />
                                +216 23 361 135
                            </a>
                        </div>

                        {/* Social */}
                        <div className="flex items-center gap-3">
                            {[
                                { icon: Instagram, href: '#', label: 'Instagram' },
                                { icon: Twitter, href: '#', label: 'Twitter' },
                                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 border border-white/5"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([section, items]) => (
                        <div key={section}>
                            <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
                            <ul className="space-y-3">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-muted hover:text-white text-sm transition-colors duration-200 hover:translate-x-0.5 inline-block">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
                    <span>© 2026 Shootix — Gestion de Studio Photo & Vidéo. Tous droits réservés.</span>
                    <div className="flex items-center gap-1">
                        Conçu avec
                        <span className="text-red-400 mx-1">❤</span>
                        en Tunisie ·
                        <a href="https://shootix.tn" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300 transition-colors ml-1">
                            shootix.tn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
