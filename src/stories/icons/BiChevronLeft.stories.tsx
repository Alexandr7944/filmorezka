import { BiChevronLeft } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiChevronLeft> = {
  title: 'UI/Icons/BiChevronLeft',
  component: BiChevronLeft
}

export default meta;

type Story = StoryObj<typeof BiChevronLeft>;

type BiChevronLeftProps = {
  size?: string,
}

const args: BiChevronLeftProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}