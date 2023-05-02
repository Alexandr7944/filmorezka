import { SlDiamond } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof SlDiamond> = {
  title: 'UI/Icons/SlDiamond',
  component: SlDiamond
}

export default meta;

type Story = StoryObj<typeof SlDiamond>;

type SlDiamondProps = {
  size?: string,
}

const args: SlDiamondProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}