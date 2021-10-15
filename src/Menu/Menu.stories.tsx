import { D9Menu, D9Icon, D9MenuLink } from "../index";

export default {
  title: "Basics/Menu",
  component: D9Menu,
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
      <d9-menu class="text-blue-400" {...args}>
        <d9-menu-link as="a" href="#" label="Account"></d9-menu-link>
        <d9-menu-link as="a" href="#" label="System Settings"></d9-menu-link>
        <d9-menu-link as="a" href="#" label="Logout"></d9-menu-link>
      </d9-menu>
    )
  }
});

export const Right: any = Template.bind({});
Right.args = {
  position: 'right'
};

export const Left: any = Template.bind({});
Left.args = {
  position: 'left'
};
