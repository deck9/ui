module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-styling-webpack",
      options: {
        postCss: {
          implementation: require("postcss"),
        },
      },
    },
    "storybook-dark-mode",
    "@storybook/addon-mdx-gfm",
  ],

  docs: {
    autodocs: true,
  },

  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};
