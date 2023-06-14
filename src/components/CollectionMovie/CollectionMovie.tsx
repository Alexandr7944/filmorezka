import { useCallback, useEffect, useState } from 'react';
import style from './collectionMovie-style.module.scss';
import { INewMovie } from '@/interface/IMovie';
import Fetching from '@/API/Fetching';
import { MovieItem } from '../MovieItem';
import { BsCreditCard2Front } from 'react-icons/bs';
import { capitalizeStr } from '@/utils/capitalize';
import { MovieFilter } from '@/interface/MovieFilter';
import MovieFilterContainer from '../MovieFilterContainer/MovieFilterContainer';
import en from "../../locales/en/collectionmovie/collectionmovie"
import ru from "../../locales/ru/collectionmovie/collectionmovie"
import { useRouter } from 'next/router';

type CollectionMovieProps = {
  collection: string
}

const CollectionMovie: React.FC<CollectionMovieProps> = ({ collection }) => {
  const [movies, setMovies] = useState<INewMovie[]>([]);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [moviesFilter, setMoviesFilter] = useState<MovieFilter>({
    genre: [],
    countries: [],
    rating: [],
    year: []
  })
  const {locale} = useRouter();
  const t:any = locale === "en"? en : ru;
  useEffect(() => {
    Fetching.getNewAll(`http://localhost:5005/films/random`)
      .then(movies => setMovies(movies));
  }, []);

  const handlerAddMovies = () => {
  
    Fetching.getNewAll(`http://localhost:5005/films/random`)
      .then(movies => setMovies(prev => [...prev, ...movies]))
  };

  const titleCollection = collection && collection !== 'random'
    ? capitalizeStr(collection) + ` ${t.watch_online}`
    : ` ${t.watch_online_b}`

  const getMoviesFilterList = useCallback((): INewMovie[] => {
    return movies.filter(item => 
      (moviesFilter.genre.length
        ? moviesFilter.genre.some(i => item.genre.includes(i.toLowerCase()))
        : item.genre)
      && (moviesFilter.countries.length
        ? moviesFilter.countries.some(i => item.countries.includes(i))
        : item.countries)
      && (moviesFilter.rating.length
        ? moviesFilter.rating.includes(+item.rating.toFixed(1))
        : item.rating)
      && (moviesFilter.year.length
        ? moviesFilter.year.includes(+item.year.toFixed(1))
        : item.year))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, moviesFilter]);

  return (
    <div className={style.collection}>
      <div className="container">
        <h1 className={style.collection__title}>
          {titleCollection}
        </h1>
        {movies && 
          <div className={style.collection__filter}>
            <div
              className={style['collection__filter-name']}
              onClick={() => setShowFilter(prev => !prev)}
            >
              <BsCreditCard2Front />
              {showFilter ? `${t.collapse}`:  `${t.filters}`}
            </div>
            {showFilter && <MovieFilterContainer 
              movies={movies}
              moviesFilter={moviesFilter}
              setMoviesFilter={setMoviesFilter} 
            />}
          </div>
        }
        {movies &&
          <>
          <div className={style.collection__wrapper}>
            {getMoviesFilterList().map((item) => 
              <div key={item.id} className={style.collection__item} >
                <MovieItem
                  movie={item}
                />
              </div>
            )}
          </div>
          <button
            className={style['collection__next-btn']}
            onClick={handlerAddMovies}
          >{t.show_more}</button>
          </>
        }
      </div>
    </div>
  )
}

export default CollectionMovie