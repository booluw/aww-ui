import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AButton from './Button.vue';

const meta: Meta<typeof AButton> = {
  title: 'AwwUI/Button',
  component: AButton,
  tags: ['autodocs'], // Generates documentation page automatically
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'subtle', 'transparent', 'outline'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' }
  },
};

export default meta;
type Story = StoryObj<typeof AButton>;

export const Primary: Story = {
  args: { variant: 'primary', default: 'Click Me' },
};