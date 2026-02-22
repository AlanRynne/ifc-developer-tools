/// <reference types="vitest" />
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    reporters: ["verbose"],
    maxConcurrency: 4,
    logHeapUsage: true,
    exclude: ["**/node_modules/**", "**/files.large.spec.ts"],
    poolOptions: {
      vmThreads: {
        memoryLimit: 8196
      }
    }
  }
})
