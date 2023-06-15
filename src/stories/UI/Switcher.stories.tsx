import { Switcher } from "../../components/UI/LanguageSwitcher";
import { SwitcherProps } from '../../components/UI/LanguageSwitcher/Switcher';
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof Switcher> = {
  title: 'UI/Switcher',
  component: Switcher
}

export default meta;

type Story = StoryObj<typeof Switcher>;

const args: SwitcherProps = {
  
}


export const Default: Story = {
  
}