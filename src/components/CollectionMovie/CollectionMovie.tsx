import { useEffect, useState } from 'react';
import style from './collectionMovie-style.module.scss';
import { IMovie } from '@/interface/IMovie';
import Fetching from '@/API/Fetching';
import { MovieItem } from '../MovieItem';
import { BsCreditCard2Front } from 'react-icons/bs';

type CollectionMovieProps = {
  collection: string
}

const CollectionMovie: React.FC<CollectionMovieProps> = ({ collection }) => {
  const [movies, setMovies] = useState<(IMovie | undefined)[]>([]);
  const [pages, setPages] = useState<number>(1);

  useEffect(() => {
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pages}`)
      .then(movies => movies.films && setMovies(prev => pages > 1 ? [...prev, ...movies.films] : movies.films ));
  }, [pages]);  

  const addMoviesHandler = () => setPages(prev => prev + 1);

  return (
    <div className={style.collection}>
      <div className="container">
        <h1 className={style.collection__title}>
          {collection} смотреть онлайн
        </h1>
        <div className={style.collection__filter}>
          <BsCreditCard2Front /> Фильтры
        </div>
        <div className={style.collection__wrapper}>
          {movies.map((item) => 
            item && <div
              key={item.filmId}
              className={style.collection__item}
            >
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
      </div>
    </div>
  )
}

export default CollectionMovie