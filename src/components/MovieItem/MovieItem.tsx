import style from './movieItem-style.module.scss';
import Image from 'next/image';
import { INewMovie } from '@/interface/IMovie';
import { AiOutlineStar, BiBookmark, BsMagic, RiDislikeLine } from '../Icons';
import { useRouter } from 'next/router';

type MovieItemProps = {
  movie: INewMovie,
  width?: number,
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, width }) => {
  const router = useRouter();

  const capitalize = (arr: string[]): string[] => {
    return arr.map(item => 
      item[0].toUpperCase() + item.slice(1).toLowerCase()
    )
  }

  return (
    <div 
      className={`${style.movie}`}
      onClick={() => router.push(`/watch/${movie.id}`)}
      style={{minWidth: width + 'px'}}
    >
      <div className={style.movie__poster}>
        <div className={style['movie__poster-image']}>
          <Image 
            src={movie.image}
            width={500}
            height={500}
            alt="poster"
          />
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
            {movie.countries && movie.countries.join(', ')}
          </div>
          <div className={style.movie__row}>
          {
            movie.genre && capitalize(movie.genre).join(', ')
          } <br/>
          </div>
          <div className={style.movie__row}>
            {movie.filmLength && `${movie.filmLength} мин`}
          </div>
        </div>
      </div>
      <div className={style.movie__info}>
        <span className={style.movie__title}>
          {movie.name}
        </span>
        <span className={style.movie__subscription}>
          Бесплатно
        </span>
      </div>
    </div>
  )
}

export default MovieItem