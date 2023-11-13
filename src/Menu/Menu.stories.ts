import { D9Menu, D9Icon, D9MenuLink } from "../index";

export default {
  title: "Basics/Menu",
  component: D9Menu,
  decorators: [
    () => ({ template: '<div class="px-12 md:px-24 py-32 "><story/></div>' }),
  ],
  argTypes: {
    position: {
      control: { type: "select", options: ["left", "right"] },
    },
  },
};

const Template = (args: Record<string, unknown>) => ({
  components: { D9Menu, D9MenuLink, D9Icon },
  setup() {
    return { args };
  },
  template: `
      <D9Menu class="text-blue-400" v-bind="args">
        <D9MenuLink as="a" href="#" label="Account"></D9MenuLink>
        <D9MenuLink
          as="a"
          href="#"
          label="Notifications"
          meta="34"
        ></D9MenuLink>
        <D9MenuLink as="a" href="#" label="System Settings"></D9MenuLink>
        <D9MenuLink as="a" href="#" label="Logout"></D9MenuLink>
      </D9Menu>
  `,
});

export const PositionRight: any = Template.bind({});
PositionRight.args = {
  position: "right",
  usePortal: false,
};

export const PositionLeft: any = Template.bind({});
PositionLeft.args = {
  position: "left",
  usePortal: false,
};

export const UsePortal: any = Template.bind({});
UsePortal.args = {
  position: "right",
  usePortal: true,
};

export const UsePortalWithCustomTarget: any = Template.bind({});
UsePortalWithCustomTarget.args = {
  position: "right",
  usePortal: "#root",
};
