import { tv, type VariantProps } from 'tailwind-variants';

export const buttonVariants = tv({
  // Use the tokens defined in your @theme block
  base: 'inline-flex items-center justify-center rounded-ui-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-primary disabled:opacity-50',
  variants: {
    variant: {
      primary: 'bg-ui-primary text-ui-primary-foreground hover:opacity-90',
      outline: 'border border-ui-border bg-transparent hover:bg-slate-100',
      ghost: 'hover:bg-slate-100 text-ui-foreground',
    },
    size: {
      sm: 'h-8 px-3',
      md: 'h-10 px-4',
      lg: 'h-12 px-8 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;