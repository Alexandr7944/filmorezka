import { Teaser } from '../../components/UI/Teaser';
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof Teaser> = {
  title: 'UI/Teaser',
  component: Teaser
}

export default meta;

type Story = StoryObj<typeof Teaser>;

export const Default: Story = {
  
}