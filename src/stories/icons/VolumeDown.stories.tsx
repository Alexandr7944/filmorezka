import { BsVolumeDown } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsVolumeDown> = {
  title: 'icons/Volume',
  component: BsVolumeDown
}

export default meta;

type Story = StoryObj<typeof BsVolumeDown>;

type VolumeDownProps = {
  size?: string,
}

const args: VolumeDownProps = {
  size: '25px'
}

export const VolumeDown: Story = {
  args: args
}