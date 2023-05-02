import { BsCart2 } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsCart2> = {
  title: 'UI/Icons/BsCart2',
  component: BsCart2
}

export default meta;

type Story = StoryObj<typeof BsCart2>;

type BsCart2Props = {
  size?: string,
}

const args: BsCart2Props = {
  size: '25px'
}

export const Default: Story = {
  args: args
}