<template>
  <div class="grid max-w-6xl grid-cols-6 gap-4 mx-auto">
    <div
      v-for="icon in icons"
      :key="icon"
      class="flex items-center justify-center h-16 text-center rounded  bg-grey-800 text-blue-50"
    >
      <div>
        <icon v-bind="{ name: icon, size: '1x' }" />
        <span class="block mt-2 text-xs text-grey-400 mono-100">{{
          icon
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "icon-collection",

  components: { Icon },
  props: {
    icons: { type: Array, required: true },
  },
};
</script>
