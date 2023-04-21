import React from "react";
import styles from './contentLinks-style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import {Teaser} from "@/components/UI/Teaser";
import { SlScreenDesktop } from "@/components/Icons/index";
import { IFormat } from "../../models";
import { ContentProps } from "../models";

interface ContentLinkProps extends ContentProps {
  content: IFormat;
}

const renderContentItems = (items: string[] | number[]) => {
  return items.map((item) => (
    <div
      className={styles['content__item']}
      key={uuidv4()}
    >
      <span className={styles['item__text']}>{item}</span>
    </div>
  ));
};

const ContentLink: React.FC<ContentLinkProps> = ({content}) => {
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
            {renderContentItems(content.genres.slice(0, 11))}
          </div>

          <div className={styles['content__right-part']}>
            {renderContentItems(content.genres.slice(11))}
          </div>
        </div>
      </div>

      <div className={styles['content-link__wrapper']}>
        <div className={styles['countries']}>
          <div className={styles['title']}>
            Страны
          </div>

          <div className={styles['content']}>
            {renderContentItems(content.countries)}
          </div>
        </div>

        <div className={styles['years']}>
          <div className={styles['title']}>
            Годы
          </div>

          <div className={styles['content']}>
            {renderContentItems(content.years.map(year => `${content.nameFormat} ${year} года`))}
          </div>
        </div>
      </div>

      <div className={styles['filters']}>
        <div className={styles['content']}>
          {renderContentItems(content.filters)}
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

export default ContentLink
