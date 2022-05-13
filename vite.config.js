import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'

const path = require('path')

export default defineConfig({
  server: {
    port: 5553,
    host: '0.0.0.0'
  },
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Title',
        short_name: 'Short',
        description: 'Desc',
        scope: './',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: 'black',
        theme_color: '#ffffff',
        id: '#000000',
        icons: [
        {
          'src': '/img/icons/icon-72x72.png',
          'sizes': '72x72',
          'type': 'image/png',
          'purpose': 'maskable any'
        },
        {
          'src': '/img/icons/icon-96x96.png',
          'sizes': '96x96',
          'type': 'image/png',
          'purpose': 'maskable any'
        },
        {
          'src': '/img/icons/icon-128x128.png',
          'sizes': '128x128',
          'type': 'image/png',
          'purpose': 'maskable any'
        },
        {
          'src': '/img/icons/icon-144x144.png',
          'sizes': '144x144',
          'type': 'image/png',
          'purpose': 'maskable any'
        },
        {
          'src': '/img/icons/icon-152x152.png',
          'sizes': '152x152',
          'type': 'image/png',
          'purpose': 'maskable any'
        },
        {
          'src': '/img/icons/icon-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': '/img/icons/icon-384x384.png',
          'sizes': '384x384',
          'type': 'image/png',
          'purpose': 'maskable'
        },
        {
          'src': '/img/icons/icon-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
          'purpose': 'maskable'
        }
      ]
      }
    }),
    vuetify({
      autoImport: true
    })
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
