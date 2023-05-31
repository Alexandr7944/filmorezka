import { MdOutlineEdit } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof MdOutlineEdit> = {
  title: 'icons/Edit',
  component: MdOutlineEdit
}

export default meta;

type Story = StoryObj<typeof MdOutlineEdit>;

type EditProps = {
  size?: string,
}

const args: EditProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}