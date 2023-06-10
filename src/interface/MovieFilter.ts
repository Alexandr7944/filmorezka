export interface MovieFilter {
  genre: string,
  countries: string,
  rating: number,
  year: number
}

export interface MovieFilterString {
  genre: string,
  countries: string
}

export interface MovieFilterNumber {
  rating: number,
  year: number
}