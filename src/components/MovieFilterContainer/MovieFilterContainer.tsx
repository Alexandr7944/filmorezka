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
import { selectGenres } from '@/store/selectors';
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
      genre: selectGenres().genres.map((genre) => locale==="ru"? capitalizeStr(genre.nameRu).replace("_", " "): capitalizeStr(genre.nameEn).replace("_", " ")),
      countries: countriesJSON.countries,
      year: yearsJSON.years.map(year => year.year),
      rating: ratingJSON.rating.map(rating => rating.name)
    }
    return type[typeFilter as keyof TypeOfGetTypes];
  }

  const getPresenceType = (typeFilter: string) => {
    return typeFilter === 'genre' || typeFilter === 'countries'
      ? getTypeString(typeFilter)
      : []
  }

  const getTypeString = (typeFilter: string) => {
    const arr = movies.map(item => item[typeFilter as keyof MovieFilterString])
      .reduce((acc, item) => item?.length ? acc.concat(item) : acc, []);
    return [...new Set(arr)];
  }
  const {locale} = useRouter();
  const t:any = locale === "en"? en : ru;

  return (
    <div className={styles['movie-filter']}>
      <div className={styles['movie-filter__container']}>
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
        &#10006; {t.reset}
      </div>
    </div>
  )
}

export default MovieFilterContainer;