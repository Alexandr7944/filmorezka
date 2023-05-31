import { IoMdNotificationsOutline } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof IoMdNotificationsOutline> = {
  title: 'icons/Notifications',
  component: IoMdNotificationsOutline
}

export default meta;

type Story = StoryObj<typeof IoMdNotificationsOutline>;

type NotificationsProps = {
  size?: string,
}

const args: NotificationsProps = {
  size: '25px'
}

export const Notifications: Story = {
  args: args
}