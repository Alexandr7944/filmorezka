import {cartoons, films, icons, shows} from "./models";

const navigationsItems = [
  {
    title: 'ivi',
    
  },
  {
    title: 'news',
   
  },
  {
    title: 'films',
    content: films,
    icon: icons.BiCameraMovie,
   
  },
  {
    title: 'serials',
    content: shows,
    icon: icons.RiMovieLine,
   
  },
  {
    title: 'cartoons',
    content: cartoons,
    icon: icons.TbHorseToy,
   
  }
]

export {
  navigationsItems
};