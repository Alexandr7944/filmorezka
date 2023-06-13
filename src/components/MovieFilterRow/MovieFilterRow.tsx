import styles from './movieFilterRow-style.module.scss';

type MovieFilterRowProps = {
  type: string,
  name: string,
  active: boolean,
  presence: boolean,
  handlerClickItem: (type: string, name: string) => void
}

const MovieFilterRow: React.FC<MovieFilterRowProps> = ({ 
  type, name, active, presence, handlerClickItem 
}) => {
  
  return (
    <li
      className={`
        ${styles['filter-row']} 
        ${styles[`${active && 'filter-row_active'}`]}
        ${styles[`${presence && 'filter-row_presence'}`]}
      `}
      onClick={() => handlerClickItem(type, name)}>
      <span>{name}</span>
      {active && <span>&#10004;</span>}
    </li>
  )
}

export default MovieFilterRow