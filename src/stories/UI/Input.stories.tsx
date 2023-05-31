import { useState } from 'react';
import { BiUser } from '../../components/Icons';
import { Input } from '../../components/UI/Input';
import { InputProps } from '../../components/UI/Input/Input';
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    type: {
      type: 'string',
      description: 'тип input',
      defaultValue: 'email',
      options: ['email', 'password'],
      control: {
          type: 'radio'
      }
    },
    icon: {
      description: 'иконка внутри input',
      defaultValue: 'User',
      options: ['User'],
      mapping: {
          'User': BiUser
      },
      control: {
          type: 'radio'
      }
    },
    isError: {
      description: 'данные input некорректны',
      defaultValue: false,
      control: {
          type: 'boolean'
      }
    }
  }
}

export default meta;

type Story = StoryObj<typeof Input>;

const args: InputProps = {
    placeholder: 'Email',
    type: 'email',
    icon: BiUser,
    isError: false
}

export const Default: Story = {
  args: args
}