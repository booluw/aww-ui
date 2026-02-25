<script lang="ts" setup>
import { Primitive, type PrimitiveProps } from 'reka-ui';
import { avatarVariants, type AvatarVariants } from './Avatar.variants';
import { computed } from 'vue';

type ImageAvatarType = PrimitiveProps & {
  size?: AvatarVariants['size'],
  variant?: 'img' // | AvatarVariants['variant']
  color?: never
}

type OtherAvatarypes = PrimitiveProps & {
  size?: AvatarVariants['size']
  color?: AvatarVariants['color'] | string
  variant?: AvatarVariants['variant']
}

type Props = ImageAvatarType | OtherAvatarypes

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  variant: 'initials',
  color: 'brand'
})

const clr = computed(() => props.color === 'brand' ? 'brand' : 'colored')
</script>

<template>
  <Primitive
    :as="variant === 'img' ? 'img' : 'div'"
    :class="avatarVariants({ variant, color: clr, size })"
    :style="{ '--ui-avatar-color': clr === 'colored' ? color : undefined }"
    v-bind="variant === 'img' ? $attrs : null"
  >
    <slot v-if="variant === 'icon'" class="text-(--ui-avatar-color) h-(--ui-avatar-size) w-(--ui-avatar-size)" />
    <slot v-else />
  </Primitive>
</template>