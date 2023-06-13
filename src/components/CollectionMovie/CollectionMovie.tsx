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


type CollectionMovieProps = {
  collection: string,
  title?: string,
}

const CollectionMovie: React.FC<CollectionMovieProps> = ({ collection, title }) => {
  const [movies, setMovies] = useState<INewMovie[]>([]);
  const [showMovies, setShowMovies] = useState(20);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [moviesFilter, setMoviesFilter] = useState<MovieFilter>({
    genre: [],
    countries: [],
    year: ['Все годы'],
    rating: ['Любой рейтинг']
  });

  useEffect(() => {
    Fetching.getAll(`http://localhost:5000/films/filters?genre=${collection}`)
      .then(movies => setMovies(movies));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMoviesFilterList = useCallback((): INewMovie[] => {
    const filterRatings = ratingJSON.rating.map((rating: Rating) => {
      if (rating.name === moviesFilter.rating[0]) return rating.value;
    }).join('')      

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
        ? item.rating > +filterRatings
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
          {title + ' смотреть онлайн'}
        </h1>
        {movies.length && 
          <>
          <div className={style.collection__filter}>
            <div
              className={style['collection__filter-name']}
              onClick={() => setShowFilter(prev => !prev)}
            >
              <BsCreditCard2Front />
              {showFilter ? 'Свернуть': 'Фильтры'}
            </div>
            {showFilter && <MovieFilterContainer 
              movies={movies}
              moviesFilter={moviesFilter}
              setMoviesFilter={setMoviesFilter} 
            />}
          </div>
          <div className={style.collection__wrapper}>
            {movies.length && getMoviesFilterList().map((item, index) => 
              index < showMovies &&
              <div key={item.id} className={style.collection__item} >
                <MovieItem
                  movie={item}
                />
              </div>
            )}
          </div>
          <button
            className={style['collection__next-btn']}
            onClick={() => setShowMovies(Math.min(showMovies + 20, movies.length))}
          >Показать ещё</button>
          </>
        }
      </div>
    </div>
  )
}

export default CollectionMovie