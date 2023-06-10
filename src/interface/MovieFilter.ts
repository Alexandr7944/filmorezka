import { Ref } from "react";

export interface MovieFilter {
  genre: string[],
  countries: string[],
  rating: number[],
  year: number[]
}

export interface MovieFilterString {
  genre: string[],
  countries: string[]
}

export interface MovieFilterNumber {
  rating: number[],
  year: number[]
}

export type MovieFilterItemProps = {
  type: string,
  title: string,
  types: string[] | number [],
  getTypes: string,
  setGetTypes: (type: string) => void,
  moviesFilter: MovieFilter,
  setMoviesFilter: (moviesFilter: MovieFilter) => void
};