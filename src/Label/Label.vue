<template>
  <span
    class="
      inline-block
      text-grey-700
      dark:text-grey-200
      text-sm
      font-medium
      casual-20
    "
  >
    <label :for="id">{{ label }}</label>
    <span
      class="block text-xs text-grey-400 font-normal mono-0 casual-60"
      v-if="description"
      >{{ description }}</span
    >
  </span>
</template>

<script lang="ts" setup>
type Props = {
  id?: string;
  label: string;
  description?: string;
};

defineProps<Props>();
</script>
