import { library } from "@fortawesome/fontawesome-svg-core";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { D9Icon } from "../index";

// Neither icon is in D9's own list: registered here the way an app does
library.add(faRocket, faGithub);

export default {
  title: "Basics/Icon",
  component: D9Icon,
  argTypes: {
    size: {
      options: ["xs", "1x", "2x", "3x", "4x"],
      control: { type: "inline-radio" },
    },
  },
  decorators: [
    () => ({
      template:
        '<div class="px-8 py-4 inline-block text-grey-500"><story/></div>',
    }),
  ],
};

const Template = (args) => ({
  components: { D9Icon },
  setup() {
    return { args };
  },
  template: '<D9Icon v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  name: "user",
  size: "1x",
};

export const Small = Template.bind({});
Small.args = {
  name: "user",
  size: "xs",
};

export const Large = Template.bind({});
Large.args = {
  name: "user",
  size: "2x",
};

export const AppRegistered = Template.bind({});
AppRegistered.args = {
  name: "rocket",
  size: "2x",
};

export const AppRegisteredBrand = Template.bind({});
AppRegisteredBrand.args = {
  name: "github",
  size: "2x",
};
