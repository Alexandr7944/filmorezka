import { BsShare } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsShare> = {
  title: 'icons/Share',
  component: BsShare
}

export default meta;

type Story = StoryObj<typeof BsShare>;

type ShareProps = {
  size?: string,
}

const args: ShareProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}