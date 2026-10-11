import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faChevronDown,
  faCircleNotch,
  faEllipsis,
  faEyeDropper,
} from "@fortawesome/free-solid-svg-icons";

// Only the icons D9 components render themselves; apps register every other icon with library.add
const definitions = [
  faCheck,
  faChevronDown,
  faCircleNotch,
  faEllipsis,
  faEyeDropper,
];

library.add(...definitions);

export default definitions.map(({ iconName }): string => iconName);

// Kept for apps that import it; D9 registers no brand icons
export const brands: string[] = [];
