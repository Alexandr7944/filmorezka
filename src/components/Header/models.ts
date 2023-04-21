import {cartoons, films, INavigationItem, shows, TypeContent} from "@/components/Header/Content/models";

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
    typeContent: TypeContent.Link
  },
  {
    title: 'Сериалы',
    content: shows,
    typeContent: TypeContent.Link
  },
  {
    title: 'Мультфильмы',
    content: cartoons,
    typeContent: TypeContent.Link
  },
  {
    title: 'TV+'
  }
]

export {
  navigationsItems
};