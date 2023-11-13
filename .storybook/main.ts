const path = require("path");

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
  ],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      include: path.resolve(__dirname, "../"),
    });

    config.resolve.extensions.push(".ts", ".tsx");

    config.resolve.alias["@"] = path.resolve(__dirname, "../src");

    return config;
  },

  docs: {
    autodocs: true,
  },

  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
};
