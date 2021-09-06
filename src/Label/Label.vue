<template>
  <span class="inline-block text-blue-900 text-sm font-medium">
    <label :for="id">{{ label }}</label>
    <span v-if="description">{{ description }}</span>
  </span>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    description: { type: String, default: undefined },
  },
};
</script>
