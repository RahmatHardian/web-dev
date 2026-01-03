import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, User, CheckCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useTemplateContext } from '../TemplateProvider'
import { TemplateSection } from '../common'
import { Button, Input } from '../../ui'

interface WishFormData {
  name: string
  message: string
}

interface WishMessage {
  id: string
  name: string
  message: string
  createdAt: string
}

// Demo messages for preview
const demoMessages: WishMessage[] = [
  {
    id: '1',
    name: 'Budi Santoso',
    message: 'Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Siti Aminah',
    message: 'Barakallahu lakuma wa baraka alaikuma wa jamaah bainakuma fi khair. Selamat ya!',
    createdAt: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '3',
    name: 'Keluarga Rahman',
    message: 'Semoga Allah SWT memberkahi pernikahan kalian. Happy wedding!',
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
]

export const GuestBookSection = () => {
  const { config, guest } = useTemplateContext()
  const { guestBook, features } = config
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [messages, setMessages] = useState<WishMessage[]>(
    guestBook.showExistingMessages ? demoMessages : []
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<WishFormData>({
    defaultValues: {
      name: guest?.name || '',
    },
  })

  if (!features.showGuestBook || !guestBook.enabled) {
    return null
  }

  const onSubmit = async (data: WishFormData) => {
    try {
      if (guestBook.formspreeId && guestBook.formspreeId !== 'demo') {
        await fetch(`https://formspree.io/f/${guestBook.formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
      }

      // Add to local messages for immediate feedback
      const newMessage: WishMessage = {
        id: Date.now().toString(),
        name: data.name,
        message: data.message,
        createdAt: new Date().toISOString(),
      }
      setMessages((prev) => [newMessage, ...prev])
      setIsSubmitted(true)
      reset()

      // Reset submission state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch {
      // Handle error silently
    }
  }

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = Math.floor(diff / 3600000)
    const minutes = Math.floor(diff / 60000)

    if (minutes < 1) return 'Baru saja'
    if (minutes < 60) return `${minutes} menit lalu`
    if (hours < 24) return `${hours} jam lalu`
    return date.toLocaleDateString('id-ID')
  }

  return (
    <TemplateSection id="guestbook" backgroundVariant="default" showDivider>
      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <MessageCircle
          className="w-8 h-8 mx-auto mb-4"
          style={{ color: 'var(--template-primary)' }}
        />
        <h2
          className="text-3xl md:text-4xl mb-2"
          style={{
            fontFamily: 'var(--template-font-heading)',
            color: 'var(--template-text)',
          }}
        >
          {guestBook.title || 'Ucapan & Doa'}
        </h2>
        {guestBook.subtitle && (
          <p style={{ color: 'var(--template-text-muted)' }}>
            {guestBook.subtitle}
          </p>
        )}
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 rounded-xl mb-8"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(var(--template-primary-rgb, 212, 175, 55), 0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--template-text)' }}
              >
                Nama *
              </label>
              <Input
                {...register('name', { required: 'Nama wajib diisi' })}
                placeholder="Nama Anda"
                className="w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <label
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--template-text)' }}
              >
                Ucapan & Doa *
              </label>
              <textarea
                {...register('message', { required: 'Pesan wajib diisi' })}
                rows={3}
                placeholder="Tulis ucapan dan doa terbaik Anda..."
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 resize-none"
                style={{
                  borderColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.3)',
                }}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  className="flex items-center gap-2 text-green-600"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Terima kasih!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="ml-auto"
              style={{
                backgroundColor: 'var(--template-primary)',
                color: 'white',
              }}
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Mengirim...' : 'Kirim'}
            </Button>
          </div>
        </motion.form>

        {/* Messages list */}
        {messages.length > 0 && (
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            <AnimatePresence>
              {messages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  className="p-4 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.05)',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: 'var(--template-primary)',
                        color: 'white',
                      }}
                    >
                      <User className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4
                          className="font-semibold truncate"
                          style={{ color: 'var(--template-text)' }}
                        >
                          {msg.name}
                        </h4>
                        <span
                          className="text-xs flex-shrink-0"
                          style={{ color: 'var(--template-text-muted)' }}
                        >
                          {formatTime(msg.createdAt)}
                        </span>
                      </div>
                      <p
                        className="text-sm"
                        style={{ color: 'var(--template-text-muted)' }}
                      >
                        {msg.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </TemplateSection>
  )
}

export default GuestBookSection
