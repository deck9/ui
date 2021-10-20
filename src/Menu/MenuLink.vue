<template>
  <MenuItem v-slot="{ active }" v-bind="{ disabled }">
    <span
      class="block px-4 py-2 text-xs"
      :class="[
        active ? 'bg-grey-200' : '',
        disabled
          ? 'opacity-50 pointer-events-none'
          : 'hover:bg-grey-200 focus:bg-grey-200 focus:outline-none',
      ]"
      v-bind="$attrs"
      >{{ label }}</span
    >
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from "@headlessui/vue";

defineProps<{
  label?: string;
  disabled?: boolean;
}>();
</script>
