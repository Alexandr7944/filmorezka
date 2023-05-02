import { BsFillPlayFill } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsFillPlayFill> = {
  title: 'UI/Icons/BsFillPlayFill',
  component: BsFillPlayFill
}

export default meta;

type Story = StoryObj<typeof BsFillPlayFill>;

type BsFillPlayFillProps = {
  size?: string,
}

const args: BsFillPlayFillProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}