/**
 * SVG Filter for Liquid Glass Effect
 * Renders a hidden SVG with filter definitions used by the navbar
 * Must be included once in the app (typically in layout.tsx)
 */
export const LiquidGlassFilter = () => (
  <svg
    style={{ position: 'absolute', width: 0, height: 0 }}
    aria-hidden="true"
  >
    <defs>
      <filter
        id="liquid-glass-navbar"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
      >
        {/* Generate organic noise pattern */}
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01 0.01"
          numOctaves="2"
          seed="42"
          result="noise"
        />
        {/* Blur the noise for smoother distortion */}
        <feGaussianBlur in="noise" stdDeviation="3" result="blurred-noise" />
        {/* Apply displacement using the noise as a map */}
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurred-noise"
          scale="35"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
)
