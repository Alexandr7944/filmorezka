export interface MovieFilter {
  genre: string[],
  countries: string[],
  rating: string[],
  year: string[]
}

export interface MovieFilterString {
  genre: string[],
  countries: string[]
}

export interface MovieFilterNumber {
  rating: string[],
  year: string[]
}

export type MovieFilterItemProps = {
  type: string,
  title: string,
  types: string[],
  presenceTypes: string[],
  getTypes: string,
  setGetTypes: (type: string) => void,
  moviesFilter: MovieFilter,
  setMoviesFilter: (moviesFilter: MovieFilter) => void
};