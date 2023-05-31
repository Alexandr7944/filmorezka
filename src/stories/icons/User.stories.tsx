import { BiUser } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BiUser> = {
  title: 'icons/User',
  component: BiUser
}

export default meta;

type Story = StoryObj<typeof BiUser>;

type UserProps = {
  size?: string,
}

const args: UserProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}