import { D9Menu, D9Icon, D9MenuLink } from "../index";

export default {
  title: "Basics/Menu",
  component: D9Menu,
  decorators: [() => ({ template: '<div class="p-6 md:p-12"><story/></div>' })],
  argTypes: {
    position: {
      control: { type: "select", options: ["left", "right"] },
    }
  },
};

const Template = (args: Record<string, unknown>) => ({
  components: { D9Menu, D9MenuLink, D9Icon },
  setup() {
    return { args };
  },
  render() {
    return (
      <div>
        <span class="text-blue-500 mr-2">Einstellungen</span>
        <d9-menu class="text-blue-400" {...args}>
          <d9-menu-link as="a" href="#" label="Account"></d9-menu-link>
          <d9-menu-link as="a" href="#" label="System Settings"></d9-menu-link>
          <d9-menu-link as="a" href="#" label="Logout"></d9-menu-link>
        </d9-menu>
      </div>
    )
  }
});

export const PositionRight: any = Template.bind({});
PositionRight.args = {
  position: 'right',
  usePortal: false,
};

export const PositionLeft: any = Template.bind({});
PositionLeft.args = {
  position: 'left',
  usePortal: false,
};

export const UsePortal: any = Template.bind({});
UsePortal.args = {
  position: 'right',
  usePortal: true,
};
