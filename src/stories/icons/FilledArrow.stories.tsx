import { ArrowProps } from '@/components/Icons/Arrow';
import { Arrow } from '../../components/Icons';
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof Arrow> = {
  title: 'Icons/Arrow',
  component: Arrow
}

export default meta;

type Story = StoryObj<typeof Arrow>;

const args: ArrowProps = {
  fill: '#000',
  width: '60px',
  height: '30px'
}

export const FilledArrow: Story = {
  args: args
}
