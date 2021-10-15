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
    >
      <slot></slot>
    </span>
  </MenuItem>
</template>

<script setup lang="ts">
import { MenuItem } from "@headlessui/vue";
</script>
