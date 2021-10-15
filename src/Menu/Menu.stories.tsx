import { D9Menu, D9Icon, D9MenuItem } from "../index";

export default {
  title: "Basics/Menu",
  component: D9Menu,
  argTypes: {},
};

const Template = (args: Record<string, unknown>) => ({
  components: { D9Menu, D9MenuItem, D9Icon },
  setup() {
    return { args };
  },
  render() {
    return (
      <d9-menu class="text-blue-400">
        <d9-menu-item as="a" href="#" label="Account"></d9-menu-item>
        <d9-menu-item as="a" href="#" label="System Settings"></d9-menu-item>
        <d9-menu-item as="a" href="#" label="Logout"></d9-menu-item>
      </d9-menu>
    )
  }
});

export const Default = Template.bind({});
