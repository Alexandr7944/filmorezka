import { BsFillPersonFill } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsFillPersonFill> = {
  title: 'UI/Icons/BsFillPersonFill',
  component: BsFillPersonFill
}

export default meta;

type Story = StoryObj<typeof BsFillPersonFill>;

type BsFillPersonFillProps = {
  size?: string,
}

const args: BsFillPersonFillProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}