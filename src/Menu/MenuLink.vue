<template>
  <MenuItem v-slot="{ active }" v-bind="{ disabled }">
    <component
      :is="as || 'span'"
      class="
        flex
        items-center
        justify-between
        px-4
        py-2
        text-xs
        leading-5
        transition-colors
        duration-100
        rounded-lg
      "
      :class="[
        active ? 'bg-grey-200' : '',
        disabled
          ? 'opacity-50 pointer-events-none'
          : 'hover:bg-grey-200 focus:bg-grey-200 focus:outline-none',
      ]"
    >
      <span>{{ label }}</span>
      <span
        v-if="meta"
        class="bg-grey-300 px-2 rounded-lg max-w-[66px] truncate"
        >{{ meta }}</span
      >
    </component>
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from "@headlessui/vue";

defineProps<{
  label?: string;
  meta?: string;
  disabled?: boolean;
  as?: string;
}>();
</script>
