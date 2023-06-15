import React, { useEffect, useState } from "react";
import styles from './format-style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import {Teaser} from "@/components/UI/Teaser";
import { SlScreenDesktop } from "@/components/Icons/index";
import { DropDownProps, IFormat } from "@/interface/Header";
import { selectGenres } from "@/store/selectors";
import { genre } from "@/types/genre";
import Fetching from "@/API/Fetching";
import { INewMovie } from "@/interface/IMovie";
import { objectToQueryString } from "@/utils/serialize";
import useDebounce from "@/hooks/useDebounce";
import Link from "next/link";

const urlFiltersFilms: string = 'http://localhost:5000/films/filters';
const hashMapImages:Map<string, string[]> = new Map();
import { useRouter } from "next/router";
import en from "@/locales/en/header/header"
import ru from "@/locales/ru/header/header"

interface FormatProps extends DropDownProps {
  content: IFormat;
}

const Format: React.FC<FormatProps> = ({content}) => {
  const { genres } = selectGenres();
  console.log(genres)
  const [imagesTeaser, setImagesTeaser] = useState<string[]>([]);
  const [paramsURL, setParamsURL] = useState<object>({});
  const debouncedParams:boolean = useDebounce(paramsURL, 300);
  
  const getWrapperContentItems = (items: string[] | number[]) => {
    return items.map((item) => (
      <div
        className={styles['content__item']}
        key={uuidv4()}
      >
        <span 
          className={styles['item__text']}
          // href={{
          //   pathname: '/collections/',
          //   query: {
          //     type: content.typeFormatEn
          //   },
          // }}
        > {item}</span>
      </div>
    ));
  };

  const getWrapperGenres = (genres: genre[], locale:string | undefined) => {
    
  return genres.map((genre) => (
      <div
        className={styles['content__item']}
        key={uuidv4()}
      >
        <Link 
          className={styles['item__text']}
          onMouseEnter={() => setParamsURL({genre: genre.nameEn})}
          href={{
            pathname: '/collections/' + genre.nameEn,
            query: {
              type: content.typeFormatEn,
              genre: genre.nameEn
            },
          }}
        >
          {locale=== "ru" ? genre.nameRu.charAt(0).toUpperCase() + genre.nameRu.slice(1).replace("_", " ") : genre.nameEn.charAt(0).toUpperCase() + genre.nameEn.slice(1).replace("_", " ") }
        </Link>
      </div>
    )); 
  };  

  useEffect(() => {
    let changedParamsURL = paramsURL;
  
    if (content.typeFormatEn === 'cartoon') {
      changedParamsURL = { ...paramsURL, genre: content.typeFormatEn };
    } else {
      changedParamsURL = { ...paramsURL, type: content.typeFormatEn };
    }

   
  const serializeParams: string = objectToQueryString(changedParamsURL);

    if (hashMapImages.has(serializeParams)) {
      setImagesTeaser(hashMapImages.get(serializeParams) || []);
    } else if (!debouncedParams) {
      Fetching.getFilters(urlFiltersFilms, 'GET', changedParamsURL)
        .then((data: INewMovie[]) => {
          const images: string[] = data.map(obj => obj.image);
          hashMapImages.set(serializeParams, images);
          setImagesTeaser(images);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }, [paramsURL, content.typeFormatEn, debouncedParams]);
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  return (
    <div
      className={`${styles['wrapper']} container`}
    >
      <div className={styles['genres']}>
        <div className={styles['title']}>
         {t.genres}
        </div>

        <div className={styles['content']}>
          <div className={styles['content__left-part']}>
            {getWrapperGenres(genres.slice(0, genres.length / 2), locale)}
          </div>

          <div className={styles['content__right-part']}>
            {getWrapperGenres(genres.slice(genres.length / 2 + 1, genres.length), locale)}
          </div>
        </div>
      </div>

      <div className={styles['content-link__wrapper']}>
        <div className={styles['countries']}>
          <div className={styles['title']}>
            {t.countries}
          </div>

          <div className={styles['content']}>
            {getWrapperContentItems(content.countries.map(country => `${t[country as keyof typeof t]}`))}
          </div>
        </div>

        <div className={styles['years']}>
          <div className={styles['title']}>
          {t.years}
          </div>

          <div className={styles['content']}>
            {getWrapperContentItems(content.years.map(year => 
              `${t[content.typeFormatRu as keyof typeof t]} ${year} ${t.year}`))
            }
          </div>
        </div>
      </div>
      <div className={styles['filters']}>
        <div className={styles['content']}>
          {getWrapperContentItems(content.filters.map(filter =>`${t[filter as keyof typeof t]}` ))}
        </div>
      </div>

      <div className={styles['activities']}>
        <div className={styles['teaser']}>
          <Teaser images={imagesTeaser}/>
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
