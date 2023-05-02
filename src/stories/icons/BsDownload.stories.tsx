import { BsDownload } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof BsDownload> = {
  title: 'UI/Icons/BsDownload',
  component: BsDownload
}

export default meta;

type Story = StoryObj<typeof BsDownload>;

type BsDownloadProps = {
  size?: string,
}

const args: BsDownloadProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}