import { MovieFilter, MovieFilterNumber, MovieFilterString } from '@/interface/MovieFilter';
import styles from './movieFilter-style.module.scss';
import { INewMovie } from '@/interface/IMovie';
import MovieFilterItem from '../MovieFilterItem/MovieFilterItem';
import { useState } from 'react';
import typesFilter from '../../data/typesFilter.json';
import { capitalizeStr } from '@/utils/capitalize';
import en from "../../locales/en/moviefilter/moviefilter"
import ru from "../../locales/ru/moviefilter/moviefilter"
import { useRouter } from 'next/router';

type MovieFilterContainerProps = {
  movies: INewMovie[],
  moviesFilter: MovieFilter,
  setMoviesFilter: (prev: MovieFilter) => void
}

const MovieFilterContainer: React.FC<MovieFilterContainerProps> = ({ movies, moviesFilter, setMoviesFilter }) => {
  const [getTypes, setGetTypes] = useState<string>('');
  const resetFilter = () => {
    setMoviesFilter({
      genre: [],
      countries: [],
      year: [],
      rating: []
    });
    setGetTypes('');
  }

  const getType = (typeFilter: string) => {
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
    return [...new Set(arr)].map(item => capitalizeStr(item));
  }
  const {locale} = useRouter();
  const t:any = locale === "en"? en : ru;

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
        &#10006; {t.reset}
      </div>
    </div>
  )
}

export default MovieFilterContainer