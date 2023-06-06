import { MovieFilter, MovieFilterNumber, MovieFilterString } from '@/interface/MovieFilter';
import styles from './movieFilter-style.module.scss';
import { INewMovie } from '@/interface/IMovie';
import MovieFilterItem from '../MovieFilterItem/MovieFilterItem';
import { useState } from 'react';
import typesFilter from '../../data/typesFilter.json';

type MovieFilterContainerProps = {
  movies: INewMovie[],
  moviesFilter: MovieFilter,
  setMoviesFilter: (prev: MovieFilter) => void
}

const MovieFilterContainer: React.FC<MovieFilterContainerProps> = ({ movies, moviesFilter, setMoviesFilter }) => {
  const [getTypes, setGetTypes] = useState<string>('');
  const resetFilter = () => {
    setMoviesFilter({
      genre: ['all'],
      countries: ['all'],
      year: 0,
      rating: 0
    })
  }

  const getType = (typeFilter: string) => {
    return typeFilter === 'year' || typeFilter === 'rating'
      ? getTypeNumber(typeFilter)
      : getTypeString(typeFilter)
  }

  const getTypeNumber = (typeFilter: string) => {
    const arr = movies.map(item => item[typeFilter as keyof MovieFilterNumber]);
    arr.sort((a, b) => b - a);
    return [...new Set(arr)];
  }

  const getTypeString = (typeFilter: string) => {
    const arr = movies.map(item => item[typeFilter as keyof MovieFilterString])
      .reduce((acc, item) => item && item.length ? acc.concat(item) : acc, []);
    return [...new Set(arr)];
  }  
  
  return (
    <div className={styles['movie-filter']}>
      <div className={styles['movie-filter__container']}>
        {
          typesFilter.map(type => <MovieFilterItem 
              key={type.type}
              type={type.type}
              title={type.title}
              types={getType(type.type)}
              getTypes={getTypes} 
              setGetTypes={setGetTypes}
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

export default MovieFilterContainer