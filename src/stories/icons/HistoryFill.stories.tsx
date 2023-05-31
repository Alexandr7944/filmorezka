import { RiHistoryFill } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof RiHistoryFill> = {
  title: 'icons/History',
  component: RiHistoryFill
}

export default meta;

type Story = StoryObj<typeof RiHistoryFill>;

type HistoryFillProps = {
  size?: string,
}

const args: HistoryFillProps = {
  size: '25px'
}

export const HistoryFill: Story = {
  args: args
}