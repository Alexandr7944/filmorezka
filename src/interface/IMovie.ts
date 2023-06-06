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

export interface INewMovie {
  countries: string[] | [],
  actors?: any[],
  composer?: string,
  director?: string,
  filmDescription?: string,
  filmLength: string,
  filmSpId: number,
  id: number,
  image: string,
  installation: string,
  genre: string[] | [],
  name: string,
  nameEn: string,
  operator?: string,
  painter?: string,
  producer?: string,
  rating: number,
  ratingVoteCount: number,
  scenario?: string,
  type: string,
  year: number,
}