import { RiSlideshow3Line } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof RiSlideshow3Line> = {
  title: 'icons/Slideshow',
  component: RiSlideshow3Line
}

export default meta;

type Story = StoryObj<typeof RiSlideshow3Line>;

type SlideshowProps = {
  size?: string,
}

const args: SlideshowProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}