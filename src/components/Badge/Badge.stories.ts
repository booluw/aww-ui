import type { Meta, StoryObj } from '@storybook/vue3-vite';
import ABadge from './Badge.vue'

const meta: Meta<typeof ABadge> = {
  title: 'AwwUI/Badge',
  component: ABadge,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['brand', 'danger', 'warning', 'success', 'important', 'info', 'subtle'] },
    variant: { control: 'select', options: ['filled', 'tint', 'outline', 'subtle'] },
    position: { control: 'select', options: ['left', 'right'] },
    size: { control: 'select', options: ['xs', 'sm', 'md']}
  }
}

export default meta

type Story = StoryObj<typeof ABadge>

export const Brand: Story = {
  args: {
    variant: 'filled',
    color: 'brand',
    default: 'Badge',
    icon: 'ImageCircle',
    position: 'left',
    size: 'md'
  }
}

export const WithoutText: Story = {
  args: {
    variant: 'filled',
    color: 'brand',
    icon: 'ImageCircle',
    position: 'left',
    size: 'md'
  }
}