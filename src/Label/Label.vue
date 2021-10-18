<template>
  <span class="inline-block text-blue-900 text-sm font-medium">
    <label :for="id">{{ label }}</label>
    <span class="block text-xs text-grey-400" v-if="description">{{
      description
    }}</span>
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
