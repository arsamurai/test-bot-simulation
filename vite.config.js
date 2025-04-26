import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import checker from "vite-plugin-checker"
import eslint from "vite-plugin-eslint"

import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteReact(),
    tailwindcss(),
    eslint({
      include: './src/**/*.{js,jsx,ts,tsx,json}',
    }),
    checker({
      typescript: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: { host: false, port: 3000 },
  preview: { open: true },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve('src/app'),
      '@pages': resolve('src/pages'),
      '@features': resolve('src/features'),
      '@services': resolve('src/services'),
      '@entities': resolve('src/entities'),
      '@shared': resolve('src/shared'),
      '@styles': resolve('src/styles'),
      '@assets': resolve('src/assets'),
    },
  },
})
