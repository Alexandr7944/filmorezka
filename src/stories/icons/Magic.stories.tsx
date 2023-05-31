import { BsMagic } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsMagic> = {
  title: 'icons/Magic',
  component: BsMagic
}

export default meta;

type Story = StoryObj<typeof BsMagic>;

type MagicProps = {
  size?: string,
}

const args: MagicProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}