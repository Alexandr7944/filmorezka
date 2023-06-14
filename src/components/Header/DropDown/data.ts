import {
  IFormat,
  INavigationItem,
  INotification,
  IUser,
  TypeContent,
} from "@/interface/Header";
import {
  AiOutlineSafetyCertificate,
  BsBookmarkHeart,
  BsCart2,
  BsCreditCard2Front,
  BsShare,
  RiHistoryFill,
  RiSlideshow3Line,
  SlDiamond,
} from "../../Icons";

const films: IFormat = {
  typeFormatRu: 'films',
  typeFormatEn: 'movie',
  countries: ['Русские', 'Зарубежные', 'Советское кино'],
  years: [2023, 2022, 2021, 2020],
  filters: [
    "novelties",
    "selections",
    "ivi_rating",
    "trailers",
    "w_watch",
    "hd_movies",
    "items_and_signatures",
  ],
};

const shows: IFormat = {
  typeFormatRu: "serials",
  typeFormatEn: 'serial',
  countries: ["films_russian", "foreign", "american", "ukrainian", "turkish"],
  years: [2023, 2022, 2021, 2020],
  filters: ["novelties", "ivi_rating", "tv_hd"],
};

const cartoons: IFormat = {
  typeFormatRu: "cartoons",
  typeFormatEn: 'cartoon',
  countries: ["soviet_cinema", "films_russian", "american", "foreign"],
  years: [2023, 2022, 2021, 2020],
  filters: ["novelties", "cartoons_hd"],
};

const notifications: INotification[] = [];

const user: IUser = {
  links: [
    {
      icon: BsCart2,
      title: "purchases",
    },
    {
      icon: BsBookmarkHeart,
      title: "watch_later",
    },
    {
      icon: RiHistoryFill,
      title: "browsing_history",
    },
    {
      icon: SlDiamond,
      title: "subscriptions",
      description: "connect",
      mark: true,
    },
    {
      icon: AiOutlineSafetyCertificate,
      title: "certificate",
    },
    {
      icon: RiSlideshow3Line,
      title: "code_login",
    },
    {
      icon: BsCreditCard2Front,
      title: "payment_methods",
    },
    {
      icon: BsShare,
      title: "invite_friends",
    },
  ],
};

const navigationsItems: INavigationItem[] = [
  {
    title: "ivi",
  },
  {
    title: "news",
  },
  {
    title: "films",
    content: films,
    typeContent: TypeContent.Format,
  },
  {
    title: "serials",
    content: shows,
    typeContent: TypeContent.Format,
  },
  {
    title: "cartoons",
    content: cartoons,
    typeContent: TypeContent.Format,
  },
  {
    title: "tv",
  },
];

export { films, shows, cartoons, notifications, user, navigationsItems };
