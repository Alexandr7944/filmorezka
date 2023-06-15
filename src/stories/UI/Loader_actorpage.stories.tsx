import { LoaderUI } from "../../components/UI/ActorPage/LoaderUI";
import { LoaderProps } from '../../components/UI/ActorPage/LoaderUI/LoaderUI';
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof LoaderUI> = {
  title: 'UI/Loader_actorpage',
  component: LoaderUI
}

export default meta;

type Story = StoryObj<typeof LoaderUI>;

const args: LoaderProps = {
  color1: "#ea003d",
  color2: "#af3dff",
}


export const Default: Story = {
  args: args
}