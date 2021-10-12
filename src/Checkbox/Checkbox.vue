<template>
  <div class="relative flex items-start">
    <div class="flex items-center h-5">
      <input
        class="
          h-4
          w-4
          border-grey-600
          dark:text-blue-500
          dark:border-grey-300
          dark:checked:border-blue-500
          dark:focus:ring-blue-900
          dark:focus:ring-offset-grey-800
          rounded-sm
        "
        type="checkbox"
        :checked="modelValue"
        @change="update"
        :id="id"
      />
    </div>
    <div class="ml-2 text-sm leading-5">
      <label
        :for="id"
        class="font-medium text-grey-900 dark:text-grey-200 casual-25"
        >{{ label }}</label
      >
      <p
        v-if="description"
        class="text-grey-700 dark:text-grey-400 mono-0 casual-60"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from "vue";
import { v4 as uuidv4 } from "uuid";

interface CheckboxProps {
  id?: string;
  label: string;
  modelValue: boolean;
  description?: string;
}

interface CheckboxEmits {
  (e: "update:modelValue", checked: boolean): void;
}

withDefaults(defineProps<CheckboxProps>(), {
  id: uuidv4(),
});

const emits = defineEmits<CheckboxEmits>();

const update = (value: Event) => {
  emits("update:modelValue", (value.target as HTMLInputElement).checked);
};
</script>
