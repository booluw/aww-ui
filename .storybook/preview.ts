import type { Preview } from "@storybook/vue3-vite";
import '../src/assets/main.css'; // This imports your Tailwind v4 @theme

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;