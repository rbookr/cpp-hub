import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import renderAllMdFile from './src/markdown/renderAllMdFile'

import.meta.env = import.meta.env || {}
import.meta.env.out_dir = 'output'

renderAllMdFile(import.meta.env.out_dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
