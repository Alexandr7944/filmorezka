import { RiSlideshow3Line } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof RiSlideshow3Line> = {
  title: 'UI/Icons/RiSlideshow3Line',
  component: RiSlideshow3Line
}

export default meta;

type Story = StoryObj<typeof RiSlideshow3Line>;

type RiSlideshow3LineProps = {
  size?: string,
}

const args: RiSlideshow3LineProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}