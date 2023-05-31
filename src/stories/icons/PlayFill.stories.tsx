import { BsFillPlayFill } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsFillPlayFill> = {
  title: 'icons/Play',
  component: BsFillPlayFill
}

export default meta;

type Story = StoryObj<typeof BsFillPlayFill>;

type PlayFillProps = {
  size?: string,
}

const args: PlayFillProps = {
  size: '25px'
}

export const PlayFill: Story = {
  args: args
}