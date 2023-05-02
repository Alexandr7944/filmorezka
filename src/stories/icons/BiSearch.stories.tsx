import { BiSearch } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiSearch> = {
  title: 'UI/Icons/BiSearch',
  component: BiSearch
}

export default meta;

type Story = StoryObj<typeof BiSearch>;

type BiSearchProps = {
  size?: string,
}

const args: BiSearchProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}