import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { X, Loader2, CheckCircle2, AlertCircle, User, Mail, Building2, Phone } from 'lucide-react'
import { EMAILJS_CONFIG } from '../emailjs.config'

export default function SignupModal({ isOpen, onClose }) {
    const formRef = useRef()
    const [status, setStatus] = useState('idle') // idle | loading | success | error
    const [form, setForm] = useState({ name: '', email: '', studio: '', phone: '' })

    const formatTunisianPhone = (raw) => {
        // Strip everything except digits
        const digits = raw.replace(/\D/g, '').slice(0, 8)
        // Format as XX XXX XXX
        if (digits.length <= 2) return digits
        if (digits.length <= 5) return `${digits.slice(0, 2)} ${digits.slice(2)}`
        return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        if (name === 'phone') {
            setForm({ ...form, phone: formatTunisianPhone(value) })
        } else {
            setForm({ ...form, [name]: value })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Custom phone validation: must have 8 digits
        const digits = form.phone.replace(/\D/g, '')
        if (digits.length !== 8) {
            setStatus('phone_error')
            return
        }
        setStatus('loading')

        const templateParams = {
            from_name: form.name,
            from_email: form.email,
            studio_name: form.studio,
            phone: form.phone ? `+216 ${form.phone}` : '',
            signup_date: new Date().toLocaleString('fr-TN', { dateStyle: 'full', timeStyle: 'short' }),
        }

        try {
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            )
            setStatus('success')
            setForm({ name: '', email: '', studio: '', phone: '' })
        } catch (err) {
            console.error('EmailJS error:', err)
            setStatus('error')
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full max-w-md bg-[#0d1119] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative">
                            {/* Top gradient line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full glass text-muted hover:text-white hover:bg-white/10 transition-all"
                            >
                                <X size={16} />
                            </button>

                            <div className="p-8">
                                {/* Header */}
                                <div className="mb-7 text-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[11px] font-bold text-violet-400 uppercase tracking-widest mb-4">
                                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                                        Essai gratuit — 15 jours
                                    </div>
                                    <h2 className="text-2xl font-black text-white mb-2">Commencez maintenant</h2>
                                    <p className="text-muted text-sm">
                                        Remplissez ce formulaire et recevrez vos identifiants par email sous 24h.
                                    </p>
                                </div>

                                {status === 'success' ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 size={32} className="text-green-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Inscription reçue !</h3>
                                        <p className="text-muted text-sm leading-relaxed">
                                            Vos identifiants de connexion vous seront envoyés à <strong className="text-white">{form.email || 'votre adresse email'}</strong> dans les 24 heures.
                                        </p>
                                        <div className="flex flex-col gap-2 mt-6">
                                            <button
                                                onClick={onClose}
                                                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:scale-105 transition-transform"
                                            >
                                                Fermer
                                            </button>
                                            <button
                                                onClick={() => setStatus('idle')}
                                                className="px-6 py-2 rounded-xl text-xs font-medium text-muted hover:text-white transition-colors"
                                            >
                                                ↩ Corriger mes informations
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                        {/* Name */}
                                        <div>
                                            <label className="block text-xs font-semibold text-muted mb-1.5">Nom complet *</label>
                                            <div className="relative">
                                                <User size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted/60" />
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Ahmed Ben Ali"
                                                    className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-muted/40 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-xs font-semibold text-muted mb-1.5">Email professionnel *</label>
                                            <div className="relative">
                                                <Mail size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted/60" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={form.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="ahmed@monstudio.tn"
                                                    className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-muted/40 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Studio */}
                                        <div>
                                            <label className="block text-xs font-semibold text-muted mb-1.5">Nom du studio</label>
                                            <div className="relative">
                                                <Building2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted/60" />
                                                <input
                                                    type="text"
                                                    name="studio"
                                                    value={form.studio}
                                                    onChange={handleChange}
                                                    placeholder="Studio Nova"
                                                    className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm placeholder-muted/40 focus:outline-none focus:border-violet-500/50 focus:bg-violet-500/5 transition-all"
                                                />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-xs font-semibold text-muted mb-1.5">Numéro de téléphone *</label>
                                            <div className="relative flex items-center">
                                                <div className="absolute left-3 flex items-center gap-1.5 pointer-events-none">
                                                    <Phone size={13} className="text-muted/60" />
                                                    <span className="text-muted/60 text-sm font-medium">+216</span>
                                                    <span className="text-white/10">|</span>
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={(e) => { setStatus('idle'); handleChange(e) }}
                                                    placeholder="XX XXX XXX"
                                                    maxLength={10}
                                                    required
                                                    className={`w-full pl-[4.5rem] pr-4 py-3 rounded-xl bg-white/5 border text-white text-sm placeholder-muted/40 focus:outline-none focus:bg-violet-500/5 transition-all tracking-wide ${status === 'phone_error'
                                                            ? 'border-red-500/60 focus:border-red-500/60'
                                                            : 'border-white/10 focus:border-violet-500/50'
                                                        }`}
                                                />
                                            </div>
                                            {status === 'phone_error' && (
                                                <p className="text-red-400 text-[11px] mt-1.5 flex items-center gap-1">
                                                    <AlertCircle size={11} />
                                                    Le numéro doit contenir exactement 8 chiffres.
                                                </p>
                                            )}
                                        </div>

                                        {status === 'error' && (
                                            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                                <AlertCircle size={14} />
                                                Une erreur s'est produite. Réessayez ou contactez-nous directement.
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-violet-500/20 disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2 mt-2"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 size={16} className="animate-spin" />
                                                    Envoi en cours…
                                                </>
                                            ) : (
                                                'Démarrer mon essai gratuit'
                                            )}
                                        </button>

                                        <p className="text-[11px] text-subtle text-center">
                                            Vos données restent confidentielles. Aucun paiement requis.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
