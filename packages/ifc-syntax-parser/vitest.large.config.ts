/// <reference types="vitest" />
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    reporters: ["verbose"],
    logHeapUsage: true,
    include: ["**/files.large.spec.ts"],
    pool: "forks",
    poolOptions: {
      forks: {
        singleFork: true
      }
    },
    sequence: {
      concurrent: false
    }
  }
})
