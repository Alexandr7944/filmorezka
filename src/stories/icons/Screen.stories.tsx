import { SlScreenDesktop } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof SlScreenDesktop> = {
  title: 'icons/Screen',
  component: SlScreenDesktop
}

export default meta;

type Story = StoryObj<typeof SlScreenDesktop>;

type ScreenProps = {
  size?: string,
}

const args: ScreenProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}