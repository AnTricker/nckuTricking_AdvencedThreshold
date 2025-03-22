import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base : "/nckuTricking_AdvencedThreshold/",
  assetsInclude: ['**/*.mp4'] // 確保 Vite 正確處理 .mp4 檔案
})
