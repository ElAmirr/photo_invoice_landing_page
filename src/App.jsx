import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyShootix from './components/WhyShootix'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import SignupModal from './components/SignupModal'

export default function App() {
    const [showSignup, setShowSignup] = useState(false)

    return (
        <div className="min-h-screen bg-night text-white">
            <Navbar onSignup={() => setShowSignup(true)} />
            <main>
                <Hero onSignup={() => setShowSignup(true)} />
                <Features />
                <WhyShootix />
                <Pricing onSignup={() => setShowSignup(true)} />
                <Testimonials />
                <CTABanner onSignup={() => setShowSignup(true)} />
            </main>
            <Footer />
            <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
        </div>
    )
}
