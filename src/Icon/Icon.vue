<template>
  <font-awesome-icon
    v-if="isIconAvailable"
    :icon="[iconBag, name]"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { withDefaults, computed } from "vue";
import icons, { brands } from "./registerIcons";

interface IconProps {
  name: string;
}

const props = withDefaults(defineProps<IconProps>(), {
  name: "user",
});

const iconBag = computed((): "fab" | "fas" => {
  if (brands.includes(props.name)) {
    return "fab";
  }

  return "fas";
});

const isIconAvailable = computed((): boolean => {
  if (icons.includes(props.name) || brands.includes(props.name)) {
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
