import { SlDiamond } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof SlDiamond> = {
  title: 'icons/Diamond',
  component: SlDiamond
}

export default meta;

type Story = StoryObj<typeof SlDiamond>;

type DiamondProps = {
  size?: string,
}

const args: DiamondProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}