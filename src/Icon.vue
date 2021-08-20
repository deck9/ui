<template>
  <font-awesome-icon :icon="['fas', name]" v-bind="$attrs" />
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  // faBallotCheck,
  faChartPie,
  faCheck,
  faCheckCircle,
  // faChevronDoubleDown,
  // faChevronDoubleLeft,
  // faChevronDoubleRight,
  // faChevronDoubleUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faClipboard,
  faCog,
  faDoorOpen,
  faEllipsisH,
  faEnvelope,
  faExclamationTriangle,
  // faFileEdit,
  faFingerprint,
  faGlobe,
  faHandPointRight,
  faInfoCircle,
  // faPencil,
  faPencilAlt,
  faPlayCircle,
  faPlus,
  faPlusCircle,
  faRobot,
  faSave,
  faShieldAlt,
  // faSpinnerThird,
  faTimes,
  faTrash,
  faUser,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  // faBallotCheck,
  faChartPie,
  faCheck,
  faCheckCircle,
  // faChevronDoubleDown,
  // faChevronDoubleLeft,
  // faChevronDoubleRight,
  // faChevronDoubleUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faClipboard,
  faCog,
  faDoorOpen,
  faEllipsisH,
  faEnvelope,
  faExclamationTriangle,
  // faFileEdit,
  faFingerprint,
  faGlobe,
  faHandPointRight,
  faInfoCircle,
  // faPencil,
  faPencilAlt,
  faPlayCircle,
  faPlus,
  faPlusCircle,
  faRobot,
  faSave,
  faShieldAlt,
  // faSpinnerThird,
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