import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Hanok-global-trader/',   // <— IMPORTANT for GitHub Pages
})
