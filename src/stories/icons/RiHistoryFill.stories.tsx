import { RiHistoryFill } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof RiHistoryFill> = {
  title: 'UI/Icons/RiHistoryFill',
  component: RiHistoryFill
}

export default meta;

type Story = StoryObj<typeof RiHistoryFill>;

type RiHistoryFillProps = {
  size?: string,
}

const args: RiHistoryFillProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}