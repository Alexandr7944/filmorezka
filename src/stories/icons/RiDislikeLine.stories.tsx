import { RiDislikeLine } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof RiDislikeLine> = {
  title: 'UI/Icons/RiDislikeLine',
  component: RiDislikeLine
}

export default meta;

type Story = StoryObj<typeof RiDislikeLine>;

type RiDislikeLineProps = {
  size?: string,
}

const args: RiDislikeLineProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}