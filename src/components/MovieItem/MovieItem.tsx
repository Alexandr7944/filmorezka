import style from './movieItem-style.module.scss';
import Image from 'next/image';
import { INewMovie } from '@/interface/IMovie';
import { AiOutlineStar, BiBookmark, BsMagic, RiDislikeLine } from '../Icons';
import defaultImage from '@/image/pngjoy.com_movie-clapper-clap-board-png-hd-transparent-png_2339042.png';
import { useRouter } from 'next/router';
import en from "../../locales/en/moviefilter/moviefilter"
import ru from "../../locales/ru/moviefilter/moviefilter"
import { selectLangs } from '@/store/selectors';
type MovieItemProps = {
  movie: INewMovie,
  width?: number,
  className?: string
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, width }) => {
  const router = useRouter();

  const capitalize = (arr: string[]): string[] => {
    return arr.map(item => 
      item[0].toUpperCase() + item.slice(1).toLowerCase()
    )
  }
  // const {locale} = useRouter();
  const locale = selectLangs();
  const t:any = locale === "en"? en : ru;
  return (
    <div 
      className={`${style.movie}`}
      onClick={() => router.push(`/watch/${movie.id}`)}
      style={{minWidth: width + 'px'}}
    >
      <div className={style.movie__poster}>
        <div className={style['movie__poster-image']}>
          <Image 
            src={movie.image || defaultImage}
            width={500}
            height={500}
            alt="poster"
          />
        </div>
        <div className={style.movie__poster_mask}>
          <div className={style.movie__poster_wrapper}>
            <BiBookmark className={style.movie__icons} />
            <div className={style.movie__icons_tooltip}>
             {t.later}
            </div>
          </div>
          <div className={style.movie__poster_wrapper}>
            <BsMagic className={style.movie__icons}/>
            <div className={style.movie__icons_tooltip}>
              {t.similar}
            </div>
          </div>
          <div className={style.movie__poster_wrapper}>
            <AiOutlineStar className={style.movie__icons}/>
            <div className={style.movie__icons_tooltip}>
              {t.rate}
            </div>
          </div>
          <div className={style.movie__poster_wrapper}>
            <RiDislikeLine className={style.movie__icons}/>
            <div className={style.movie__icons_tooltip}>
              {t.dontlike}
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
            {movie.filmLength && `${movie.filmLength} ${t.min}`}
          </div>
        </div>
      </div>
      <div className={style.movie__info}>
        <span className={style.movie__title}>
          {locale === "ru" ? movie.name : movie.nameEn || movie.name }
        </span>
        <span className={style.movie__subscription}>
          {t.free}
        </span>
      </div>
    </div>
  )
}

export default MovieItem