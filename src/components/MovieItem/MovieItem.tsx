import style from './movieItem-style.module.scss';
import { IMovie } from '@/interface/IMovie';
import React, { MutableRefObject } from 'react';
import { AiOutlineStar, BiBookmark, BsMagic, RiDislikeLine } from '../Icons';

type MovieItemProps = {
  movie: IMovie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {

  return (
    <div className={style.movie}>
      <div className={style.movie__poster}>
        <div className={style['movie__poster-image']}>
          <img src={movie.posterUrl} alt="poster" />
        </div>
        <div className={style.movie__poster_mask}>
          <div className={style.movie__poster_wrapper}>
            <BiBookmark className={style.movie__icons} />
            <div className={style.movie__icons_tooltip}>
              Смотреть позже
            </div>
          </div>
          <div className={style.movie__poster_wrapper}>
            <BsMagic className={style.movie__icons}/>
            <div className={style.movie__icons_tooltip}>
              Похожее
            </div>
          </div>
          <div className={style.movie__poster_wrapper}>
            <AiOutlineStar className={style.movie__icons}/>
            <div className={style.movie__icons_tooltip}>
              Уже смотрел, оценить
            </div>
          </div>
          <div className={style.movie__poster_wrapper}>
            <RiDislikeLine className={style.movie__icons}/>
            <div className={style.movie__icons_tooltip}>
              Не нравится такое
            </div>
          </div>
          <div className={style.movie__row}>
            {movie.rating}
          </div>
          <div className={style.movie__row}>
            {movie.year + ', '}
            {movie.countries.map(country => country.country + ', ')}
          </div>
          <div className={style.movie__row}>
          {movie.genres[0].genre[0].toUpperCase() + movie.genres[0].genre.slice(1).toLowerCase()} <br/>
          </div>
          <div className={style.movie__row}>
            Продолжительность:
          </div>
        </div>
      </div>
      <div className={style.movie__info}>
        <span className={style.movie__title}>
          {movie.nameRu}
        </span>
        <span className={style.movie__subscription}>
          Бесплатно
        </span>
      </div>
    </div>
  )
}

export default MovieItem