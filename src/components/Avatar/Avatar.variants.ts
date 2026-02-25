import { tv, type VariantProps } from "tailwind-variants";

export const avatarVariants = tv({
  base: ['rounded-full inline-flex text-center justify-center items-center font-medium'],
  variants: {
    variant: {
      img: [''],
      initials: ['bg-[color-mix(in_oklab,var(--ui-avatar-color),white_90%)] text-(--ui-avatar-color)'],
      icon: ['bg-[color-mix(in_oklab,var(--ui-avatar-color),white_90%)] text-(--ui-avatar-color)'],
    },
    color: {
      brand: ['[--ui-avatar-color:var(--color-primary)]'],
      colored: ['']
    },
    size: {
      sm: ['h-[28px] w-[28px] text-xs p-[5px] [--ui-avatar-size:12px]'],
      md: ['h-[48px] w-[48px] text-sm p-[10px] [--ui-avatar-size:16px]'],
      lg: ['h-[72px] w-[72px] text-[20px] p-[10px] [--ui-avatar-size:28px]']
    },
  },
  defaultVariants: {
    variant: 'initials',
    color: 'brand',
    size: 'lg'
  }
})

export type AvatarVariants = VariantProps<typeof avatarVariants>;