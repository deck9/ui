<template>
  <div class="animate-pulse">
    <div class="flex items-center justify-between space-x-4">
      <div v-if="avatar" class="h-12 w-12 bg-current rounded-full flex-shrink-0"></div>
      <div v-if="title" class="bg-current h-8 w-full rounded-lg"></div>
    </div>

    <div v-if="lines > 0" class="space-y-2 mt-6">
      <div
        v-for="(setting, index) in lineSettings"
        class="bg-current h-4 rounded-lg"
        :class="setting.margin"
        :key="index"
      ></div>
    </div>

    <div v-if="footer" class="mt-6 bg-current h-10 rounded-lg w-1/3"></div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";

interface SkeletonProps {
  avatar?: boolean;
  title?: boolean;
  lines?: number;
  footer?: boolean;
}

const props = withDefaults(defineProps<SkeletonProps>(), {
  avatar: false,
  title: true,
  lines: 3,
  footer: false,
});


const lineSettings = new Array(props.lines).fill(undefined).map(() => {
  const margins = [4, 5, 6, 8, 10, 16, 24, 32];
  const margin = margins[Math.floor(Math.random() * margins.length)]

  return {
    margin: `mr-${margin}`,
  };
});
</script>
