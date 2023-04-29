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
  nameFormat: "фильмы",
  genres: [
    "Артхаус",
    "Биография",
    "Боевики",
    "Вестерн",
    "Военные",
    "Детективы",
    "Для всей семьи",
    "Для детей",
    "Документальные",
    "Драмы",
    "Исторические",
    "Катастрофы",
    "Комедии",
    "Криминальные",
    "Мелодрамы",
    "Мистические",
    "Приключения",
    "Спорт",
    "Триллеры",
    "Ужасы",
    "Фантастика",
    "Фэнтези",
  ],
  countries: ["Русские", "Зарубежные", "Советское кино"],
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
  nameFormat: "сериалы",
  genres: [
    "Биография",
    "Боевики",
    "Военные",
    "Детективы",
    "Для всей семьи",
    "Документальные",
    "Дорамы",
    "Драмы",
    "Исторические",
    "Комедийные",
    "Криминал",
    "Медицинские",
    "Мелодрамы",
    "Мистические",
    "Приключения",
    "Романтические",
    "Телешоу",
    "Триллеры",
    "Турецкие",
    "Ужасы",
    "Фантастические",
    "Фэнтези",
  ],
  countries: [
    "Русские",
    "Зарубежные",
    "Американские",
    "Украинские",
    "Турецкие",
  ],
  years: [2023, 2022, 2021, 2020],
  filters: ["Новинки", "Иви.Рейтинг", "Сериалы в HD"],
};

const cartoons: IFormat = {
  nameFormat: "мультфильмы",
  genres: [
    "Аниме",
    "Боевик",
    "Детектив",
    "Для взрослых",
    "Для всей семье",
    "Для детей",
    "Драма",
    "История",
    "Комедия",
    "Криминал",
    "Мюзикл",
    "Полнометражные",
    "Приключения",
    "Развивающие",
    "Сериалы",
    "Спорт",
    "Триллер",
    "Ужасы",
    "Фантастика",
    "Фэнтези",
  ],
  countries: ["Советские", "Русские", "Американские", "Зарубежные"],
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
