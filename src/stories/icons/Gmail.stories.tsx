import { SiGmail } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof SiGmail> = {
  title: 'icons/Gmail',
  component: SiGmail
}

export default meta;

type Story = StoryObj<typeof SiGmail>;

type VkontakteProps = {
  size?: string,
}

const args: VkontakteProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}