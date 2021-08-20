import Icon from './Icon.vue';
import { icons } from './Icon.vue';

export default {
  title: 'BotReach/Icon',
  component: Icon,
  argTypes: {
      size: {
          control: {type: 'select', options: ['xs', '1x', '2x', '3x', '4x']}
      },
      name: {
          control: {type: 'select', options: icons},
      },
  },
  decorators: [() => ({ template: '<div class="border-2 border-dashed border-grey-200 px-8 py-4 inline-block text-grey-600"><story/></div>' })],
};

const Template = (args, {argTypes}) => ({
    components: {Icon},
    setup() {
      return {args};
    },
    template: '<icon v-bind="args" />'
});

export const Primary = Template.bind({});
Primary.args = {
    name: 'user',
    size: '1x',
};

export const Small = Template.bind({});
Small.args = {
    name: 'user',
    size: 'xs',
};

export const Large = Template.bind({});
Large.args = {
    name: 'user',
    size: '2x',
};
