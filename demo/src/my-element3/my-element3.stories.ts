import { getStorybookHelpers } from "../../../src/index.js";
import { html } from "lit";
import "./my-element3.js";
import type { StoryObj } from "@storybook/web-components-vite";
import type { MyElement3 } from "./my-element3.js";

const { args, events, argTypes, template } = getStorybookHelpers("my-element3");
console.log(args)
console.log(argTypes)
// argTypes.someOptionalFunction.control = false;
const meta = {
  title: "My Element3",
  component: "my-element3",
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};
export default meta;

export const Default: StoryObj<MyElement3 & typeof args> = {
  render: (args) => html` ${template(args)} `,
  args: {},
};
