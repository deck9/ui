const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-postcss",
    "storybook-dark-mode",
  ],
  "core": {
    "builder": "webpack5"
  },

  webpackFinal: async (config) => {

    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.alias["@"] = path.resolve(__dirname, '../src');

    return config;
  },
}
