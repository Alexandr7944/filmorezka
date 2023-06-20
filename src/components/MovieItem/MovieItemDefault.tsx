import React from 'react';
import style from './movieItem-style.module.scss';
import { useRouter } from 'next/router';
import en from "../../locales/en/moviefilter/moviefilter"
import ru from "../../locales/ru/moviefilter/moviefilter"
import { selectLangs } from '@/store/selectors';

interface MovieItemDefaultProps {
  width: number,
}

const MovieItemDefault: React.FC<MovieItemDefaultProps> = ({ width }) => {
  const navigation = useRouter();
  // const {locale} = useRouter();
  const locale = selectLangs();
  const t:any = locale === "en"? en : ru;

  return (
    <div
      className={`${style.movie} ${style.movie__default}`}
      style={{minWidth: width + 'px'}}
    >
      <div className={style.movie__poster}>
       {t.lookall}
      </div>
    </div>
  )
}

export default MovieItemDefault