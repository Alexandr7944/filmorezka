import { BsDownload } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsDownload> = {
  title: 'icons/Download',
  component: BsDownload
}

export default meta;

type Story = StoryObj<typeof BsDownload>;

type DownloadProps = {
  size?: string,
}

const args: DownloadProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}