import { library } from "@fortawesome/fontawesome-svg-core";
import * as fasIcons from "@fortawesome/free-solid-svg-icons";
import * as fabIcon from "@fortawesome/free-brands-svg-icons";

library.add(
  fasIcons.faAt,
  fasIcons.faBold,
  fasIcons.faCalendar,
  fasIcons.faChartPie,
  fasIcons.faCheck,
  fasIcons.faCheckCircle,
  fasIcons.faChevronDown,
  fasIcons.faChevronLeft,
  fasIcons.faChevronRight,
  fasIcons.faChevronUp,
  fasIcons.faCircleCheck,
  fasIcons.faCircleNotch,
  fasIcons.faClipboard,
  fasIcons.faCog,
  fasIcons.faDoorOpen,
  fasIcons.faDotCircle,
  fasIcons.faEllipsis,
  fasIcons.faEllipsisVertical,
  fasIcons.faEnvelope,
  fasIcons.faExclamationTriangle,
  fasIcons.faFileLines,
  fasIcons.faFileUpload,
  fasIcons.faFingerprint,
  fasIcons.faGlobe,
  fasIcons.faGripHorizontal,
  fasIcons.faGripVertical,
  fasIcons.faHandPointRight,
  fasIcons.faHashtag,
  fasIcons.faInfoCircle,
  fasIcons.faItalic,
  fasIcons.faLink,
  fasIcons.faMedal,
  fasIcons.faPencilAlt,
  fasIcons.faPenToSquare,
  fasIcons.faPhone,
  fasIcons.faPlayCircle,
  fasIcons.faPlus,
  fasIcons.faPlusCircle,
  fasIcons.faReply,
  fasIcons.faReplyAll,
  fasIcons.faRobot,
  fasIcons.faSave,
  fasIcons.faShield,
  fasIcons.faSignature,
  fasIcons.faSquareCheck,
  fasIcons.faStar,
  fasIcons.faTimes,
  fasIcons.faTrash,
  fasIcons.faTrophy,
  fasIcons.faUpload,
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
