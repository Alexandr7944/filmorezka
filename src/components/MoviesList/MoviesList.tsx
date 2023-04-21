import style from './moviesList-style.module.scss';
import Fetching from '@/API/Fetching';
import { IMovie } from '@/interface/IMovie';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react'
import { Arrow, BiChevronLeft, BiChevronRight } from '../Icons';
import {MovieItem, MovieItemDefault} from '../MovieItem';

const WIDTH_ITEM = 200;

interface IMoviesListProps {
  title: string;
  url: string;
}

const MoviesList: React.FC<IMoviesListProps> = ({ title, url }) => {
  const [movies, setMovies] = useState<IMovie[] | undefined>([]);
  const [positionWrapper, setPositionWrapper] = useState(0);
  const list = useRef<null | HTMLDivElement>(null);
  const wrapper = useRef<null | HTMLDivElement>(null);

  const getMovieItemLeft = () => {
    const listWidth = list.current?.offsetWidth || 0;
    setPositionWrapper(prev => Math.min(0, prev + listWidth));
  }

  const getMovieItemRight = () => {
    const listWidth = list.current?.offsetWidth || 0;
    setPositionWrapper(prev => Math.max(prev - listWidth,
      -(WIDTH_ITEM + 20) * ((movies?.length || 0) + 1) + listWidth));
  }

  useEffect(() => {
    Fetching.getAll(url)
      .then(movies => movies.films && setMovies(movies.films));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    wrapper.current?.setAttribute('style', `transform: translateX(${positionWrapper}px)`)
  }, [positionWrapper])

  return (
    <div className={style.movies}>
      <Link href="/collections/#" className={style.movies__link}>
        <h3 className={style.title}>{ title }</h3>
        <Arrow className={style.movies__arrow}/>
      </Link>
      <div className={style.movies__list} ref={list}>
        <button
          className={style.movies__btn}
          onClick={getMovieItemLeft}
        >
          <BiChevronLeft />
        </button>
        <div className={style.movies__wrapper} ref={wrapper}>
          {
            movies?.length && movies.map((item, index) => 
            index < 20 && <MovieItem key={item.filmId} movie={item} />
            )
          }
          <MovieItemDefault link='/collections/#' />
        </div>
        <button
          className={style.movies__btn}
          onClick={getMovieItemRight}
        >
          <BiChevronRight />
        </button>
      </div>
    </div>
  )
}

export default MoviesList