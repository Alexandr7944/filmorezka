import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import style from './watchMovie-style.module.scss';
import IMoviePage, { IVideo } from '@/interface/IMoviePage';
import Fetching from '@/API/Fetching';
import { BiBookmark, BsDownload, BsFillPlayFill, BsVolumeDown } from '../Icons';
import { IActor } from '@/interface/IActor';
import { ActorContainer } from '../UI/ActorContainer';
import { Button } from '../UI/Button';
import { INewMovie } from '@/interface/IMovie';

type WatchMovieProps = {
  movieId: string
}

const WatchMovie: React.FC<WatchMovieProps> = ({ movieId }) => {
  const [movie, setMovie] = useState<INewMovie>();
  const [video, setVideo] = useState<IVideo>();
  const [actors, setActors] = useState<IActor[]>();
  console.log(movie);

  useEffect(() => {
    Fetching.getNewAll(`http://localhost:5000/films/id/${movieId}`)
      .then(movie => movie && setMovie(movie))
      .then(() => console.log(movie));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  useEffect(() => {
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movie && movie.filmSpId}/videos`)
      .then(video => video && video.items && setVideo(video));
  }, [movieId]);

  useEffect(() => {
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movie && movie.filmSpId}`)
      .then(actors => setActors(actors));
  }, [movieId]);  

  const filmLength = (time: number) => {
    if (!time) return '';
    if (movie?.type === 'serial') {
      const typeLength = time % 10 === 1 && time !== 11
        ? 'серия'
        : (time % 10 > 1 && time % 10 < 5) && !(time > 11 && time <= 15)
          ? 'серии'
          : 'серий'
      return `${time} ${typeLength}`
    };
    const hour = Math.floor(time / 60);
    const minut = time % 60 < 10 ? '0' +  time % 60 : time % 60
    return hour ? `${hour} ч. ${minut} мин.` : `${minut} мин.`;
  }
  
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
          {movie.name}
        </h1>
        <div className={style['watchMovie__params']}>
          <div className={style['watchMovie__params-row']}>
            {`${movie.year} / ${filmLength(Number(movie.filmLength))} / ${movie.rating}`}
          </div>
          <div className={`${style['watchMovie__params-row']} ${style['watchMovie__params-countryGenre']}`}>
            {movie.countries && movie.countries.join(', ')}
          </div>
          <div className={style['watchMovie__params-row']}>
            <span className={style['watchMovie__params-hd']}>FullHD</span>
            <BsVolumeDown size="25px" className={style['watchMovie__params-volum']} />
            <span className={style['watchMovie__params-lang']}>Рус</span>
          </div>
        </div>
        <div className={style['watchMovie__watchMedallions']}>
          <div className={style['watchMedallions__content']}>
            <ActorContainer rating={movie.rating} />
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
          <p>{movie.filmDescription}</p>
        </div>
      </div>
      }
    </div>
  )
}

export default WatchMovie