import { BiSearch } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiSearch> = {
  title: 'icons/Search',
  component: BiSearch
}

export default meta;

type Story = StoryObj<typeof BiSearch>;

type SearchProps = {
  size?: string,
}

const args: SearchProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}