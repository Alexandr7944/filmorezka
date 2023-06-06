import { useEffect, useState } from 'react';
import style from './collectionMovie-style.module.scss';
import { INewMovie } from '@/interface/IMovie';
import Fetching from '@/API/Fetching';
import { MovieItem } from '../MovieItem';
import { BsCreditCard2Front } from 'react-icons/bs';
import { capitalizeStr } from '@/utils/capitalize';
import { MovieFilter } from '@/interface/MovieFilter';
import MovieFilterContainer from '../MovieFilterContainer/MovieFilterContainer';

type CollectionMovieProps = {
  collection: string
}

const CollectionMovie: React.FC<CollectionMovieProps> = ({ collection }) => {
  const [movies, setMovies] = useState<INewMovie[]>([]);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [moviesFilter, setMoviesFilter] = useState<MovieFilter>({
    genre: ['all'],
    countries: ['all'],
    rating: 0,
    year: 0
  })

  useEffect(() => {
    Fetching.getNewAll(`http://localhost:5000/films/random`)
      .then(movies => setMovies(movies));
  }, []);

  const addMoviesHandler = () => {
    Fetching.getNewAll(`http://localhost:5000/films/random`)
      .then(movies => setMovies(prev => [...prev, ...movies]))
  };

  const titleCollection = collection && collection !== 'random'
    ? capitalizeStr(collection) + ' смотреть онлайн'
    : 'Смотреть онлайн'

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
              {showFilter ? 'Свернуть': 'Фильтры'}
            </div>
            {showFilter && <MovieFilterContainer 
              movies={movies}
              moviesFilter={moviesFilter}
              setMoviesFilter={setMoviesFilter} 
            />}
          </div>
        }
        { movies &&
          <>
          <div className={style.collection__wrapper}>
            {movies.map((item) => 
              <div key={item.id} className={style.collection__item} >
                <MovieItem
                  movie={item}
                />
              </div>
            )}
          </div>
          <button
            className={style['collection__next-btn']}
            onClick={addMoviesHandler}
          >Показать ещё</button>
          </>
        }
      </div>
    </div>
  )
}

export default CollectionMovie