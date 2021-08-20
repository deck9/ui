<template>
  <div class="grid grid-cols-4 gap-4">
    <div
      v-for="icon in icons"
      :key="icon"
      class="bg-grey-100 text-center h-24 text-blue-500 flex items-center justify-center rounded"
    >
      <div>
        <icon v-bind="{ name: icon, size: '2x' }" />
        <span class="block text-sm text-grey-600 font-bold mt-2">{{
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