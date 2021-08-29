<template>
  <div class="relative">
    <input
      class="mono-50 bg-grey-50 text-grey-800 placeholder-grey-600 border-grey-300 dark:bg-grey-800 dark:text-grey-100 dark:placeholder-grey-400 dark:border-grey-700 focus:border-blue-400 focus:ring-blue-400 dark:focus:border-blue-800 dark:focus:ring-blue-800"
      :placeholder="placeholder"
      :class="{ ...inputClasses, ...textSizeClasses }"
      :type="type"
      @input="input"
    />

    <span
      v-if="icon"
      class="absolute left-0 inset-y-0 inline-flex items-center justify-center text-grey-700 dark:text-grey-100 px-4"
      :class="textSizeClasses"
    >
      <D9Icon :name="icon" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { D9Icon } from "@/index";
import { Size } from "@/types";
import { computed, withDefaults } from "vue";

interface InputProps {
  type: string;
  placeholder?: string;
  size?: Size;
  icon?: string;
}

interface InputEmits {
  (e: "onInput"): void;
}

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  size: "medium",
});

const emit = defineEmits<InputEmits>();

const inputClasses = computed(() => {
  return {
    "px-3 py-1 rounded font-normal": props.size === "small",
    "px-4 py-3 rounded font-normal": props.size === "medium",
    "px-6 py-3 rounded font-normal": props.size === "large",

    "pl-10": props.icon && props.size === "small",
    "pl-12": props.icon && (props.size === "medium" || props.size === "large"),
  };
});

const textSizeClasses = computed(() => {
  return {
    "text-xs leading-4": props.size === "small",
    "text-sm leading-4": props.size === "medium",
    "text-base leading-4": props.size === "large",
  };
});

const input = function (value): void {
  emit("onInput", value);
};
</script>
