<template>
  <font-awesome-icon
    v-if="isIconAvailable"
    :icon="['fas', name]"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { withDefaults, computed } from "vue";
import { icons } from "@/index";

interface IconProps {
  name: string;
}

const props = withDefaults(defineProps<IconProps>(), {
  name: "user",
});

const isIconAvailable = computed((): boolean => {
  if (icons.includes(props.name)) {
    return true;
  } else {
    console.warn(
      "could not load icon, because it is not available",
      props.name
    );
    return false;
  }
});
</script>
