import { tv, type VariantProps } from "tailwind-variants";

export const accordionVariants = tv({
  base: ['group w-[340px] px-2.5 py-1.5'],
  variants: {
    size: {
      sm: ['text-sm'],
      md: ['text-base'],
      lg: ['text-xl']
    },
    position: {
      left: ['flex items-center gap-2'],
      right: ['flex flex-row-reverse justify-between items-center']
    },
    style: {
      base: ['cursor-pointer rounded-sm'],
      left: ['group-data-[state=open]:pl-8!'],
      right: ['group-data-[state=open]:pl-0!']
    }
  }
})

export type AccordionVariants = VariantProps<typeof accordionVariants>