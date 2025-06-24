import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  return {
    base: isProd ? '/zadanie-12/' : '/',
    plugins: [tailwindcss()],
  }
})
