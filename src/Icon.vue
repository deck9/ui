<template>
  <font-awesome-icon :icon="['fas', name]" v-bind="$attrs" />
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faChartPie,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircleNotch,
  faClipboard,
  faCog,
  faDoorOpen,
  faEllipsisH,
  faEnvelope,
  faExclamationTriangle,
  faFingerprint,
  faGlobe,
  faHandPointRight,
  faInfoCircle,
  faPencilAlt,
  faPlayCircle,
  faPlus,
  faPlusCircle,
  faRobot,
  faSave,
  faShieldAlt,
  faTimes,
  faTrash,
  faUser,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faChartPie,
  faCheck,
  faCheckCircle,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faCircleNotch,
  faClipboard,
  faCog,
  faDoorOpen,
  faEllipsisH,
  faEnvelope,
  faExclamationTriangle,
  faFingerprint,
  faGlobe,
  faHandPointRight,
  faInfoCircle,
  faPencilAlt,
  faPlayCircle,
  faPlus,
  faPlusCircle,
  faRobot,
  faSave,
  faShieldAlt,
  faTimes,
  faTrash,
  faUser,
  faUserShield
);

export const icons = [...Object.keys(library.definitions.fas)].sort();

export default {
  name: "icon",

  components: { FontAwesomeIcon },

  props: {
    name: {
      type: String,
      default: "user",
    },
  },
};
</script>