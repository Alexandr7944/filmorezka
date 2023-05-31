import { Button } from '../../components/UI/Button';
import { ButtonProps } from '../../components/UI/Button/Button';
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button
}

export default meta;

type Story = StoryObj<typeof Button>;

const args: ButtonProps = {
  children: 'button'
}

export const Default: Story = {
  args: args
}