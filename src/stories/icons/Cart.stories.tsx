import { BsCart2 } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsCart2> = {
  title: 'icons/Cart',
  component: BsCart2
}

export default meta;

type Story = StoryObj<typeof BsCart2>;

type CartProps = {
  size?: string,
}

const args: CartProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}