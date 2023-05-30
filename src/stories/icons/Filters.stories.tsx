import { CgFilters } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof CgFilters> = {
  title: 'icons/Filters',
  component: CgFilters
}

export default meta;

type Story = StoryObj<typeof CgFilters>;

type FiltersProps = {
  size?: string,
}

const args: FiltersProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}