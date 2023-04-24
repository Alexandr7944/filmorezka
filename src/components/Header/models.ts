import { IconType } from 'react-icons';
import { TypeContent} from './data';

interface IFormat  {
  nameFormat: string,
  genres: string[],
  countries: string[],
  years: number[],
  filters: string[]
}

interface INotification  {

}

interface ILink {
  icon: IconType
  title: string
  description?: string,
  mark?: boolean
}

interface IOption {
  title: string
}

interface IUser  {
  links: ILink[]
  options: IOption[]
}

type HeaderContent = IFormat | INotification | IUser;

interface INavigationItem {
  title: string,
  content?: HeaderContent,
  typeContent?: TypeContent
}

export type {
  HeaderContent, 
  IFormat, 
  INotification,
  IUser,
  INavigationItem
}