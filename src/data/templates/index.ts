import { demoElegantConfig } from './demo-elegant/config'
import type { TemplateConfig } from '../../types/template'

// Registry of all available template configs
export const templateConfigs: Record<string, TemplateConfig> = {
  'elegant-1': demoElegantConfig,
}

export const getTemplateConfig = (templateId: string): TemplateConfig | null => {
  return templateConfigs[templateId] || null
}

export { demoElegantConfig }
