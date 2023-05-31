import { BiChevronRight } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiChevronRight> = {
  title: 'icons/Arrow',
  component: BiChevronRight
}

export default meta;

type Story = StoryObj<typeof BiChevronRight>;

type ChevronRightProps = {
  size?: string,
}

const args: ChevronRightProps = {
  size: '25px'
}

export const ChevronRight: Story = {
  args: args
}