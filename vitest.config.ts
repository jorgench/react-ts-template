import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      exclude: ['**/node_modules/**'],
      setupFiles: 'src/testSetup.ts',
      coverage: {
        provider: 'v8',
      },
    },
  }),
)
