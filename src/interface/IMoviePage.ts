import { IMovie } from "./IMovie"

interface IMoviePage extends IMovie {
  completed: boolean,
  coverUrl: string,
  description: string,
  editorAnnotation: null | string,
  endYear: null | string,
  has3D: boolean,
  hasImax: boolean,
  imdbId: string,
  isTicketsAvailable: boolean,
  kinopoiskId: number,
  lastSync: string,
  logoUrl: string,
  nameOriginal: string,
  productionStatus: string | null,
  ratingAgeLimits: string,
  ratingAwait: string | null,
  ratingAwaitCount: number,
  ratingFilmCritics: number,
  ratingFilmCriticsVoteCount: number,
  ratingGoodReview: number,
  ratingGoodReviewVoteCount: number,
  ratingImdb: number,
  ratingImdbVoteCount: number,
  ratingKinopoisk: number,
  ratingKinopoiskVoteCount: number,
  ratingMpaa: string,
  ratingRfCritics: string | null,
  ratingRfCriticsVoteCount: number,
  reviewsCount: number,
  serial: boolean,
  shortDescription: string,
  shortFilm: boolean,
  slogan: string,
  startYear: string | null,
  type: string,
  webUrl: string
}

export interface IVideo {
  "total": number,
  "items": IVideoItem[]
}

interface IVideoItem {
  name: string,
  site: string,
  url: string
}

export default IMoviePage;
