<template>
  <div class="relative flex items-start">
    <!-- Input and text are siblings, so peer-disabled reaches the text.
         The label gets its own cursor: browsers set cursor: default on labels. -->
    <input
      class="
        peer
        mt-0.5
        h-4
        w-4
        border-grey-600
        dark:text-blue-500
        dark:border-grey-300
        dark:checked:border-blue-500
        dark:focus:ring-blue-900
        dark:focus:ring-offset-grey-800
        rounded-sm
        disabled:opacity-50
        disabled:cursor-not-allowed
      "
      type="checkbox"
      :checked="modelValue"
      @change="update"
      :id="id"
      v-bind="$attrs"
    />
    <div
      class="ml-2 text-sm leading-5 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:[&>label]:cursor-not-allowed"
    >
      <label
        :for="id"
        class="font-medium text-grey-700 dark:text-grey-200 casual-25"
        >{{ label }}</label
      >
      <p
        v-if="description"
        class="block text-xs text-grey-400 font-normal mono-0 casual-60"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { withDefaults } from "vue";
import { v4 as uuidv4 } from "uuid";

export interface CheckboxProps {
  id?: string;
  label: string;
  modelValue: boolean;
  description?: string;
}

interface CheckboxEmits {
  (e: "update:modelValue", checked: boolean): void;
}

withDefaults(defineProps<CheckboxProps>(), {
  id: () => uuidv4(),
});

const emits = defineEmits<CheckboxEmits>();

const update = (value: Event) => {
  emits("update:modelValue", (value.target as HTMLInputElement).checked);
};
</script>
