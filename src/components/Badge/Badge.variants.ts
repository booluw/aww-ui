import { tv, type VariantProps } from 'tailwind-variants';

export const badgeVariants = tv({
  base: [
    'p-2 inline-flex items-center rounded-full gap-1.5 bg-white border font-medium'
  ],
  variants: {
    variant: {
      filled: ['bg-(--ui-badge-color) border-[--ui-badge-color] text-white'],
      tint: ['bg-[color-mix(in_oklab,var(--ui-badge-color),white_90%)] border-[color-mix(in_oklab,var(--ui-badge-color),white_70%)] text-(--ui-badge-color)'],
      outline: ['bg-white text-(--ui-badge-color) border-(--ui-badge-color)'],
      subtle: ['bg-white text-(--ui-badge-color) border-transparent']
    },
    color: {
      brand: ['[--ui-badge-color:var(--color-primary)]'],
      danger: ['[--ui-badge-color:var(--color-danger)]'],
      warning: ['[--ui-badge-color:var(--color-warning)]'],
      success: ['[--ui-badge-color:var(--color-success)]'],
      important: ['[--ui-badge-color:var(--color-important)]'],
      info: ['[--ui-badge-color:var(--color-info)]'],
      subtle: ['[--ui-badge-color:var(--color-subtle)]']
    },
    position: {
      right: ['flex-row-reverse'],
      left: ['flex-row']
    },
    size: {
      xs: ['p-1 text-xs'],
      sm: ['p-1.5 text-sm'],
      md: ['p-2']
    },
  },
  defaultVariants: {
    variant: 'filled',
    color: 'brand',
    position: 'left'
  }
})

export type BadgeVariants = VariantProps<typeof badgeVariants>;