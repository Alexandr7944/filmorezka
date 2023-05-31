import { Loader } from '../../components/UI/Loader';
import { LoaderProps } from '../../components/UI/Loader/Loader';
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof Loader> = {
  title: 'UI/Loader',
  component: Loader
}

export default meta;

type Story = StoryObj<typeof Loader>;

const args: LoaderProps = {
  color: '#53234a',
}


export const Default: Story = {
  args: args
}