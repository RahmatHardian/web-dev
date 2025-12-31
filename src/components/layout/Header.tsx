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
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-heading text-2xl font-bold text-primary-600"
          >
            nikah.in
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary-600"
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
            >
              Konsultasi Gratis
            </WhatsAppLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
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
          <nav className="border-t border-gray-200 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-base font-medium text-gray-700 transition-colors hover:text-primary-600"
                >
                  {link.label}
                </button>
              ))}
              <WhatsAppLink
                message={WHATSAPP_MESSAGES.consultation}
                buttonSize="md"
                className="w-full"
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
