import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  // Use the tokens defined in your @theme block
  base: [
    'cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors border border-transparent',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-primary',
    'disabled:opacity-30 disabled:pointer-event-none disabled:hover:pointer-event-none disabled:grayscale-80'
  ],
  variants: {
    variant: {
      primary: [
        'bg-primary text-primary-foreground',
        'hover:bg-primary-darker',
        'active:bg-primary-darkest',
        'focus-visible:ring-black focus-visible:border-white'
      ],
      outline: [
        'border border-border bg-transparent',
        'focus-visible:border-current focus-visible:border focus-visible:ring-none'
      ],
      secondary: [
        'bg-white border-slate-200',
        'hover:bg-slate-100',
        'active:bg-[color-mix(in_oklab,var(--color-slate-100),black_10%)]',
        'focus-visible:border-current focus-visible:border focus-visible:ring-none'
      ],
      subtle: [
        'text-slate-600',
        'hover:text-black hover:bg-slate-100',
        'active:bg-[color-mix(in_oklab,var(--color-slate-100),black_5%)]',
        'focus-visible:border-black focus-visible:border focus-visible:ring-black focus-visible:text-black focus-visible:hover:bg-transparent'
      ],
      transparent: [
        'text-slate-600',
        'hover:text-[color-mix(in_oklab,var(--color-primary),black_5%)]',
        'active:text-[color-mix(in_oklab,var(--color-primary),black_15%)]',
        'focus-visible:border-black focus-visible:border focus-visible:ring-black focus-visible:text-black'
      ],
    },
    size: {
      sm: 'py-1.5 px-2 text-xs',
      md: 'py-2 px-3 text-sm',
      lg: 'py-2.5 px-4 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;