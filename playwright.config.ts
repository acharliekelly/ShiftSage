import { defineConfig } from "@playwright/test"
import 'dontenv/config'

export default defineConfig({
  testDir: 'scripts/snapshots',
  use: {
    baseURL: 'http://localhost:3000',
    storageState: 'scripts/snapshots/storageState.json',
    viewport: { width: 1920, height: 1080 },
  },
})