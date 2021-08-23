<template>
  <div class="grid grid-cols-6 gap-4 max-w-6xl mx-auto">
    <div
      v-for="icon in icons"
      :key="icon"
      class="
        bg-grey-800
        text-center
        h-16
        text-blue-50
        flex
        items-center
        justify-center
        rounded
      "
    >
      <div>
        <icon v-bind="{ name: icon, size: '1x' }" />
        <span class="block text-xs text-grey-400 font-medium mt-2">{{
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