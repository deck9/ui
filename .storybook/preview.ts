import "../styles/app.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Demo icons the stories use; like any app, Storybook registers its own icons
library.add(faChevronLeft, faChevronRight, faEnvelope, faUser);

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: "html",
    stylePreview: true,
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "white",
        value: "#ffffff",
      },
      {
        name: "light",
        value: "#f9f8f6",
      },
      {
        name: "dark",
        value: "#0f172a",
      },
    ],
    grid: {
      cellSize: 16,
      opacity: 0.2,
      cellAmount: 6,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
};
