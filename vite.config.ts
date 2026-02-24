/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    dts({
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
      include: ['src/**/*.ts', 'src/**/*.vue'],
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AwwUI',
      fileName: 'aww-ui'
    },
    rollupOptions: {
      // Ensure Vue and Reka aren't bundled
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
});