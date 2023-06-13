import { MovieFilter, MovieFilterNumber, MovieFilterString } from '@/interface/MovieFilter';
import styles from './movieFilter-style.module.scss';
import { INewMovie } from '@/interface/IMovie';
import MovieFilterItem from '../MovieFilterItem/MovieFilterItem';
import { useState } from 'react';
import typesFilter from '../../data/typesFilter.json';
import { capitalizeStr } from '@/utils/capitalize';
import { selectMediaFilters } from '@/store/selectors';
import countriesJSON from '../../data/countries.json';
import yearsJSON from '../../data/years.json';
import ratingJSON from '../../data/rating.json';

type MovieFilterContainerProps = {
  movies: INewMovie[],
  moviesFilter: MovieFilter,
  setMoviesFilter: (prev: MovieFilter) => void
}

type TypeOfGetTypes = {
  genre: string[],
  countries: string[],
  year: string[],
  rating: string[],
}

const MovieFilterContainer: React.FC<MovieFilterContainerProps> = ({ movies, moviesFilter, setMoviesFilter }) => {
  const [getTypes, setGetTypes] = useState<string>('');

  const resetFilter = () => {
    setMoviesFilter({
      genre: [],
      countries: [],
      year: ['Все годы'],
      rating: ['Любой рейтинг']
    });
    setGetTypes('');
  }  

  const getType = (typeFilter: string) => {
    const type: TypeOfGetTypes = {
      genre: selectMediaFilters().genres.map(genre => capitalizeStr(genre.nameRu)),
      countries: countriesJSON.countries,
      year: yearsJSON.years.map(year => year.year),
      rating: ratingJSON.rating.map(rating => rating.name)
    }
    return type[typeFilter as keyof TypeOfGetTypes];
  }

  const getPresenceType = (typeFilter: string) => {
    return typeFilter === 'year' || typeFilter === 'rating'
      ? getTypeNumber(typeFilter)
      : getTypeString(typeFilter)
  }

  const getTypeNumber = (typeFilter: string) => {
    let arr = movies.map(item => +item[typeFilter as keyof MovieFilterNumber].toFixed(1));
    arr = [...new Set(arr)]
    return arr.filter(i => i !== 0).sort((a, b) => b - a);
  }

  const getTypeString = (typeFilter: string) => {
    const arr = movies.map(item => item[typeFilter as keyof MovieFilterString])
      .reduce((acc, item) => item?.length ? acc.concat(item) : acc, []);
    return [...new Set(arr)].map(i => capitalizeStr(i));
  }

  return (
    <div className={styles['movie-filter']}>
      <div className={styles['movie-filter__container']}
      >
        {
          typesFilter.map(type => <MovieFilterItem 
              key={type.type}
              type={type.type}
              title={type.title}
              types={getType(type.type)}
              presenceTypes={getPresenceType(type.type)}
              getTypes={getTypes} 
              setGetTypes={setGetTypes}
              moviesFilter={moviesFilter}
              setMoviesFilter={setMoviesFilter}
            />
          )
        }
      </div>
      <div
        className={styles['movie-filter__reset']}
        onClick={resetFilter}
      >
        &#10006; Сбросить фильтры
      </div>
    </div>
  )
}

export default MovieFilterContainer;