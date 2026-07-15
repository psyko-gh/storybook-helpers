import { getStorybookHelpers } from "../../../src/index.js";
import { html } from "lit";
import "./my-element4.js";
import type { StoryObj } from "@storybook/web-components-vite";
import type { MyElement4 } from "./my-element4.js";

let { args, events, argTypes, template } = getStorybookHelpers("my-element4");

// argTypes.someOptionalFunction.control = false;
const meta = {
  title: "My Element4",
  component: "my-element4",
  args,
  argTypes,
  parameters: {
    actions: {
      handles: events,
    },
  },
};
export default meta;

const fixedArgs = {
  };
export const Default: StoryObj<MyElement4 & typeof args> = {
  render: (args) => {
    return html`
        ${template(args)}
        <hr/>
    `
  },
  args: {
  },
};
