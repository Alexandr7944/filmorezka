import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import style from './watchMovie-style.module.scss';
import IMoviePage, { IVideo } from '@/interface/IMoviePage';
import { useRouter } from 'next/router';
import Fetching from '@/API/Fetching';

const WatchMovie = () => {
  const [movie, setMovie] = useState<IMoviePage | undefined>();
  const [video, setVideo] = useState<IVideo | undefined>();
  const router = useRouter();

  useEffect(() => {
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${router.query.movieId}`)
      .then(movie => movie && setMovie(movie));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${router.query.movieId}/videos`)
      .then(video => video && setVideo(video));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(video); 

  const filmLength = (time: number) => {
    const hour = Math.floor(time / 60);
    const minut = time % 60 < 10 ? '0' +  time % 60 : time % 60
    return hour ? `${hour} ч. ${minut} мин.` : `${minut} мин.`;
  }

  const countryGenre = movie && movie.countries && movie.genres
    ? [
      ...movie.countries.map(country => country.country),
      ...movie.genres.map(genre => genre.genre)
    ]
    : [];
  

  return (
    <div className={style['watchMovie']}>
      { movie && 
      <div className={style['watchMovie__video-wrapper']}>
        <ReactPlayer
          className={style['watchMovie__player']}
          style={{width: '400px', height: 'auto'}}
          url={video?.items[0].url}
        />
        <h1 className={style['watchMovie__title']}>
          {movie?.nameRu}
        </h1>
        <div className={style['watchMovie__params']}>
          <div className={style['watchMovie__params-row']}>
            {`${movie.year} ${filmLength(Number(movie.filmLength))} ${movie.ratingKinopoisk}`}
          </div>
          <div className={`${style['watchMovie__params-row']} ${style['watchMovie__params-countryGenre']}`}>
            {countryGenre && countryGenre.join(', ')}
          </div>
          <div className={style['watchMovie__params-row']}>

          </div>
        </div>
        <div className={style['watchMovie__video']}>
        
        </div>
      </div>
      }
    </div>
  )
}

export default WatchMovie