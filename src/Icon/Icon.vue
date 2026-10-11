<template>
  <font-awesome-icon v-if="definition" :icon="definition" v-bind="$attrs" />
</template>

<script setup lang="ts">
import {
  findIconDefinition,
  IconName,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { withDefaults, computed } from "vue";
import "./registerIcons";

interface IconProps {
  name: string;
}

const props = withDefaults(defineProps<IconProps>(), {
  name: "user",
});

// Looked up in the library at render, so icons an app adds with library.add work too
const definition = computed(() => {
  const iconName = props.name as IconName;
  const found =
    findIconDefinition({ prefix: "fab", iconName }) ??
    findIconDefinition({ prefix: "fas", iconName });

  if (!found) {
    console.warn(
      "could not load icon, because it is not available",
      props.name
    );
  }

  return found;
});
</script>
