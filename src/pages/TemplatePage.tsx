import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowLeft, Eye } from 'lucide-react'
import { TemplateProvider, TemplateLayout } from '../components/templates'
import { getTemplateConfig } from '../data/templates'
import type { GuestInfo } from '../types/template'

interface TemplatePageProps {
  mode: 'preview' | 'live'
}

export const TemplatePage = ({ mode }: TemplatePageProps) => {
  const { templateId, weddingSlug } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  // Get template config based on mode
  const configId = mode === 'preview' ? templateId : weddingSlug
  const config = configId ? getTemplateConfig(configId) : null

  // Parse guest info from URL params
  const guestName = searchParams.get('to')
  const guest: GuestInfo | null = guestName
    ? { name: decodeURIComponent(guestName) }
    : null

  // Handle missing config
  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Template tidak ditemukan
          </h1>
          <p className="text-gray-600 mb-6">
            Template yang Anda cari tidak tersedia.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </button>
        </div>
      </div>
    )
  }

  const pageTitle = mode === 'preview'
    ? `Preview: ${config.meta.templateName} | nikah.in`
    : `${config.couple.groom.nickname} & ${config.couple.bride.nickname} | Undangan Pernikahan`

  const pageDescription = mode === 'preview'
    ? `Preview template undangan digital ${config.meta.templateName}`
    : `Anda diundang ke pernikahan ${config.couple.groom.fullName} & ${config.couple.bride.fullName}`

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {config.meta.openGraphImage && (
          <meta property="og:image" content={config.meta.openGraphImage} />
        )}
      </Helmet>

      {/* Preview mode banner */}
      {mode === 'preview' && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 bg-accent text-white py-2 px-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5" />
              <span className="text-sm font-medium">
                Mode Preview - {config.meta.templateName}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="text-sm text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali
              </button>
              <a
                href="/#designs"
                className="text-sm bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full transition-colors"
              >
                Lihat Desain Lain
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* Template content */}
      <div className={mode === 'preview' ? 'pt-10' : ''}>
        <TemplateProvider config={config} guest={guest}>
          <TemplateLayout />
        </TemplateProvider>
      </div>
    </>
  )
}

export default TemplatePage
