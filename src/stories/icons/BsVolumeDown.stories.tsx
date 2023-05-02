import { BsVolumeDown } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsVolumeDown> = {
  title: 'UI/Icons/BsVolumeDown',
  component: BsVolumeDown
}

export default meta;

type Story = StoryObj<typeof BsVolumeDown>;

type BsVolumeDownProps = {
  size?: string,
}

const args: BsVolumeDownProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}