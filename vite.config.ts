/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
// https://vite.dev/config/

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  build: {
    lib: {
      // The entry point for your library
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AwwUI',
      fileName: 'aww-ui'
    },
    rollupOptions: {
      // Ensure Vue and Reka aren't bundled into your library
      external: ['vue', 'reka-ui'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
          'reka-ui': 'RekaUI'
        }
      }
    }
  },
  // test: {
  //   projects: [{
  //     extends: true,
  //     plugins: [
  //     // The plugin will run tests for the stories defined in your Storybook config
  //     // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
  //     storybookTest({
  //       configDir: path.join(dirname, '.storybook')
  //     })],
  //     test: {
  //       name: 'storybook',
  //       browser: {
  //         enabled: true,
  //         headless: true,
  //         provider: playwright({}),
  //         instances: [{
  //           browser: 'chromium'
  //         }]
  //       },
  //       setupFiles: ['.storybook/vitest.setup.ts']
  //     }
  //   }]
  // }
});