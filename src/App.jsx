import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WhyShootix from './components/WhyShootix'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-night text-white">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <WhyShootix />
                <Testimonials />
                <Pricing />
                <CTABanner />
            </main>
            <Footer />
        </div>
    )
}
