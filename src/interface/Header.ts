import { IconType } from 'react-icons';

interface IFormat  {
  typeFormat: string,
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

type Content = IFormat | INotification | IUser;

enum TypeContent {
  Format,
  Notification,
  User
}

interface INavigationItem {
  title: string,
  content?: IFormat | INotification | IUser,
  typeContent?: TypeContent
}

interface DropDownProps {
  content: Content
}

export type {
  Content, 
  IFormat, 
  INotification,
  IUser,
  INavigationItem,
  DropDownProps
}

export {
  TypeContent
}