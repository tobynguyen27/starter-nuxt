import { defineConfig, presetIcons, presetWind4, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { reset: true },
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  theme: {
    font: {
      sans: 'Geist',
      mono: 'Geist Mono',
      serif: 'Geist Serif',
    },
  },
})
