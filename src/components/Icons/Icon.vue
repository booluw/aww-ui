<script setup lang="ts">
import { computed, onMounted, shallowRef, watch } from 'vue';
import { getIcon, type IconName } from './registry';

const props = defineProps<{
  name: IconName,
  size?: string | number
}>()

const IconComponent = shallowRef<any>(null)

async function loadIcon() {
  IconComponent.value = await getIcon(props.name)
}

const iconSize = computed(() => {
  if (!props.size) return '24px'
  return typeof props.size === 'number' ? `${props.size}px` : props.size
})

watch(() => props.name, () => loadIcon())

onMounted(() => loadIcon())
</script>

<template>
  <component
    v-if="IconComponent"
    :is="IconComponent"
    class="inline-block shrink-0"
    :style="{ height: iconSize, width: iconSize }"
    aria-hidden="true"
  />
</template>