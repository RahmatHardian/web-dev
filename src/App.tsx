import { HelmetProvider, Helmet } from 'react-helmet-async'
import { Header, Footer, StickyWhatsAppButton } from '@components/layout'
import {
  HeroSection,
  TrustIndicators,
  DesignPreview,
  FeaturesSection,
  HowItWorks,
  PricingSection,
  Testimonials,
  FinalCTA,
} from '@components/sections'
import { SEO_CONFIG } from '@utils/constants'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{SEO_CONFIG.title}</title>
        <meta name="description" content={SEO_CONFIG.description} />
        <meta name="keywords" content={SEO_CONFIG.keywords.join(', ')} />

        {/* Open Graph */}
        <meta property="og:title" content={SEO_CONFIG.title} />
        <meta property="og:description" content={SEO_CONFIG.description} />
        <meta property="og:image" content={SEO_CONFIG.image} />
        <meta property="og:url" content={SEO_CONFIG.url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={SEO_CONFIG.locale} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SEO_CONFIG.title} />
        <meta name="twitter:description" content={SEO_CONFIG.description} />
        <meta name="twitter:image" content={SEO_CONFIG.image} />

        {/* Additional */}
        <link rel="canonical" href={SEO_CONFIG.url} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="nikah.in" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          <HeroSection />
          <TrustIndicators />
          <DesignPreview />
          <FeaturesSection />
          <HowItWorks />
          <PricingSection />
          <Testimonials />
          <FinalCTA />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sticky WhatsApp Button (Mobile Only) */}
        <StickyWhatsAppButton />
      </div>
    </HelmetProvider>
  )
}

export default App
