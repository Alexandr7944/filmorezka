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
    rating: [],
    year: []
  });

  useEffect(() => {
    Fetching.getAll(`http://localhost:5000/films/filters`, 'GET', {
      genre: collection
    })
      .then(movies => setMovies(movies));
  }, []);

  const getMoviesFilterList = useCallback((): INewMovie[] => {
  //   return movies.filter(item => 
  //     (moviesFilter.genre.length
  //       ? moviesFilter.genre.some(i => item.genre.includes(i.toLowerCase()))
  //       : item.genre)
  //     && (moviesFilter.countries.length
  //       ? moviesFilter.countries.some(i => item.countries.includes(i))
  //       : item.countries)
  //     && (moviesFilter.rating.length
  //       ? moviesFilter.rating.includes(+item.rating.toFixed(1))
  //       : item.rating)
  //     && (moviesFilter.year.length
  //       ? moviesFilter.year.includes(+item.year.toFixed(1))
  //       : item.year))
    const filterRatings = ratingJSON.rating.map((rating: Rating) => {
      if (rating.name === moviesFilter.rating[0]) return rating.value;
    }).join('')        

    return movies.filter(item => 
      (moviesFilter.genre.length
        ? moviesFilter.genre.some(i => item.genre.includes(i.toLowerCase()))
        : item.genre)
      && (moviesFilter.countries.length
        ? moviesFilter.countries.some(i => item.countries.includes(i))
        : item.countries)
      && (moviesFilter.rating.length && filterRatings
        ? item.rating > +filterRatings
        : item.rating)
      // && (moviesFilter.year.length
      //   ? moviesFilter.year.includes(+item.year.toFixed(1))
      //   : item.year))
    )
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