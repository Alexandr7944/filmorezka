import { BsCreditCard2Front } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsCreditCard2Front> = {
  title: 'UI/Icons/BsCreditCard2Front',
  component: BsCreditCard2Front
}

export default meta;

type Story = StoryObj<typeof BsCreditCard2Front>;

type BsCreditCard2FrontProps = {
  size?: string,
}

const args: BsCreditCard2FrontProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}