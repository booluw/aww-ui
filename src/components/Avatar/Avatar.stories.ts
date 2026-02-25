import type { Meta, StoryObj } from '@storybook/vue3-vite';
import AAvatar from './Avatar.vue';
import ImageCircle from '../Icons/ImageCircle.vue';

const meta: Meta<typeof AAvatar> = {
  title: 'AwwUI/Avatar',
  component: AAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'text', description: "Use the internal 'brand' color, or define a HEX color" }
  }
}

export default meta;
type Story = StoryObj<typeof AAvatar>

export const Brand: Story = {
  args: {
    variant: 'initials',
    default: 'BJ',
    color: 'brand'
  }
}

export const Icon: Story = {
  render: (args) => ({
    components: { ImageCircle, AAvatar },
    setup() {
      return { args }
    },
    template: `<AAvatar size="md" variant="icon" color="#2C3C85"><ImageCircle /></AAvatar>`
  })
}