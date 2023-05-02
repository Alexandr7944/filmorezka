import { MdOutlineNotificationsActive } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof MdOutlineNotificationsActive> = {
  title: 'UI/Icons/MdOutlineNotificationsActive',
  component: MdOutlineNotificationsActive
}

export default meta;

type Story = StoryObj<typeof MdOutlineNotificationsActive>;

type MdOutlineNotificationsActiveProps = {
  size?: string,
}

const args: MdOutlineNotificationsActiveProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}