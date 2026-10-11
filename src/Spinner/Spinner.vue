<template>
  <span role="status" class="inline-flex align-[-0.125em]">
    <!-- inline-flex plus the icon's own -0.125em offset keep the bare icon's layout in block and flex parents -->
    <D9Icon class="animate-spin" name="circle-notch" v-bind="$attrs" />
    <span class="sr-only">{{ shown ? label : "" }}</span>
  </span>
</template>

<script lang="ts">
// Classes passed to D9Spinner still size and color the icon, not the status wrapper.
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref, withDefaults } from "vue";
import { D9Icon } from "../index";

withDefaults(defineProps<{ label?: string }>(), { label: "Loading" });

// The text arrives after the status region is in the page, so screen readers hear a change.
const shown = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;
onMounted(() => {
  timer = setTimeout(() => (shown.value = true), 100);
});
onUnmounted(() => clearTimeout(timer));
</script>
