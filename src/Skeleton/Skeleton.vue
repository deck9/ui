<template>
  <div class="animate-pulse">
    <div class="flex items-center justify-between space-x-4">
      <div v-if="avatar" class="w-12 h-12 bg-current rounded-full shrink-0"></div>
      <div v-if="title" class="w-full h-8 bg-current rounded-lg"></div>
    </div>

    <div v-if="lineSettings.length > 0" class="mt-6 space-y-2">
      <div
        v-for="(setting, index) in lineSettings"
        class="h-4 bg-current rounded-lg"
        :class="setting.margin"
        :key="index"
      ></div>
    </div>

    <div v-if="footer" class="w-1/3 h-10 mt-6 bg-current rounded-lg"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults } from "vue";

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

// Full class names, so Tailwind finds them in the built bundle
const margins = ["mr-4", "mr-5", "mr-6", "mr-8", "mr-10", "mr-16", "mr-24", "mr-32"];

const lineSettings = computed(() =>
  Array.from({ length: Math.max(0, Math.floor(props.lines)) }, () => ({
    margin: margins[Math.floor(Math.random() * margins.length)],
  })),
);
</script>
