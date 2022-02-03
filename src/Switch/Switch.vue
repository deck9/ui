<template>
  <Switch
    :modelValue="modelValue"
    :label="label"
    :class="modelValue ? 'bg-blue-700' : 'bg-grey-700'"
    @update:modelValue="update"
    class="relative inline-flex items-center h-6 transition rounded-full w-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-300"
  >
    <span
      class="absolute text-xs text-center text-white inset-x-2"
      :class="modelValue ? 'pr-3' : 'pl-3'"
    >{{ modelValue === true ? onLabel : offLabel }}</span>
    <span class="sr-only">{{ label }}</span>
    <span
      :class="modelValue ? 'translate-x-9' : 'translate-x-1'"
      class="inline-block w-4 h-4 transition bg-white rounded-full"
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
    offLabel: "off",
    onLabel: "on",
  }
);

const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "change", value: boolean): void;
}>();

const update = (newValue: boolean) => {
  emits("update:modelValue", newValue);
  emits("change", newValue);
};
</script>
