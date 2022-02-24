<template>
  <div class="grid max-w-6xl grid-cols-6 gap-4 mx-auto">
    <div
      v-for="icon in icons"
      :key="icon"
      class="
        flex
        items-center
        justify-center
        h-24
        text-center
        rounded
        bg-grey-200
        text-grey-600
        dark:bg-grey-800 dark:text-blue-50
      "
    >
      <div>
        <icon v-bind="{ name: icon, size: '2x' }" />
        <span
          class="block mt-2 text-xs text-grey-700 dark:text-grey-400 mono-100"
          >{{ icon }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";

export default {
  name: "icon-collection",

  components: { Icon },
  props: {
    icons: { type: Array, required: true },
  },
};
</script>
