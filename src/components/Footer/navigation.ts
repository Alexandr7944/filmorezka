import {cartoons, films, icons, shows} from "./models";

const navigationsItems = [
  {
    title: 'Мой Иви',
    
  },
  {
    title: 'Что нового',
   
  },
  {
    title: 'Фильмы',
    content: films,
    icon: icons.BiCameraMovie,
   
  },
  {
    title: 'Сериалы',
    content: shows,
    icon: icons.RiMovieLine,
   
  },
  {
    title: 'Мультфильмы',
    content: cartoons,
    icon: icons.TbHorseToy,
   
  }
]

export {
  navigationsItems
};