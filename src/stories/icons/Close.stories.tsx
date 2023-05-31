import { CgClose } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof CgClose> = {
  title: 'icons/Close',
  component: CgClose
}

export default meta;

type Story = StoryObj<typeof CgClose>;

type CloseProps = {
  size?: string,
}

const args: CloseProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}