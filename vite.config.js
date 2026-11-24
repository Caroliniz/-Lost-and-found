import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Only these prefixes reach the browser bundle; server secrets stay out.
  envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
})
