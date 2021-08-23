import { D9Input } from '../index';
import { D9Label } from '../index';
import { icons } from '../index';
import { v4 as uuidv4 } from 'uuid';
import { ref } from "vue"

export default {
  title: 'Forms/Input',
  component: D9Input,
  argTypes: {
    type: { control: { type: 'inline-radio' }, options: ['text', 'password'] },
    size: { control: { type: 'inline-radio' }, options: ['small', 'medium', 'large'] },
    icon: { control: { type: 'select' }, options: icons },
  },
};

const Template = (args) => ({
  setup() {
    return {
      args,
      uid: ref(uuidv4())
    };
  },
  components: { D9Input, D9Label },
  template: `
  <div>
    <d9-label :id="uid" label="This is a label" />
    <d9-input v-bind="args" />
  </div>
  `
});

export const Default = Template.bind({});
Default.args = {
  placeholder: "Your Input"
}

export const Small = Template.bind({});
Small.args = {
  placeholder: "Your Input",
  size: "small"
}

export const Large = Template.bind({});
Large.args = {
  placeholder: "Your Input",
  size: "large"
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "Your Input",
  size: "medium",
  icon: "user"
}