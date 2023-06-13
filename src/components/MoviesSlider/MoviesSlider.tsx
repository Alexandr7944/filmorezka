import style from './moviesSlider-style.module.scss';
import Fetching from '@/API/Fetching';
import { INewMovie } from '@/interface/IMovie';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react'
import { Arrow, BiChevronLeft, BiChevronRight } from '../Icons';
import {MovieItem, MovieItemDefault} from '../MovieItem';
import { Loader } from '../UI/Loader';

const WIDTH_ITEM = 180;
const LIMIT_ITEM_PAGE = 15;

const MoviesSlider: React.FC<IMoviesSliderProps> = ({ title, genre, url }) => {
  const [movies, setMovies] = useState<INewMovie[]>([]);
  const [widthItem, setWidthItem] = useState<number>(WIDTH_ITEM);
  const [positionWrapper, setPositionWrapper] = useState(0);

  const list = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!list.current?.offsetWidth) return;

    let numItem = Math.floor(list.current.offsetWidth / widthItem);
    const calcWidthItem = Math.round(list.current.offsetWidth / numItem);
    calcWidthItem > 200 && numItem++;
    calcWidthItem < 150 && numItem--;
    
    setWidthItem(Math.round(list.current.offsetWidth / numItem))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list.current?.offsetWidth]);
  
  const getMovieItemLeft = () => {
    const listWidth = list.current?.offsetWidth || 0;
    setPositionWrapper(Math.min(0, positionWrapper + listWidth));
  }

  const getMovieItemRight = () => {
    const listWidth = list.current?.offsetWidth || 0;
    const moviesLength = movies && movies.length <= LIMIT_ITEM_PAGE 
      ? movies?.length : LIMIT_ITEM_PAGE;
    setPositionWrapper(prev => Math.max(prev - listWidth,
      (-widthItem * (moviesLength + 1)) + listWidth));
  }

  useEffect(() => {
    Fetching.getNewAll(url)
      .then(movies => setMovies(movies));
  }, [url]);
  
  useEffect(() => {
    wrapper.current?.setAttribute('style', `transform: translateX(${positionWrapper}px)`)
  }, [positionWrapper])

  return (
    <div className={style.movies}>
      <Link href={`/collections/${genre}`} className={style.movies__link}>
        <h3 className={style.movies__title}>{ title }</h3>
        <Arrow className={style.movies__arrow} width='40px' height='15px'/>
      </Link>
      {
        movies
        ? <div className={style.movies__list} ref={list}>
          <button
            className={style.movies__btn}
            onClick={getMovieItemLeft}
          >
            <BiChevronLeft />
          </button>
          <div className={style.movies__wrapper} ref={wrapper}>
            {
              movies?.length && movies.map((item, index) => 
                (index < LIMIT_ITEM_PAGE) && <MovieItem key={item.id} movie={item} width={widthItem} />
              )
            }
            <MovieItemDefault link='/collections/#'  width={widthItem} />
          </div>
          <button
            className={style.movies__btn}
            onClick={getMovieItemRight}
          >
            <BiChevronRight />
          </button>
        </div>
        : <Loader />
      }
    </div>
  )
}

export default MoviesSlider

interface IMoviesSliderProps {
  title: string,
  genre: string,
  url: string
}