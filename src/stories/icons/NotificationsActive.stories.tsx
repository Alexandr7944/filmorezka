import { MdOutlineNotificationsActive } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof MdOutlineNotificationsActive> = {
  title: 'icons/Notifications',
  component: MdOutlineNotificationsActive
}

export default meta;

type Story = StoryObj<typeof MdOutlineNotificationsActive>;

type NotificationsActiveProps = {
  size?: string,
}

const args: NotificationsActiveProps = {
  size: '25px'
}

export const NotificationsActive: Story = {
  args: args
}