import { SlSocialVkontakte } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof SlSocialVkontakte> = {
  title: 'icons/Vkontakte',
  component: SlSocialVkontakte
}

export default meta;

type Story = StoryObj<typeof SlSocialVkontakte>;

type VkontakteProps = {
  size?: string,
}

const args: VkontakteProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}