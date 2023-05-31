import { BiErrorCircle } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiErrorCircle> = {
  title: 'icons/Error',
  component: BiErrorCircle
}

export default meta;

type Story = StoryObj<typeof BiErrorCircle>;

type ErrorCircleProps = {
  size?: string,
}

const args: ErrorCircleProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}