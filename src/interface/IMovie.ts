export interface IMovie {
  countries: Array<country>;
  filmId: number;
  filmLength: string;
  genres: Array<genre>;
  nameEn: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingChange: null | string;
  ratingVoteCount: number;
  year: string
}

type country = {
  country: string;
}

type genre = {
  genre: string;
}