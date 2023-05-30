import { BsFillPersonFill } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsFillPersonFill> = {
  title: 'icons/Person',
  component: BsFillPersonFill
}

export default meta;

type Story = StoryObj<typeof BsFillPersonFill>;

type PersonFillProps = {
  size?: string,
}

const args: PersonFillProps = {
  size: '25px'
}

export const PersonFill: Story = {
  args: args
}