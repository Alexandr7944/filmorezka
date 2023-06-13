import { MovieFilter, MovieFilterItemProps } from '@/interface/MovieFilter';
import styles from './movieFilterItem.module.scss';
import MovieFilterRow from '../MovieFilterRow/MovieFilterRow';

const MovieFilterItem: React.FC<MovieFilterItemProps> = (
    { type, title, types, presenceTypes, getTypes, setGetTypes, moviesFilter, setMoviesFilter }
  ) => {
    
  const handlerClickItem = (type: string, name: string): void => {
    type === 'genre' || type === 'countries'
      ? moviesFilter[type as keyof MovieFilter].includes(name)
        ? setMoviesFilter({
          ...moviesFilter,
          [type]: moviesFilter[type as keyof MovieFilter].filter(i => i !== name)})
        : setMoviesFilter({
          ...moviesFilter,
          [type]: [...moviesFilter[type as keyof MovieFilter], name]
        })
      : moviesFilter[type as keyof MovieFilter].includes(name)
        ? setMoviesFilter({
          ...moviesFilter,
          [type]: ['Все годы', 'Любой рейтинг']})
        : setMoviesFilter({
          ...moviesFilter,
          [type]: [name]
        })
  }

  const moviesFilterType = moviesFilter[type as keyof MovieFilter];

  return (
    <div className={styles['filter-item']}>
      <h5
        className={styles['filter-item__title']}
        onClick={() => setGetTypes(getTypes === title ? '' : title)}
      >
        {title}
      </h5>
      {
        !moviesFilterType.includes('Все годы') 
        && !moviesFilterType.includes('Любой рейтинг')
        && moviesFilterType.join(', ')
      }
      {
        getTypes === title &&
        <ul className={styles['filter-item__body']}>
          {types.map(item => <MovieFilterRow
            key={item}
            type={type}
            name={item} 
            active={
              moviesFilterType.includes(item)
              }
            presence={true}
            handlerClickItem={handlerClickItem}
          />
          )}
        </ul>
      }
    </div>
  )
}

export default MovieFilterItem
