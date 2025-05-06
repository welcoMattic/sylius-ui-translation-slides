import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'github-dark',
      light: 'github-light',
    },
    langs: [
      'php',
      'html',
      'twig',
      'xml',
      'shell',
      'yaml',
      'dotenv',
      'diff',
      'ini',
    ],
  }
})
