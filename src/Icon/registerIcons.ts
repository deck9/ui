import { library } from "@fortawesome/fontawesome-svg-core";
import * as fasIcons from "@fortawesome/free-solid-svg-icons";

library.add(
  fasIcons.faChartPie,
  fasIcons.faCheck,
  fasIcons.faCheckCircle,
  fasIcons.faChevronDown,
  fasIcons.faChevronLeft,
  fasIcons.faChevronRight,
  fasIcons.faChevronUp,
  fasIcons.faCircleNotch,
  fasIcons.faClipboard,
  fasIcons.faCog,
  fasIcons.faDoorOpen,
  fasIcons.faEllipsisH,
  fasIcons.faEnvelope,
  fasIcons.faExclamationTriangle,
  fasIcons.faFingerprint,
  fasIcons.faGlobe,
  fasIcons.faHandPointRight,
  fasIcons.faInfoCircle,
  fasIcons.faPencilAlt,
  fasIcons.faPlayCircle,
  fasIcons.faPlus,
  fasIcons.faPlusCircle,
  fasIcons.faRobot,
  fasIcons.faSave,
  fasIcons.faShieldAlt,
  fasIcons.faTimes,
  fasIcons.faTrash,
  fasIcons.faUser,
  fasIcons.faUserShield
);

export default [...Object.keys(library.definitions.fas)].sort();
