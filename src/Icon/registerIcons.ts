import { library } from "@fortawesome/fontawesome-svg-core";
import * as fasIcons from "@fortawesome/free-solid-svg-icons";
import * as fabIcon from "@fortawesome/free-brands-svg-icons";

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
  fasIcons.faUserShield,

  // Brands
  fabIcon.faTwitter,
  fabIcon.faInstagram,
  fabIcon.faGithub,
  fabIcon.faLinkedin,
  fabIcon.faFacebook
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default [...Object.keys((library as any).definitions.fas)].sort();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const brands = [...Object.keys((library as any).definitions.fab)].sort();
