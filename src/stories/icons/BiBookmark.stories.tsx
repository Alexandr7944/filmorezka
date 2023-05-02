import { BiBookmark } from 'react-icons/bi'; 
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiBookmark> = {
  title: 'UI/Icons/BiBookmark',
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

export const Default: Story = {
  args: args
}