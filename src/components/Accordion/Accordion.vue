<script lang="ts" setup>
import Icon from '../Icons/Icon.vue';
import { Accordion } from 'reka-ui/namespaced';
import type { AccordionItemProps, AccordionRootProps } from 'reka-ui';
import { accordionVariants, type AccordionVariants } from './Accordion.variants';

type Props = {
  size: AccordionVariants['size'],
  position: AccordionVariants['position']
  items: {
    key: string,
    title: string,
    content: string,
    isHtml?: boolean
  }[],
  props?: AccordionRootProps,
  'item-prop'?: AccordionItemProps 
}

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  size: 'md'
})
</script>

<template>
  <Accordion.Root v-bind="props.props">
    <template v-for="item in items" :key="item.key">
      <Accordion.Item :class="accordionVariants({ size })" v-bind="['item-prop']" :value="item.key">
        <Accordion.Header>
          <Accordion.Trigger :class="accordionVariants({ size, position, style: 'base' })">
            <Icon name="ChevronLeft" class="transition-transform ease-in-out"
              :class="position === 'left' ? 'group-data-[state=open]:rotate-90' : ' rotate-90 group-data-[state=open]:-rotate-90'"
              aria-label="Expand/Collapse" />
            <h3 class="font-medium" v-if="$slots.header" :item>
              <slot name="header"></slot>
            </h3>
            <h3 class="font-medium" v-else>
              {{ item.title }}
            </h3>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content :class="accordionVariants()">
          <div :class="accordionVariants({ style: position })">
            <div class="" v-if="$slots.default">
              <slot></slot>
            </div>
            <div v-else-if="item.isHtml" :id="`${item.key}-html`" v-html="item.content"></div>
            <div v-else class="font-normal">
              {{ item.content }}
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </template>
  </Accordion.Root>
</template>