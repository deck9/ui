import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import * as fabIcon from "@fortawesome/free-brands-svg-icons";

library.add(fas);

library.add(
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
