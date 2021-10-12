<template>
  <Switch
    :modelValue="modelValue"
    :label="label"
    :class="modelValue ? 'bg-blue-700' : 'bg-grey-700'"
    @update:modelValue="update"
    class="
      relative
      inline-flex
      items-center
      h-6
      rounded-full
      w-14
      focus:outline-none
      focus:ring-2
      focus:ring-offset-2
      focus:ring-offset-gray-900
      focus:ring-blue-300
      transition
    "
  >
    <span
      class="absolute inset-x-2 text-xs text-white text-center"
      :class="modelValue ? 'pr-3' : 'pl-3'"
      >{{ modelValue ? onLabel : offLabel }}</span
    >
    <span class="sr-only">{{ label }}</span>
    <span
      :class="modelValue ? 'translate-x-9' : 'translate-x-1'"
      class="inline-block w-4 h-4 transform bg-white rounded-full transition"
    />
  </Switch>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import { Switch } from "@headlessui/vue";
import { v4 as uuidv4 } from "uuid";

withDefaults(
  defineProps<{
    id?: string;
    label: string;
    modelValue: boolean;
    description?: string;
    onLabel?: string;
    offLabel?: string;
  }>(),
  {
    id: uuidv4(),
    onLabel: "on",
    offLabel: "off",
  }
);

const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const update = (newValue: boolean) => {
  emits("update:modelValue", newValue);
};
</script>
