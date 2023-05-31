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

  const videoUrl = video?.items?.find((video) => video.url.includes('youtube'))?.url
  
  return (
    <div className={style['watchMovie']}>
      <div className={style['watchMovie__video-wrapper']}>
        <div className={style['watchMovie__player']}>
          {videoUrl
            ? <ReactPlayer
              className={style['player']}
              url={videoUrl}
            />
            : <video 
              width="100%" 
              height="100%" 
              controls={true} 
              poster={movie.image}
            >
              <source src='http://trailers.s3.mds.yandex.net/video_original/171013-357535826b8706313fe4209fdd869ec0.mp4' />
              Тег video не поддерживается вашим браузером.
            </video>
          }
        </div>
        <h1 className={style['watchMovie__title']}>
          {movie.name}
        </h1>
        <div className={style['watchMovie__params']}>
          <div className={style['watchMovie__params-row']}>
            {
              movie.filmLength 
                ? `${movie.year} год, ${filmLength(Number(movie.filmLength))}, ${movie.rating}`
                : `${movie.year} год, ${movie.rating}`
            }
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
    </div>
  )
}

export default WatchMovie