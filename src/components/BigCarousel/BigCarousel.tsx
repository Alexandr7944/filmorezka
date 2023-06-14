import style from './bigCarousel-style.module.scss';
import React, { useEffect, useRef, useState, CSSProperties } from 'react'
import { BiChevronLeft, BiChevronRight } from '../Icons';
import movies, { movie } from './data';
import { v4 as uuidv4 } from 'uuid';
import { useInterval } from '@/hooks/useInterval';
import { NextRouter, useRouter } from 'next/router';
import Image from 'next/image';

const getMovieComponent = (movie: movie, styleComponent: CSSProperties, router: NextRouter): JSX.Element => {
  return (
    <div
      className={style.movie}
      style={styleComponent}
      key={uuidv4()}
      onClick={() => router.push('/')}
    > 
      <Image
        src={movie.imageURL}
        className={style.movie__image}
        alt="image"
        width={100}
        height={100}
      />
      <Image
        src={movie.logoURL}
        className={style.movie__logo}
        alt="image"
        width={100}
        height={100}
      />
      <span className={style.movie__description} >
        {movie.description}
      </span>
    </div>
  )
};

const defualtOffsetImage: number = 1400;
const interval: number = 5000;

const BigCarousel: React.FC = () => {
  const [offsetImage, setOffsetImage] = useState<number>(defualtOffsetImage);
  const [positionXWrapperMovies, setPositionXWrapperMovies] = useState<number>(-movies.length / 2 * defualtOffsetImage);
  const [leftWrapperMovies, setLeftWrapperMovies] = useState<number>(0);
  const [limitLeft, setLimitLeft] = useState<number>(0);
  const [limitRight, setLimitRight] = useState<number>(-(movies.length * defualtOffsetImage + defualtOffsetImage));
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const router = useRouter();

  const wrapperMovies = useRef<HTMLDivElement>(null);

  const stylesCarousel: CSSProperties = { maxWidth: offsetImage };
  const stylesMovie: CSSProperties = { width: offsetImage };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > defualtOffsetImage) {
        setOffsetImage(defualtOffsetImage);
        setPositionXWrapperMovies(-movies.length / 2 * defualtOffsetImage);
        setLimitRight(-(movies.length * defualtOffsetImage + defualtOffsetImage));
      } else {
        let calculatedWidth = window.innerWidth - 30;
        setOffsetImage(calculatedWidth);
        setPositionXWrapperMovies(-movies.length / 2 * calculatedWidth)
        setLimitRight(-(movies.length * calculatedWidth + calculatedWidth));
      }

      setLeftWrapperMovies(0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const changeCentralMovie = (offset: number) => {
    if (offset === -1) {
      setPositionXWrapperMovies(positionXWrapperMovies + offsetImage);
    } else if (offset === 1) {
      setPositionXWrapperMovies(positionXWrapperMovies - offsetImage);
    }
  }

  const changeCentralMovieMouseHandler = (offset: number) => {
    changeCentralMovie(offset);
    setIsPaused(true);

    const interval = setInterval( () => {
      setIsPaused(isPaused => false);
      clearInterval(interval);
    }, 3000);
  }

  const intervalChangeMovie = useInterval(() => {
    changeCentralMovie(1);
  }, isPaused ? null : interval);

  useEffect(() => {
    //изменение left помогает сохранить плавность
    let tempLeft: number = leftWrapperMovies;

    if (positionXWrapperMovies - limitLeft + leftWrapperMovies === 0) {
      tempLeft += limitRight + offsetImage;
      setLeftWrapperMovies(tempLeft);
    } else if (positionXWrapperMovies - limitRight + leftWrapperMovies === 0) {
      tempLeft -= limitRight + offsetImage;
      setLeftWrapperMovies(tempLeft);
    }

    wrapperMovies.current?.setAttribute('style', `
      transform: translateX(${positionXWrapperMovies}px);
      left: ${tempLeft}px;
    `);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positionXWrapperMovies])

  
  if (!movies) {
    return <div></div>
  } 

  return (
    <div className={style.carousel} style={stylesCarousel}>
      <div 
        className={style.movies}
        onClick={() => router.push('collections/random')}
        ref={wrapperMovies}
      >
        {getMovieComponent(movies[movies.length - 1], stylesMovie, router)}

        {movies.map(movie => getMovieComponent(movie, stylesMovie, router))}

        {getMovieComponent(movies[0], stylesMovie, router)}
      </div>

      <div 
          className={`${style.arrow} ${style['arrow-back']}`}
          onClick={() => changeCentralMovieMouseHandler(-1)}
        >
          <BiChevronLeft size={'70px'}/>
        </div>


      <div 
        className={`${style.arrow} ${style['arrow-next']}`}
        onClick={() => changeCentralMovieMouseHandler(1)}
      >
        <BiChevronRight size={'70px'} />
      </div>
    </div>
  )
}

export default BigCarousel