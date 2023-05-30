import { BiChevronLeft } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiChevronLeft> = {
  title: 'icons/Arrow',
  component: BiChevronLeft
}

export default meta;

type Story = StoryObj<typeof BiChevronLeft>;

type ChevronLeftProps = {
  size?: string,
}

const args: ChevronLeftProps = {
  size: '25px'
}

export const ChevronLeft: Story = {
  args: args
}