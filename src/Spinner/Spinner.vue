<template>
  <span role="status" class="inline-flex align-[-0.125em]">
    <!-- inline-flex plus the icon's own -0.125em offset keep the bare icon's layout in block and flex parents -->
    <D9Icon class="animate-spin" name="circle-notch" />
    <span class="sr-only">{{ label }}</span>
  </span>
</template>

<script lang="ts" setup>
import { withDefaults } from "vue";
import { D9Icon } from "../index";

withDefaults(defineProps<{ label?: string }>(), { label: "Loading" });
</script>
