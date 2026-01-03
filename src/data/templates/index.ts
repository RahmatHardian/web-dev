import { demoElegantConfig } from './demo-elegant/config'
import { roseGardenConfig } from './rose-garden/config'
import { midnightNavyConfig } from './midnight-navy/config'
import { tealWaveConfig } from './teal-wave/config'
import { sunsetCoralConfig } from './sunset-coral/config'
import { lavenderDreamsConfig } from './lavender-dreams/config'
import type { TemplateConfig } from '../../types/template'

// Registry of all available template configs
export const templateConfigs: Record<string, TemplateConfig> = {
  // Elegant layouts (default)
  'elegant-1': demoElegantConfig,
  'elegant-2': roseGardenConfig,
  'elegant-3': midnightNavyConfig,
  // Modern layouts (teal-wave with cover overlay & auto-slide)
  'modern-1': tealWaveConfig,
  'modern-2': sunsetCoralConfig,
  'modern-3': lavenderDreamsConfig,
}

// Map template IDs to their layout components
export const templateLayouts: Record<string, 'default' | 'teal-wave'> = {
  'elegant-1': 'default',
  'elegant-2': 'default',
  'elegant-3': 'default',
  'modern-1': 'teal-wave',
  'modern-2': 'teal-wave',
  'modern-3': 'teal-wave',
}

export const getTemplateConfig = (templateId: string): TemplateConfig | null => {
  return templateConfigs[templateId] || null
}

export const getTemplateLayout = (templateId: string): 'default' | 'teal-wave' => {
  return templateLayouts[templateId] || 'default'
}

export {
  demoElegantConfig,
  roseGardenConfig,
  midnightNavyConfig,
  tealWaveConfig,
  sunsetCoralConfig,
  lavenderDreamsConfig,
}
