import React from "react";
import styles from './format-style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import {Teaser} from "@/components/UI/Teaser";
import { SlScreenDesktop } from "@/components/Icons/index";
import { DropDownProps, IFormat } from "@/interface/Header";
import { useAppDispatch } from "@/hooks/hook";
import { selectMediaFilters } from "@/store/selectors";
import { genre } from "@/types/genre";

interface FormatProps extends DropDownProps {
  content: IFormat;
}

const getWrapperContentItems = (items: string[] | number[]) => {
  return items.map((item) => (
    <div
      className={styles['content__item']}
      key={uuidv4()}
    >
        <span className={styles['item__text']}>{item}</span>
    </div>
  ));
};

const getWrapperGenres = (genres: genre[]) => {
  return genres.map((genre) => (
    <div
      className={styles['content__item']}
      key={uuidv4()}
    >
      <span className={styles['item__text']}>
        {genre.nameRu.charAt(0).toUpperCase() + genre.nameRu.slice(1)}
      </span>
    </div>
  ));
};

const Format: React.FC<FormatProps> = ({content}) => {
  const dispatch = useAppDispatch();
  const { genres } = selectMediaFilters();

  return (
    <div
      className={styles['wrapper']}
    >
      <div className={styles['genres']}>
        <div className={styles['title']}>
          Жанры
        </div>

        <div className={styles['content']}>
          <div className={styles['content__left-part']}>
            {getWrapperGenres(genres.slice(0, genres.length / 2))}
          </div>

          <div className={styles['content__right-part']}>
            {getWrapperGenres(genres.slice(genres.length / 2 + 1, genres.length))}
          </div>
        </div>
      </div>

      <div className={styles['content-link__wrapper']}>
        <div className={styles['countries']}>
          <div className={styles['title']}>
            Страны
          </div>

          <div className={styles['content']}>
            {getWrapperContentItems(content.countries)}
          </div>
        </div>

        <div className={styles['years']}>
          <div className={styles['title']}>
            Годы
          </div>

          <div className={styles['content']}>
            {getWrapperContentItems(content.years.map(year => `${content.typeFormat} ${year} года`))}
          </div>
        </div>
      </div>

      <div className={styles['filters']}>
        <div className={styles['content']}>
          {getWrapperContentItems(content.filters)}
        </div>
      </div>

      <div className={styles['activities']}>
        <div className={styles['teaser']}>
          <Teaser/>
        </div>

        <div className={styles['button-watch']}>
          <SlScreenDesktop size={"18px"} className={styles['button-watch__icon']}/>
          <span className={styles['button-watch__text']}>Смотреть на SmartTV</span>
        </div>
      </div>
    </div>
  )
}

export default Format
