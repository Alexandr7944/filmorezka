import React from 'react';
import style from './movieItem-style.module.scss';

interface MovieItemDefaultProps {
  width: number,
}

const MovieItemDefault: React.FC<MovieItemDefaultProps> = ({ width }) => {

  return (
    <div
      className={`${style.movie} ${style.movie__default}`}
      style={{minWidth: width + 'px'}}
    >
      <div className={style.movie__poster}>
        Посмотреть все
      </div>
    </div>
  )
}

export default MovieItemDefault