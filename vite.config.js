import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), imagetools()],
  base: "/Portafolio_PW3",
  module: {
    rules: [{ test: /\.(png|jpg|gif|avif|jfif)$/, loader: 'url-loader' }],
  },
})
