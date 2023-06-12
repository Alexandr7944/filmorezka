import { Teaser } from '../../components/UI/Teaser';
import { Meta, StoryObj  } from '@storybook/react';

const meta: Meta<typeof Teaser> = {
  title: 'UI/Teaser',
  component: Teaser
}

export default meta;

type Story = StoryObj<typeof Teaser>;

const images: string[] = [
  'https://hit-print.ru/upload/iblock/637/637f1198fe9a718764fa82131303b2b3.jpg',
  'https://d9ae6ad5-3627-4bf2-85a7-22bbd5549e94.selcdn.net/uploads/picture/picture/330926/large_4607010740191.JPG',
  'https://emksp.ru/files/fba/fba4fd332567a5ee2f1e7b65f5c148f0.jpg',
  'https://hit-print.ru/upload/iblock/637/637f1198fe9a718764fa82131303b2b3.jpg',
  'https://d9ae6ad5-3627-4bf2-85a7-22bbd5549e94.selcdn.net/uploads/picture/picture/330926/large_4607010740191.JPG',
  'https://emksp.ru/files/fba/fba4fd332567a5ee2f1e7b65f5c148f0.jpg',
  'https://hit-print.ru/upload/iblock/637/637f1198fe9a718764fa82131303b2b3.jpg',
  'https://d9ae6ad5-3627-4bf2-85a7-22bbd5549e94.selcdn.net/uploads/picture/picture/330926/large_4607010740191.JPG',
  'https://emksp.ru/files/fba/fba4fd332567a5ee2f1e7b65f5c148f0.jpg',
]

const args = {
  images
}

export const Default: Story = {
  args: args
}