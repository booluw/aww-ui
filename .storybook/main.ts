import { mergeConfig } from 'vite';
import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/vue3-vite",
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': '/src',
        },
      },
    });
  },
};
export default config;