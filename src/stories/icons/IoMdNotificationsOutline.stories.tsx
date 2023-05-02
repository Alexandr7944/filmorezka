import { IoMdNotificationsOutline } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof IoMdNotificationsOutline> = {
  title: 'UI/Icons/IoMdNotificationsOutline',
  component: IoMdNotificationsOutline
}

export default meta;

type Story = StoryObj<typeof IoMdNotificationsOutline>;

type IoMdNotificationsOutlineProps = {
  size?: string,
}

const args: IoMdNotificationsOutlineProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}