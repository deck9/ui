import { D9Menu, D9Icon, D9MenuLink } from "../index";

export default {
  title: "Basics/Menu",
  component: D9Menu,
  decorators: [
    () => ({
      template: '<div style="margin-left: 19%;" class="py-32 "><story/></div>',
    }),
  ],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["left", "right"],
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
  usePortal: ".sb-show-main",
};

// A trigger with visible text keeps that text as its name; the label is not added.
export const TriggerWithText: any = (args: Record<string, unknown>) => ({
  components: { D9Menu, D9MenuLink },
  setup() {
    return { args };
  },
  template: `
      <D9Menu v-bind="args">
        <template #button>
          <span class="rounded px-2 py-1 text-xs bg-grey-200">Published</span>
        </template>
        <D9MenuLink as="a" href="#" label="Set to Unpublished"></D9MenuLink>
      </D9Menu>
  `,
});
TriggerWithText.args = {
  position: "right",
  usePortal: false,
};
