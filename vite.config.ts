import path from 'path'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  base: '/recipes',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
