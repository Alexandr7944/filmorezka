import { SlScreenDesktop } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof SlScreenDesktop> = {
  title: 'UI/Icons/SlScreenDesktop',
  component: SlScreenDesktop
}

export default meta;

type Story = StoryObj<typeof SlScreenDesktop>;

type SlScreenDesktopProps = {
  size?: string,
}

const args: SlScreenDesktopProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}