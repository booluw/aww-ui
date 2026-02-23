<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { buttonVariants, type ButtonVariants } from './button.variants';

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  loading?: boolean;
  leftIcon?: any; // You can use Icon types here
}

// Default to 'button' tag if 'as' is not provided
const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <Primitive :as="as" :as-child="asChild" :disabled="loading" :class="buttonVariants({ variant, size })">
    <span v-if="loading" class="mr-2 animate-spin">
      <svg class="h-4 w-4" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    </span>

    <component :is="leftIcon" v-if="leftIcon && !loading" class="mr-2 h-4 w-4" />

    <slot />
  </Primitive>
</template>