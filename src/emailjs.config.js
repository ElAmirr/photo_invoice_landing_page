// =====================================================================
//  EmailJS Configuration
//  Follow these 3 steps to activate email sending:
//  1. Sign up at https://www.emailjs.com (free: 200 emails/month)
//  2. Connect your Gmail and create an email template
//  3. Paste your Service ID, Template ID, and Public Key below
// =====================================================================

export const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_bwg8v4l',   // e.g. 'service_abc123'
    TEMPLATE_ID: 'template_kn2ztqe',  // e.g. 'template_xyz789'
    PUBLIC_KEY: 'DPozOrgTitkxNFquj',   // e.g. 'xKj3dF...'
}

// =====================================================================
//  Email template variables to set up on emailjs.com dashboard:
//
//  Subject: "🚀 Nouvelle inscription Shootix — {{from_name}}"
//  Body:
//    Nouveau client inscrit pour l'essai gratuit !
//
//    Nom       : {{from_name}}
//    Email     : {{from_email}}
//    Studio    : {{studio_name}}
//    Téléphone : {{phone}}
//    Date      : {{signup_date}}
//
//    → Envoyer les identifiants de connexion à {{from_email}}
// =====================================================================
