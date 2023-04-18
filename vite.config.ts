import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {renderAllMdFile,renderSingleMdFile} from './src/markdown/renderAllMdFile'
import { join } from 'path'

import.meta.env = import.meta.env || {}
import.meta.env.out_dir = 'output'

renderAllMdFile(import.meta.env.out_dir)


// 手动渲染 readme
renderSingleMdFile('readme.md',import.meta.env.out_dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})
