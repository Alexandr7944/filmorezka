import React from 'react';
import style from './movieItem-style.module.scss';
import { useRouter } from 'next/router';

interface MovieItemDefaultProps {
  link: string
}

const MovieItemDefault: React.FC<MovieItemDefaultProps> = ({ link }) => {
  const navigation = useRouter();

  return (
    <div
      className={style.movie__default}
      onClick={() => navigation.push('/link')}
    >
      <div className={style.movie__poster}>
        Посмотреть все
      </div>
    </div>
  )
}

export default MovieItemDefault