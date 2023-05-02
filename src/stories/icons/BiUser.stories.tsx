import { BiUser } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiUser> = {
  title: 'UI/Icons/BiUser',
  component: BiUser
}

export default meta;

type Story = StoryObj<typeof BiUser>;

type BiUserProps = {
  size?: string,
}

const args: BiUserProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}