import "../styles/app.less";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    classTarget: 'html',
    stylePreview: true
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'light',
        value: '#ebf1ff',
      },
      {
        name: 'dark',
        value: '#0f172a',
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
}
