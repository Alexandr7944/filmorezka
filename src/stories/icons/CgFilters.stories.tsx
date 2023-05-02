import { CgFilters } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof CgFilters> = {
  title: 'UI/Icons/CgFilters',
  component: CgFilters
}

export default meta;

type Story = StoryObj<typeof CgFilters>;

type CgFiltersProps = {
  size?: string,
}

const args: CgFiltersProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}