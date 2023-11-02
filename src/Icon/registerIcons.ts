import { library } from "@fortawesome/fontawesome-svg-core";
import * as fasIcons from "@fortawesome/free-solid-svg-icons";
import * as fabIcon from "@fortawesome/free-brands-svg-icons";
import numericInput from "./custom/numeric-input.js";

library.add(
  fasIcons.faArrowUp19,
  fasIcons.faAt,
  fasIcons.faBold,
  fasIcons.faBolt,
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
  fasIcons.faCloudDownload,
  fasIcons.faCloudUpload,
  fasIcons.faCog,
  fasIcons.faCrown,
  fasIcons.faDoorOpen,
  fasIcons.faDotCircle,
  fasIcons.faEllipsis,
  fasIcons.faEllipsisVertical,
  fasIcons.faEnvelope,
  fasIcons.faExclamationTriangle,
  fasIcons.faExternalLink,
  fasIcons.faEyeDropper,
  fasIcons.faFileLines,
  fasIcons.faFileUpload,
  fasIcons.faFilter,
  fasIcons.faFingerprint,
  fasIcons.faGlobe,
  fasIcons.faGripHorizontal,
  fasIcons.faGripVertical,
  fasIcons.faHandPointRight,
  fasIcons.faHashtag,
  fasIcons.faHeart,
  fasIcons.faInfoCircle,
  fasIcons.faItalic,
  fasIcons.faLink,
  fasIcons.faLock,
  fasIcons.faLockOpen,
  fasIcons.faMedal,
  fasIcons.faMessage,
  fasIcons.faPencilAlt,
  fasIcons.faPenToSquare,
  fasIcons.faPhone,
  fasIcons.faPlayCircle,
  fasIcons.faPlus,
  fasIcons.faPlusCircle,
  fasIcons.faPoo,
  fasIcons.faPuzzlePiece,
  fasIcons.faReply,
  fasIcons.faReplyAll,
  fasIcons.faRobot,
  fasIcons.faSave,
  fasIcons.faShield,
  fasIcons.faSignal,
  fasIcons.faSignature,
  fasIcons.faSquareCheck,
  fasIcons.faStar,
  fasIcons.faTimes,
  fasIcons.faTrash,
  fasIcons.faTree,
  fasIcons.faTrophy,
  fasIcons.faTurnDown,
  fasIcons.faUpload,
  fasIcons.faUser,
  fasIcons.faUserShield,

  // Brands
  fabIcon.faTwitter,
  fabIcon.faInstagram,
  fabIcon.faGithub,
  fabIcon.faLinkedin,
  fabIcon.faFacebook,

  // Custom
  numericInput.definition
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default [...Object.keys((library as any).definitions.fas)].sort();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const brands = [...Object.keys((library as any).definitions.fab)].sort();
