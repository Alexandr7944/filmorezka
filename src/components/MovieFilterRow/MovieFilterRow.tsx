import styles from './movieFilterRow-style.module.scss';

type MovieFilterRowProps = {
  type: string,
  name: string | number,
  active: boolean,
  handlerClickItem: (type: string, name: string | number) => void
}

const MovieFilterRow: React.FC<MovieFilterRowProps> = ({ type, name, active, handlerClickItem }) => {
  return (
    <li
      className={`
        ${styles['filter-row']} 
        ${styles[`${active && 'filter-row_active'}`]}
      `}
      onClick={() => handlerClickItem(type, name)}>
      <span>{name}</span>
      {active && <span>&#10004;</span>}
    </li>
  )
}

export default MovieFilterRow