import { AiOutlineStar } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof AiOutlineStar> = {
  title: 'UI/Icons/AiOutlineStar',
  component: AiOutlineStar
}

export default meta;

type Story = StoryObj<typeof AiOutlineStar>;

type AiOutlineStarProps = {
  size?: string,
}

const args: AiOutlineStarProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}