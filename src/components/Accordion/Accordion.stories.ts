import type { Meta, StoryObj } from "@storybook/vue3-vite";
import AAccordion from "./Accordion.vue";

const meta: Meta<typeof AAccordion> = {
  title: 'AwwUI/Accordion',
  component: AAccordion,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    position: { control: 'select', options: ['left', 'right'] }
  }
}

export default meta

type Story = StoryObj<typeof AAccordion>

export const Base: Story = {
  args: {
    size: 'md',
    position: 'left',
    items: [
      {
        key: 'item-1',
        title: 'Is it accessible?',
        content: 'Yes. It adheres to the WAI-ARIA design pattern.',
      },
      {
        key: 'item-2',
        title: 'Is it unstyled?',
        content: 'Yes. It\'s unstyled by default, giving you freedom over the look and feel.',
      },
      {
        key: 'item-3',
        title: 'Can it be animated?',
        content: 'Yes! You can use the transition prop to configure the animation.',
      },
    ],
    props: {
      defaultValue: 'item-1'
    },
  }
}