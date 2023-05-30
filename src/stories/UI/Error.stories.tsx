import { Error } from '../../components/UI/Error';
import { ErrorProps } from '../../components/UI/Error/Error';
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof Error> = {
  title: 'UI/Error',
  component: Error
}

export default meta;

type Story = StoryObj<typeof Error>;

const args: ErrorProps = {
  title: 'Ошибка',
  description: 'Неправильные указаны данные.'
}

export const Default: Story = {
  args: args
}