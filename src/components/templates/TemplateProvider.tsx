import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react'
import type {
  TemplateConfig,
  GuestInfo,
  ComputedTheme,
  TemplateTheme,
  ThemeColors,
} from '../../types/template'

// ============================================
// Theme Presets
// ============================================

const THEME_PRESETS: Record<string, Partial<ThemeColors>> = {
  elegant: {
    primary: '#d4af37',
    secondary: '#8b7355',
    background: '#fefefe',
    text: '#1a1a1a',
    textMuted: '#666666',
  },
  minimal: {
    primary: '#333333',
    secondary: '#666666',
    background: '#ffffff',
    text: '#1a1a1a',
    textMuted: '#888888',
  },
  islami: {
    primary: '#2d5f2e',
    secondary: '#d4af37',
    background: '#f8f8f8',
    text: '#1a1a1a',
    textMuted: '#555555',
  },
  adat: {
    primary: '#8b4513',
    secondary: '#d4a574',
    background: '#faf8f5',
    text: '#2c1810',
    textMuted: '#6b5445',
  },
  modern: {
    primary: '#2c3e50',
    secondary: '#e74c3c',
    background: '#ffffff',
    text: '#1a1a1a',
    textMuted: '#7f8c8d',
  },
}

// ============================================
// Theme Resolution
// ============================================

const resolveTheme = (theme: TemplateTheme): ComputedTheme => {
  const preset = THEME_PRESETS[theme.preset] || {}
  const colors = { ...preset, ...theme.colors }

  const cssVariables: Record<string, string> = {
    '--template-primary': colors.primary || '#d4af37',
    '--template-secondary': colors.secondary || '#8b7355',
    '--template-background': colors.background || '#ffffff',
    '--template-text': colors.text || '#1a1a1a',
    '--template-text-muted': colors.textMuted || '#666666',
    '--template-accent': colors.accent || colors.primary || '#d4af37',
    '--template-font-heading': theme.fonts.heading,
    '--template-font-body': theme.fonts.body,
    '--template-font-script': theme.fonts.script || theme.fonts.heading,
  }

  return {
    cssVariables,
    className: `template-${theme.preset}`,
    fonts: theme.fonts,
  }
}

// ============================================
// Context
// ============================================

interface TemplateContextValue {
  config: TemplateConfig
  guest: GuestInfo | null
  theme: ComputedTheme
}

const TemplateContext = createContext<TemplateContextValue | null>(null)

export const useTemplateContext = () => {
  const context = useContext(TemplateContext)
  if (!context) {
    throw new Error('useTemplateContext must be used within a TemplateProvider')
  }
  return context
}

// ============================================
// Provider Component
// ============================================

interface TemplateProviderProps {
  config: TemplateConfig
  guest?: GuestInfo | null
  children: ReactNode
}

export const TemplateProvider = ({
  config,
  guest = null,
  children,
}: TemplateProviderProps) => {
  const computedTheme = useMemo(() => resolveTheme(config.theme), [config.theme])

  // Inject CSS variables
  useEffect(() => {
    const root = document.documentElement

    Object.entries(computedTheme.cssVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value)
    })

    return () => {
      Object.keys(computedTheme.cssVariables).forEach((key) => {
        root.style.removeProperty(key)
      })
    }
  }, [computedTheme])

  // Load Google Fonts
  useEffect(() => {
    const fonts = [
      config.theme.fonts.heading,
      config.theme.fonts.body,
      config.theme.fonts.script,
    ].filter(Boolean) as string[]

    const uniqueFonts = [...new Set(fonts)]
    const fontParam = uniqueFonts
      .map((f) => f.replace(/ /g, '+'))
      .join('&family=')

    const link = document.createElement('link')
    link.href = `https://fonts.googleapis.com/css2?family=${fontParam}:wght@300;400;500;600;700&display=swap`
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [config.theme.fonts])

  const value: TemplateContextValue = {
    config,
    guest,
    theme: computedTheme,
  }

  return (
    <TemplateContext.Provider value={value}>
      <div
        className={`template-base ${computedTheme.className}`}
        style={{
          fontFamily: `'${config.theme.fonts.body}', sans-serif`,
        }}
      >
        {children}
      </div>
    </TemplateContext.Provider>
  )
}

export default TemplateProvider
