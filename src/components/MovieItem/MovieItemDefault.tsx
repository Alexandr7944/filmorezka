import React from 'react';
import style from './movieItem-style.module.scss';
import { useRouter } from 'next/router';

interface MovieItemDefaultProps {
  link: string,
  width: number,
}

const MovieItemDefault: React.FC<MovieItemDefaultProps> = ({ link, width }) => {
  const navigation = useRouter();

  return (
    <div
      className={`${style.movie} ${style.movie__default}`}
      onClick={() => navigation.push(`/${link}`)}
      style={{minWidth: width + 'px'}}
    >
      <div className={style.movie__poster}>
        Посмотреть все
      </div>
    </div>
  )
}

export default MovieItemDefault