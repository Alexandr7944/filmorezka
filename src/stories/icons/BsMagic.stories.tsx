import { BsMagic } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsMagic> = {
  title: 'UI/Icons/BsMagic',
  component: BsMagic
}

export default meta;

type Story = StoryObj<typeof BsMagic>;

type BsMagicProps = {
  size?: string,
}

const args: BsMagicProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}