<script lang="ts" setup>
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { badgeVariants, type BadgeVariants } from './Badge.variants';
import type { IconName } from '../Icons/registry';
import Icon from '../Icons/Icon.vue';
import { computed } from 'vue';

interface Props extends PrimitiveProps {
  variant?: BadgeVariants['variant'],
  color?: BadgeVariants['color'],
  icon?: IconName,
  size?: BadgeVariants['size']
  position?: BadgeVariants['position']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'filled',
  color: 'brand',
  position: 'left',
  size: 'md'
})

const iconSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return '12px'

    case 'md':
      return '16px'
  
    default:
      return '20px'
      break;
  }
})

</script>
<template>
  <Primitive :class="badgeVariants({ variant, color, position, size })">
    <Icon v-if="icon" :name="icon" :size="iconSize" />
    <slot />
  </Primitive>
</template>