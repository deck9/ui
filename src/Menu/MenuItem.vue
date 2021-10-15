<template>
  <MenuItem v-slot="{ active }">
    <span
      class="
        block
        px-4
        py-2
        text-xs
        hover:bg-grey-200
        focus:bg-grey-200 focus:outline-none
      "
      :class="active ? 'bg-grey-200' : ''"
      v-bind="$attrs"
      >{{ label }}</span
    >
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from "@headlessui/vue";

defineProps<{
  label?: string;
}>();
</script>
