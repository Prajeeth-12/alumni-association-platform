import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/alumni-association-platform/',
  css: {
    postcss: './postcss.config.js',
  },
})
