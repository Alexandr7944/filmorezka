import { useEffect, useState } from 'react';
import style from './collectionMovie-style.module.scss';
import { IMovie, INewMovie } from '@/interface/IMovie';
import Fetching from '@/API/Fetching';
import { MovieItem } from '../MovieItem';
import { BsCreditCard2Front } from 'react-icons/bs';
import { capitalizeStr } from '@/utils/capitalize';

type CollectionMovieProps = {
  collection: string
}

const CollectionMovie: React.FC<CollectionMovieProps> = ({ collection }) => {
  const [movies, setMovies] = useState<INewMovie[]>([]);
  const [pages, setPages] = useState<number>(1);

  useEffect(() => {
    Fetching.getAll(`http://localhost:5000/films/random`)
      .then(movies => setMovies(movies));
  }, [pages]);

  const addMoviesHandler = () => setPages(pages + 1);

  return (
    <div className={style.collection}>
      <div className="container">
        <h1 className={style.collection__title}>
          {collection && capitalizeStr(collection)} смотреть онлайн
        </h1>
        <div className={style.collection__filter}>
          <BsCreditCard2Front /> Фильтры
        </div>
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