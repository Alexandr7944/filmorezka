import { AiOutlineEyeInvisible } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof AiOutlineEyeInvisible> = {
  title: 'icons/Eye',
  component: AiOutlineEyeInvisible
}

export default meta;

type Story = StoryObj<typeof AiOutlineEyeInvisible>;

type EyeInvisibleProps = {
  size?: string,
}

const args: EyeInvisibleProps = {
  size: '25px'
}

export const EyeInvisible: Story = {
  args: args
}