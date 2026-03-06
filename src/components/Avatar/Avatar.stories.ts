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

export const InitialsAndColor: Story = {
  args: {
    variant: 'initials',
    default: 'BJ',
    color: 'indigo'
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

export const Image: Story = {
  args: {
    variant: 'img',
    src: 'https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70._SX1080_FMjpg_.jpg'
  }
}