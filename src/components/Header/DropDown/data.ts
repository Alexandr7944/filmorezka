import { IFormat, INavigationItem, INotification, IUser, TypeContent } from "@/interface/Header";
import { AiOutlineSafetyCertificate, BsBookmarkHeart, 
  BsCart2, BsCreditCard2Front, BsShare, 
  RiHistoryFill, RiSlideshow3Line, SlDiamond } from "../../Icons";

const films: IFormat = {
  typeFormatRu: 'фильм',
  typeFormatEn: 'movie',
  countries: ['Русские', 'Зарубежные', 'Советское кино'],
  years: [2023, 2022, 2021, 2020],
  filters: [
    'Новинки', 'Подборки', 'Иви.Рейтинг', 'Трейлеры',
    'Что посмотреть', 'Фильмы в HD', 'Новинки и подписи'
  ]
}

const shows: IFormat = {
  typeFormatRu: 'сериал',
  typeFormatEn: 'serial',
  countries: ['Русские', 'Зарубежные', 'Американские', 'Украинские', 'Турецкие'],
  years: [2023, 2022, 2021, 2020],
  filters: ['Новинки', 'Иви.Рейтинг', 'Сериалы в HD']
}


const cartoons: IFormat = {
  typeFormatRu: 'мультик',
  typeFormatEn: 'cartoon',
  countries: ['Советские', 'Русские', 'Американские', 'Зарубежные'],
  years: [2023, 2022, 2021, 2020],
  filters: ['Новинки', 'Мультики в HD']
}

const notifications: INotification[] = [

]

const user: IUser = {
  links: [
    {
      icon: BsCart2,
      title: 'Покупки'
    },
    {
      icon: BsBookmarkHeart,
      title: 'Смотреть позже'
    },
    {
      icon: RiHistoryFill,
      title: 'История просмотров'
    },
    {
      icon: SlDiamond,
      title: 'Подписки',
      description: 'Подключить',
      mark: true
    },
    {
      icon: AiOutlineSafetyCertificate,
      title: 'Активация сертификата'
    },
    {
      icon: RiSlideshow3Line,
      title: 'Вход по коду'
    },
    {
      icon: BsCreditCard2Front,
      title: 'Способы оплаты'
    },
    {
      icon: BsShare,
      title: 'Пригласить друзей'
    },
  ]
}

const navigationsItems: INavigationItem[] = [
  {
    title: 'Мой Иви'
  },
  {
    title: 'Что нового'
  },
  {
    title: 'Фильмы',
    content: films,
    typeContent: TypeContent.Format
  },
  {
    title: 'Сериалы',
    content: shows,
    typeContent: TypeContent.Format
  },
  {
    title: 'Мультфильмы',
    content: cartoons,
    typeContent: TypeContent.Format
  },
  {
    title: 'TV+'
  }
]

export {
    films, shows, cartoons,
    notifications,
    user,
    navigationsItems
}