import { BsBookmarkHeart } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsBookmarkHeart> = {
  title: 'UI/Icons/BsBookmarkHeart',
  component: BsBookmarkHeart
}

export default meta;

type Story = StoryObj<typeof BsBookmarkHeart>;

type BsBookmarkHeartProps = {
  size?: string,
}

const args: BsBookmarkHeartProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}