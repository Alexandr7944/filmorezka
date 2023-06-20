import { useCallback, useEffect, useState } from 'react';
import style from './collectionMovie-style.module.scss';
import { INewMovie } from '@/interface/IMovie';
import Fetching from '@/API/Fetching';
import { MovieItem } from '../MovieItem';
import { BsCreditCard2Front } from 'react-icons/bs';
import { MovieFilter } from '@/interface/MovieFilter';
import MovieFilterContainer from '../MovieFilterContainer/MovieFilterContainer';
import yearsJSON from '../../data/years.json';
import ratingJSON from '../../data/rating.json';
import { Rating } from '@/interface/Rating';
import en from "../../locales/en/collectionmovie/collectionmovie"
import ru from "../../locales/ru/collectionmovie/collectionmovie"
import { useRouter } from 'next/router';
import { selectLangs } from '@/store/selectors';


type CollectionMovieProps = {
  collection: string,
  title?: string
  params?: string
}

const CollectionMovie: React.FC<CollectionMovieProps> = ({ collection, title, params }) => {
  const [movies, setMovies] = useState<INewMovie[]>([]);
  const [showMovies, setShowMovies] = useState(20);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [moviesFilter, setMoviesFilter] = useState<MovieFilter>({
    genre: [],
    countries: [],
    year: ['Все годы'],
    rating: ['Любой рейтинг']
  });  
  // const {locale} = useRouter();
  const locale = selectLangs();
  const t:any = locale === "en"? en : ru;
  useEffect(() => {
    Fetching.getAll(params 
      ? 'http://localhost:5000/films/filters' + params 
      : 'http://localhost:5000/films/' + collection)
      .then(movies => setMovies(movies));
  }, [collection, params]);

  const getMoviesFilterList = useCallback((): INewMovie[] => {
    const filterRatings = ratingJSON.rating.map((rating: Rating) => {
      if (rating.name === moviesFilter.rating[0]) return rating.value;
    }).join('');    

    const filterYears: number[] = yearsJSON.years.find((year) => 
      year.year === moviesFilter.year[0]
    )?.value || [0];

    return movies.filter(item => 
      (moviesFilter.genre.length
        ? moviesFilter.genre.some(i => item.genre.includes(i.toLowerCase()))
        : item.genre)
      && (moviesFilter.countries.length
        ? moviesFilter.countries.some(i => item.countries.includes(i))
        : item.countries)
      && (filterRatings
        ? item.rating >= +filterRatings
        : item.rating)
      && (!filterYears[0]
        ? item.year
        : filterYears.length > 1
          ? item.year >= filterYears[0] && item.year <= filterYears[1]
          : item.year === filterYears[0]
        ))
  }, [movies, moviesFilter]);

  return (
    <div className={style.collection}>
      <div className="container">
        <h1 className={style.collection__title}>
          {title ? title + ` ${t.watch_online}` : `${t.watch_online_b}`}
        </h1>
        {movies.length > 0 
          ? <>
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
          <div className={style.collection__wrapper}>
            {movies.length && getMoviesFilterList().map((item, index, arr) => 
              arr.length >= showMovies && index < showMovies &&
              <div key={item.id} className={style.collection__item} >
                <MovieItem movie={item} />
              </div>
            )}
          </div>
          <button
            className={style['collection__next-btn']}
            onClick={() => setShowMovies(Math.min(showMovies + 20, movies.length))}
          >{t.show_more}</button>
          </>
          : <p>{t.not_found}</p>
        }
      </div>
    </div>
  )
}

export default CollectionMovie