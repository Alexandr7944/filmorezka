import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import style from './watchMovie-style.module.scss';
import IMoviePage, { IVideo } from '@/interface/IMoviePage';
import { useRouter } from 'next/router';
import Fetching from '@/API/Fetching';
import { BiBookmark, BsDownload, BsFillPlayFill, BsVolumeDown } from '../Icons';
import { IActor } from '@/interface/IActor';
import { ActorContainer } from '../UI/ActorContainer';
import { Button } from '../UI/Button';

const WatchMovie = () => {
  const [movie, setMovie] = useState<IMoviePage | undefined>();
  const [video, setVideo] = useState<IVideo | undefined>();
  const [actors, setActors] = useState<IActor[] | undefined>();
  const router = useRouter();
  
  useEffect(() => {
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${router.query.movieId}`)
      .then(movie => movie && setMovie(movie));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.movieId]);

  useEffect(() => {
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${router.query.movieId}/videos`)
      .then(video => video && video.items && setVideo(video));
  }, [router.query.movieId]);

  useEffect(() => {
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${router.query.movieId}`)
      .then(actors => setActors(actors));
  }, [router.query.movieId]);  

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
        <div className={style['watchMovie__player']}>
          <ReactPlayer
            className={style['player']}
            url={video?.items && video.items[0].url}
          />
        </div>
        <h1 className={style['watchMovie__title']}>
          {movie.nameRu}
        </h1>
        <div className={style['watchMovie__params']}>
          <div className={style['watchMovie__params-row']}>
            {`${movie.year} ${filmLength(Number(movie.filmLength))} ${movie.ratingKinopoisk}`}
          </div>
          <div className={`${style['watchMovie__params-row']} ${style['watchMovie__params-countryGenre']}`}>
            {countryGenre && countryGenre.join(', ')}
          </div>
          <div className={style['watchMovie__params-row']}>
            <span className={style['watchMovie__params-hd']}>FullHD</span>
            <BsVolumeDown size="25px" className={style['watchMovie__params-volum']} />
            <span className={style['watchMovie__params-lang']}>Рус</span>
          </div>
        </div>
        <div className={style['watchMovie__watchMedallions']}>
          <div className={style['watchMedallions__content']}>
            <ActorContainer rating={movie.ratingKinopoisk} />
            {actors && (actors.length > 0) && actors.map((actor, index) => (
              index < 5 && <ActorContainer key={actor.staffId} actor={actor} />
            ))}
          </div>
        </div>
        <div className={style['watchMovie__buttons']}>
          <Button title={
            <>
              <BsFillPlayFill />
              Трейлер
            </>
          } />
          <Button title={ <BiBookmark /> }/>
          <Button title={ <BsDownload /> }/>
        </div>
        <div className={style['watchMovie__text']}>
          <p>{movie.description}</p>
        </div>
      </div>
      }
    </div>
  )
}

export default WatchMovie