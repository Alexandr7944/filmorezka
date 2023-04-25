export interface IMovie {
  countries: Array<country>;
  filmId: number;
  filmLength: string;
  genres: Array<genre>;
  nameEn: string | null;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingChange: null | string;
  ratingVoteCount: number;
  year: number
}

type country = {
  country: string;
}

type genre = {
  genre: string;
}