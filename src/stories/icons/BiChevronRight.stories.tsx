import { BiChevronRight } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiChevronRight> = {
  title: 'UI/Icons/BiChevronRight',
  component: BiChevronRight
}

export default meta;

type Story = StoryObj<typeof BiChevronRight>;

type BiChevronRightProps = {
  size?: string,
}

const args: BiChevronRightProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}