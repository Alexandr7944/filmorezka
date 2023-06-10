import { MovieFilter } from '@/interface/MovieFilter';
import styles from './movieFilterItem.module.scss';
import MovieFilterRow from '../MovieFilterRow/MovieFilterRow';

type MovieFilterItemProps = {
  type: string,
  title: string,
  types: string[] | number [],
  getTypes: string,
  setGetTypes: (type: string) => void,
  moviesFilter: MovieFilter,
  setMoviesFilter: (moviesFilter: MovieFilter) => void
};

const MovieFilterItem: React.FC<MovieFilterItemProps> = (
    { type, title, types, getTypes, setGetTypes, moviesFilter, setMoviesFilter }
  ) => {
    
  const handlerClickItem = (type: string | number, name: string | number): void => {
    moviesFilter[type as keyof MovieFilter] === name 
      ? typeof name === 'string'
          ? setMoviesFilter({...moviesFilter, [type]: ''})
          : setMoviesFilter({...moviesFilter, [type]: 0})
      : setMoviesFilter({...moviesFilter, [type]: name});  
  }

  return (
    <div className={styles['filter-item']}>
      <h5
        className={styles['filter-item__title']}
        onClick={() => setGetTypes(getTypes === title ? '' : title)}
      >
        {title}
      </h5>
      {
        getTypes === title &&
        <ul className={styles['filter-item__body']}>
          {types.map(item => <MovieFilterRow
            key={item}
            type={type}
            name={item} 
            active={moviesFilter[type as keyof MovieFilter] === item} 
            handlerClickItem={handlerClickItem}
          />
          // <li key={item}
          //   onClick={() => handlerClickItem(type, item)}>
          //   <span>{item}</span>
          //   {moviesFilter[type as keyof MovieFilter] === item && <span>&#10004;</span>}
          // </li>
          )}
        </ul>
      }
    </div>
  )
}

export default MovieFilterItem
