import { AiOutlineEye } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof AiOutlineEye> = {
  title: 'icons/Eye',
  component: AiOutlineEye
}

export default meta;

type Story = StoryObj<typeof AiOutlineEye>;

type EyeProps = {
  size?: string,
}

const args: EyeProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}