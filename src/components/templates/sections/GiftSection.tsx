import { useState } from 'react'
import { motion } from 'framer-motion'
import { Gift, Copy, Check, CreditCard, MapPin } from 'lucide-react'
import { useTemplateContext } from '../TemplateProvider'
import { TemplateSection } from '../common'
import type { BankAccount, GiftAddress } from '../../../types/template'

interface BankCardProps {
  account: BankAccount
  index: number
}

const BankCard = ({ account, index }: BankCardProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(account.accountNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = account.accountNumber
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <motion.div
      className="p-6 rounded-xl"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(var(--template-primary-rgb, 212, 175, 55), 0.2)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)' }}
        >
          {account.bankLogo ? (
            <img
              src={account.bankLogo}
              alt={account.bankName}
              className="w-8 h-8 object-contain"
            />
          ) : (
            <CreditCard className="w-6 h-6" style={{ color: 'var(--template-primary)' }} />
          )}
        </div>
        <div>
          <h4
            className="font-semibold"
            style={{ color: 'var(--template-text)' }}
          >
            {account.bankName}
          </h4>
          <p
            className="text-sm"
            style={{ color: 'var(--template-text-muted)' }}
          >
            a.n {account.accountHolder}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div
          className="flex-1 px-4 py-3 rounded-lg font-mono text-lg"
          style={{
            backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.05)',
            color: 'var(--template-text)',
          }}
        >
          {account.accountNumber}
        </div>
        <motion.button
          onClick={handleCopy}
          className="p-3 rounded-lg transition-colors"
          style={{
            backgroundColor: copied ? 'var(--template-primary)' : 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)',
            color: copied ? 'white' : 'var(--template-primary)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Copy account number"
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        </motion.button>
      </div>
    </motion.div>
  )
}

interface AddressCardProps {
  address: GiftAddress
}

const AddressCard = ({ address }: AddressCardProps) => {
  const [copied, setCopied] = useState(false)

  const fullAddress = `${address.recipientName}\n${address.address}\n${address.phone}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <motion.div
      className="p-6 rounded-xl"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(var(--template-primary-rgb, 212, 175, 55), 0.2)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)' }}
        >
          <MapPin className="w-6 h-6" style={{ color: 'var(--template-primary)' }} />
        </div>
        <h4
          className="font-semibold"
          style={{ color: 'var(--template-text)' }}
        >
          Kirim Hadiah
        </h4>
      </div>

      <div
        className="p-4 rounded-lg mb-4"
        style={{
          backgroundColor: 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.05)',
        }}
      >
        <p className="font-medium" style={{ color: 'var(--template-text)' }}>
          {address.recipientName}
        </p>
        <p className="text-sm mt-1" style={{ color: 'var(--template-text-muted)' }}>
          {address.address}
        </p>
        <p className="text-sm mt-1" style={{ color: 'var(--template-text-muted)' }}>
          {address.phone}
        </p>
      </div>

      <motion.button
        onClick={handleCopy}
        className="w-full py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
        style={{
          backgroundColor: copied ? 'var(--template-primary)' : 'rgba(var(--template-primary-rgb, 212, 175, 55), 0.1)',
          color: copied ? 'white' : 'var(--template-primary)',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        {copied ? 'Tersalin!' : 'Salin Alamat'}
      </motion.button>
    </motion.div>
  )
}

export const GiftSection = () => {
  const { config } = useTemplateContext()
  const { giftRegistry, features } = config

  if (!features.showGiftRegistry || !giftRegistry.enabled) {
    return null
  }

  return (
    <TemplateSection id="gift" backgroundVariant="gradient" showDivider>
      {/* Section header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Gift
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
          {giftRegistry.title || 'Amplop Digital'}
        </h2>
        {giftRegistry.message && (
          <p
            className="max-w-lg mx-auto"
            style={{ color: 'var(--template-text-muted)' }}
          >
            {giftRegistry.message}
          </p>
        )}
      </motion.div>

      {/* Bank accounts */}
      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {giftRegistry.bankAccounts.map((account, index) => (
          <BankCard key={account.accountNumber} account={account} index={index} />
        ))}
      </div>

      {/* Gift address */}
      {giftRegistry.giftAddress && (
        <div className="mt-6 max-w-md mx-auto">
          <AddressCard address={giftRegistry.giftAddress} />
        </div>
      )}
    </TemplateSection>
  )
}

export default GiftSection
