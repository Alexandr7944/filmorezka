import { BiCameraMovie } from "react-icons/bi";
import { RiMovieLine } from "react-icons/ri";
import { TbHorseToy } from "react-icons/tb";

interface IFormat {
  nameFormat: string;
  genres: string[];
  countries: string[];
  years: number[];
  filters: string[];
}

const films: IFormat = {
  nameFormat: "films",
  genres: [
    "Arthouse",
    "Biography",
    "Action",
    "Western",
    "Military",
    "Detectives",
    "family",
    "children",
    "Documentaries",
    "Dramas",
    "Historical",
    "Catastrophes",
    "Comedies",
    "Criminal",
    "Melodramas",
    "Mystical",
    "Adventures",
    "Sports",
    "Thrillers",
    "Horror",
    "Science",
    "Fantasy",
  ],
  countries: ["films_russian", "foreign", "soviet_cinema"],
  years: [2023, 2022, 2021, 2020],
  filters: [
    "Новинки",
    "Подборки",
    "Иви.Рейтинг",
    "Трейлеры",
    "Что посмотреть",
    "Фильмы в HD",
    "Новинки и подписи",
  ],
};

const shows: IFormat = {
  nameFormat: "serials",
  genres: [
    "Biography",
    "Action",
    "Western",
    "Military",
    "Detectives",
    "family",
    "Documentaries",
    "Dramas",
    "Historical",
    "Comedies",
    "Criminal",
    "Romantic",
    "tv_shows",
    "Turkish",
    "Fantastic",
    "Medical",
    "Melodramas",
    "Mystical",
    "Adventures",
    "Romantic",
  ],
  countries: [
    "films_russian", "foreign", "american", "ukrainian", "turkish"
  ],
  years: [2023, 2022, 2021, 2020],
  filters: ["Новинки", "Иви.Рейтинг", "Сериалы в HD"],
};

const cartoons: IFormat = {
  nameFormat: "cartoons",
  genres: [
    "Anime",
    "Action",
    "Western",
    "Military",
    "Detectives",
    "family",
    "Adults",
    "Dramas",
    "Historical",
    "Comedies",
    "Criminal",
    "Romantic",
    "Fantastic",
    "Melodramas",
    "Mystical",
    "Adventures",
    "Romantic",
  ],
  countries: ["soviet_cinema", "films_russian", "american", "foreign"],
  years: [2023, 2022, 2021, 2020],
  filters: ["Новинки", "Мультики в HD"],
};

const icons = {
  BiCameraMovie,
  RiMovieLine,
  TbHorseToy,
};

type FooterContent = IFormat;

interface ContentProps {
  content: FooterContent;
}

export { films, shows, cartoons };
export { icons };
export type { FooterContent, ContentProps, IFormat };
