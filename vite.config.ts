import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages project site: agravans.github.io/portolio/
  // Set VITE_BASE_PATH=/portolio/ in CI; local dev uses /
  base: process.env.VITE_BASE_PATH || '/',
})
