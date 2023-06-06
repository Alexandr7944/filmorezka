import React, { useState } from 'react';
import styles from './movieFilterItem.module.scss';

type MovieFilterItemProps = {
  type: string,
  title: string,
  types: string[] | number [],
  getTypes: string,
  setGetTypes: (type: string)=> void
};

const MovieFilterItem: React.FC<MovieFilterItemProps> = (
    { type, title, types, getTypes, setGetTypes }
  ) => {
    
  const handlerClickItem = (type: string | number, name: string | number): void => {
    // setGetTypes(getTypes[type].includes(name));
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
          {types.map(item => <li key={item}
            onClick={() => handlerClickItem(type, item)}
            >{item}</li>
          )}
        </ul>
      }
    </div>
  )
}

export default MovieFilterItem
