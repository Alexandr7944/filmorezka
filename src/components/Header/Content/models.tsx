import {BsBookmarkHeart, BsCart2, BsCreditCard2Front} from 'react-icons/bs';
import {SlDiamond} from "react-icons/sl";
import {RiHistoryFill, RiSlideshow3Line} from "react-icons/ri";
import {AiOutlineSafetyCertificate} from "react-icons/ai";

interface IFormat  {
  nameFormat: string,
  genres: string[],
  countries: string[],
  years: number[],
  filters: string[]
}

const films: IFormat = {
  nameFormat: 'Фильмы',
  genres: [
    'Артхаус', 'Биография', 'Боевики', 'Вестерн', 'Военные',
    'Детективы', 'Для всей семьи', 'Для детей', 'Документальные', 'Драмы',
    'Исторические', 'Катастрофы', 'Комедии', 'Криминальные', 'Мелодрамы',
    'Мистические', 'Приключения', 'Спорт', 'Триллеры', 'Ужасы',
    'Фантастика', 'Фэнтези'
  ],
  countries: ['Русские', 'Зарубежные', 'Советское кино'],
  years: [2023, 2022, 2021, 2020],
  filters: [
    'Новинки', 'Подборки', 'Иви.Рейтинг', 'Трейлеры',
    'Что посмотреть', 'Фильмы в HD', 'Новинки и подписи'
  ]
}

const shows: IFormat = {
  nameFormat: 'Сериалы',
  genres: [
    'Биография', 'Боевики', 'Военные', 'Детективы', 'Для всей семьи',
    'Документальные', 'Дорамы', 'Драмы', 'Исторические', 'Комедийные',
    'Криминал', 'Медицинские', 'Мелодрамы', 'Мистические', 'Приключения',
    'Романтические', 'Телешоу', 'Триллеры', 'Турецкие', 'Ужасы',
    'Фантастические', 'Фэнтези'
  ],
  countries: ['Русские', 'Зарубежные', 'Американские', 'Украинские', 'Турецкие'],
  years: [2023, 2022, 2021, 2020],
  filters: ['Новинки', 'Иви.Рейтинг', 'Сериалы в HD']
}


const cartoons: IFormat = {
  nameFormat: 'Мультики',
  genres: [
    'Аниме', 'Боевик', 'Детектив', 'Для взрослых', 'Для всей семье',
    'Для детей', 'Драма', 'История', 'Комедия', 'Криминал',
    'Мюзикл', 'Полнометражные', 'Приключения', 'Развивающие', 'Сериалы',
    'Спорт', 'Триллер', 'Ужасы', 'Фантастика', 'Фэнтези'
  ],
  countries: ['Советские', 'Русские', 'Американские', 'Зарубежные'],
  years: [2023, 2022, 2021, 2020],
  filters: ['Новинки', 'Мультики в HD']
}

interface INotification  {

}

const notifications: INotification[] = []

enum icons {
  Cart = BsCart2,
  Bookmark = BsBookmarkHeart,
  History = RiHistoryFill,
  Diamond = SlDiamond,
  Certificate = AiOutlineSafetyCertificate,
  Slideshow = RiSlideshow3Line,
  CreditCard = BsCreditCard2Front
}

interface ILink {
  icon: icons
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

const user: IUser = {
  links: [
    {
      icon: icons.Cart,
      title: 'Покупки'
    },
    {
      icon: icons.Bookmark,
      title: 'Смотреть позже'
    },
    {
      icon: icons.History,
      title: 'История просмотров'
    },
    {
      icon: icons.Diamond,
      title: 'Подписки',
      description: 'Подключить',
      mark: true
    },
    {
      icon: icons.Certificate,
      title: 'Активация сертификата'
    },
    {
      icon: icons.Slideshow,
      title: 'Вход по коду'
    },
    {
      icon: icons.CreditCard,
      title: 'Способы оплаты'
    },
  ],
  options: [
    {
      title: 'Настройки'
    },
    {
      title: 'Помощь'
    }
  ]
}

type HeaderContent = IFormat | INotification | IUser;

enum TypeContent {
  Link,
  Notification,
  User
}

interface INavigationItem {
  title: string,
  content?: HeaderContent,
  typeContent?: TypeContent
}

interface ContentProps {
  content: HeaderContent
}

export {
  films, shows, cartoons, notifications, user,
  icons, TypeContent
};
export type {
  HeaderContent, ContentProps,
  IFormat, INotification, IUser, INavigationItem
};
