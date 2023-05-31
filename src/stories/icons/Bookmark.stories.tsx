import { BiBookmark } from '../../components/Icons'; 
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiBookmark> = {
  title: 'icons/Bookmark',
  component: BiBookmark
}

export default meta;

type Story = StoryObj<typeof BiBookmark>;

type BiBookmarkProps = {
  size?: string,
}

const args: BiBookmarkProps = {
  size: '25px'
}

export const Bookmark: Story = {
  args: args
}