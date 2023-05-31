import { BsEmojiSunglasses } from '../../components/Icons'; 
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsEmojiSunglasses> = {
  title: 'icons/Emoji',
  component: BsEmojiSunglasses
}

export default meta;

type Story = StoryObj<typeof BsEmojiSunglasses>;

type BsEmojiSunglassesProps = {
  size?: string,
}

const args: BsEmojiSunglassesProps = {
  size: '25px'
}

export const EmojiSunglasses: Story = {
  args: args
}