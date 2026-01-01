import { Instagram, MessageCircle } from 'lucide-react'
import { footerContent } from '../../data'
import { useScrollToSection } from '../../hooks'
import { SOCIAL_LINKS } from '../../utils/constants'

export const Footer = () => {
  const { scrollToSection } = useScrollToSection()

  return (
    <footer className="gradient-dark text-white-soft">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary">
              nikah.in
            </h3>
            <p className="mt-2 text-sm text-white-soft">{footerContent.tagline}</p>
            <div className="mt-4 flex gap-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-dark-blue p-2 text-blue-light transition-colors hover:bg-primary hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-dark-blue p-2 text-blue-light transition-colors hover:bg-primary hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold text-gold-light">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              {footerContent.links.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold text-gold-light">Legal</h4>
            <ul className="space-y-2 text-sm">
              {footerContent.legal.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-gold-light">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border-light pt-8 text-center text-sm">
          <p>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
