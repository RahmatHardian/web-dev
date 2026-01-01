import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollToSection } from '../../hooks'
import { NAV_LINKS } from '../../utils/constants'
import { WHATSAPP_MESSAGES } from '../../utils/whatsapp'
import { WhatsAppLink } from '../features/WhatsAppLink'
import { clsx } from 'clsx'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollToSection } = useScrollToSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '')
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Layer 1: Distortion Effect (SVG filter) */}
      <div
        className={clsx(
          'absolute inset-0 transition-opacity duration-500',
          isScrolled ? 'opacity-100' : 'opacity-0'
        )}
        style={{ filter: 'url(#liquid-glass-navbar)' }}
        aria-hidden="true"
      />

      {/* Layer 2: Frosted Glass Background (neutral/light tint) */}
      <div
        className={clsx(
          'absolute inset-0 transition-all duration-300',
          isScrolled
            ? 'bg-white/10 backdrop-blur-sm'
            : 'bg-transparent'
        )}
        style={{
          WebkitBackdropFilter: isScrolled ? 'blur(8px) saturate(120%)' : 'none',
          backdropFilter: isScrolled ? 'blur(8px) saturate(120%)' : 'none',
        }}
        aria-hidden="true"
      />

      {/* Layer 3: Specular Highlight Border */}
      <div
        className={clsx(
          'absolute inset-0 pointer-events-none transition-opacity duration-300',
          isScrolled ? 'opacity-100' : 'opacity-0'
        )}
        style={{
          boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.3), inset 0 -1px 0 0 rgba(0,0,0,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
        }}
        aria-hidden="true"
      />

      {/* Layer 4: Content */}
      <div className="relative z-10 container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-heading text-2xl font-bold text-primary transition-colors hover:text-gold-light"
          >
            nikah.in
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white font-medium transition-colors hover:text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <WhatsAppLink
              message={WHATSAPP_MESSAGES.consultation}
              buttonSize="sm"
              className="btn-primary"
            >
              Konsultasi Gratis
            </WhatsAppLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-white-soft hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="border-t border-border-light py-4 lg:hidden bg-accent/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-white-soft transition-colors hover:text-primary"
                >
                  {link.label}
                </button>
              ))}
              <WhatsAppLink
                message={WHATSAPP_MESSAGES.consultation}
                buttonSize="md"
                className="w-full btn-primary"
              >
                Konsultasi Gratis
              </WhatsAppLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
