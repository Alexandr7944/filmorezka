import React, {  } from 'react';
import ReactPlayer from 'react-player';
import style from './watchMovie-style.module.scss';
import { BiBookmark, BsDownload, BsFillPlayFill, BsVolumeDown } from '../Icons';
import { ActorContainer } from '../UI/ActorContainer';
import { Button } from '../UI/Button';
import { WatchMovieProps } from '@/interface/WatchMovieProps';

const WatchMovie: React.FC<WatchMovieProps> = ({ movie, video, actors }) => {  
  console.log(video);
  
  const filmLength = (time: number) => {
    if (!time) return '';
    if (movie?.type === 'serial') {
      const typeLength = time % 10 === 1 && time !== 11
        ? 'серия'
        : (time % 10 > 1 && time % 10 < 5) && !(time > 11 && time <= 15)
          ? 'серии' : 'серий'
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
            url={video?.items && video.items[0]?.url}
          />
          <video src='https://widgets.kinopoisk.ru/discovery/trailer/86972?onlyPlayer=1&autoplay=1&cover=1' />
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
          <Button >
            <BsFillPlayFill />
            Трейлер
          </Button>
          <Button> <BiBookmark /> </Button>
          <Button> <BsDownload /> </Button>
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