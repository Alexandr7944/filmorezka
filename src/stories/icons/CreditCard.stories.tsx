import { BsCreditCard2Front } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsCreditCard2Front> = {
  title: 'icons/CreditCard',
  component: BsCreditCard2Front
}

export default meta;

type Story = StoryObj<typeof BsCreditCard2Front>;

type CreditCardProps = {
  size?: string,
}

const args: CreditCardProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}