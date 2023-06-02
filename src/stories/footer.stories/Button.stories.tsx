import Button from '../../components/UI/FooterUI/Button/Button';
import { Meta, StoryObj  } from '@storybook/react';
import style from "../../components/UI/FooterUI/Button/button-style.module.scss";

const meta: Meta<typeof Button> = {
  title: 'Footer/Button',
  component: Button
}

export default meta;
type Story = StoryObj<typeof Button>;



export const Primary: Story = {
    args: {
        title: 'Написать в чате',
        variant: style.footer__buttonstyle
    },
  };
  export const Secondary: Story = {
    args: {
        title: 'Активация сертификата',
        variant: style.footer__buttonstyle2
    },
  };
