import { RiDislikeLine } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof RiDislikeLine> = {
  title: 'icons/Dislike',
  component: RiDislikeLine
}

export default meta;

type Story = StoryObj<typeof RiDislikeLine>;

type DislikeProps = {
  size?: string,
}

const args: DislikeProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}