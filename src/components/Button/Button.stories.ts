import type { Meta, StoryObj } from '@storybook/vue3-vite';
import MyButton from './Button.vue';

const meta: Meta<typeof MyButton> = {
  title: 'Components/Button',
  component: MyButton,
  tags: ['autodocs'], // Generates documentation page automatically
  argTypes: {
    variant: { control: 'select', options: ['primary', 'outline'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: { variant: 'primary', default: 'Click Me' },
};

export const Outline: Story = {
  args: { variant: 'outline', default: 'Secondary Action' },
};