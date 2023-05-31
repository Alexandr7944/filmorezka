import { BsBookmarkHeart } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsBookmarkHeart> = {
  title: 'icons/Bookmark',
  component: BsBookmarkHeart
}

export default meta;

type Story = StoryObj<typeof BsBookmarkHeart>;

type BookmarkHeartProps = {
  size?: string,
}

const args: BookmarkHeartProps = {
  size: '25px'
}

export const BookmarkHeart: Story = {
  args: args
}