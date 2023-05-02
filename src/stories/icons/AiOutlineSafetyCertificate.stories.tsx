import { AiOutlineSafetyCertificate } from "../../components/Icons";
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof AiOutlineSafetyCertificate> = {
  title: 'UI/Icons/AiOutlineSafetyCertificate',
  component: AiOutlineSafetyCertificate
}

export default meta;

type Story = StoryObj<typeof AiOutlineSafetyCertificate>;

type AiOutlineSafetyCertificateProps = {
  size?: string,
}

const args: AiOutlineSafetyCertificateProps = {
  size: '25px'
}

export const Default: Story = {
  args: args
}