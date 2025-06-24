import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/zadanie-12/', 
    build: {
        outDir: 'dist',
    },
    plugins: [
        tailwindcss(),
    ],
})
