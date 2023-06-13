import React, {useState} from 'react';
import styles from './teaser-style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import Image from "next/image";

interface TeaserProps {
  images: string[]
}

const renderImages = (images: string[]) => {
  return images.map((image) => (
    <div
      className={styles['container-image']}
      key={uuidv4()}
    >
      <Image
        className={styles['image']}
        src={image}
        alt="image"
        width={128}
        height={72}
      />
    </div>
  ));
};

const countImagesScreen:number = 3;
const countWrapperMovies:number = 3;
const minLenght:number = 15;

const Teaser: React.FC<TeaserProps> = ({ images }) => {
  const [isActiveTeaser, setIsActiveTeaser] = useState<boolean>();
  
  if (images.length > minLenght) {
    images = images.slice(0, 15);
  } else if (images.length > 0 && images.length < minLenght) {
    for (let i = 0; images.length < minLenght; ++i) {
      images.push(images[i]);
    }
  }

  const topMovies: string[] = images 
    ? images.slice(0, images.length / countWrapperMovies) 
    : [];

  const middleMovies: string[] = images 
    ? images.slice(images.length / countWrapperMovies, images.length / countWrapperMovies * 2) 
    : [];

  const bottomMovies: string[] = images 
    ? images.slice(-images.length / countWrapperMovies) 
    : [];

  return (
    <div
      className={styles['teaser']}
      onMouseEnter={() => setIsActiveTeaser(true)}
      onMouseLeave={() => setIsActiveTeaser(false)}
    >
      <div className={styles['left-fade']}></div>
      <div className={styles['right-fade']}></div>

      <div className={styles['carousel']}>
        <div className={styles['top-wrapper']}>
          {renderImages(topMovies.slice(-countImagesScreen))}
          {renderImages(topMovies)}
        </div>

        <div className={styles['middle-wrapper']}>
          {renderImages(middleMovies.slice(-countImagesScreen))}
          {renderImages(middleMovies)}
        </div>

        <div className={styles['bottom-wrapper']}>
          {renderImages(bottomMovies.slice(-countImagesScreen))}
          {renderImages(bottomMovies)}
        </div>
      </div>

      <div
        className={`${styles['subscribe']} ${isActiveTeaser ? styles['subscribe-active'] : ''}`}
      >
        <div className={styles['bottom-fade']}></div>

        <div className={styles['subscribe__info']}>
          <div className={styles['picture-manufacturer']}>
            <Image
              src="https://solea-parent.dfs.ivi.ru/picture/bypass/reposition_subscription_ivi.svg"
              alt="manufacturer"
              width={48}
              height={48}
            />
          </div>

          <div className={styles['text']}>
            <div className={styles['title']}>
              Подписка Иви
            </div>

            <div className={styles['price']}>
              От 199 ₽ за месяц
            </div>
          </div>
        </div>

        <div className={styles['subscribe-button']}>
          Подключить
        </div>

        <div className={styles['footnote']}>
          Отключить можно в любой момент
        </div>
      </div>
    </div>
  )
}

export default Teaser