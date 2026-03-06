<script lang="ts" setup>
import { Accordion } from 'reka-ui/namespaced';
import AccordionItem from './AccordionItem.vue';
import type { AccordionVariants } from './Accordion.variants';
import type { AccordionItemProps, AccordionRootProps } from 'reka-ui';

type Props = {
  size: AccordionVariants['size'],
  position: AccordionVariants['position']
  items: {
    key: string,
    title: string,
    content: string,
    isHtml?: string
  }[],
  props?: AccordionRootProps,
  'item-prop'?: AccordionItemProps 
}

const props = defineProps<Props>()
</script>

<template>
  <Accordion.Root v-bind="props.props">
    <AccordionItem v-bind="props" />
  </Accordion.Root>
</template>