import React, {useState} from 'react';
import styles from './teaser-style.module.scss';
import { v4 as uuidv4 } from 'uuid';

type TeaserProps = {
}

const renderImages = (images: string[]) => {
  return images.map((image) => (
    <div
      className={styles['container-image']}
      key={uuidv4()}
    >
      <img
        className={styles['image']}
        src={image}
        alt="image"
      />
    </div>
  ));
};

const images: string[] = [
  'https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg',
  'https://hit-print.ru/upload/iblock/637/637f1198fe9a718764fa82131303b2b3.jpg',
  'https://d9ae6ad5-3627-4bf2-85a7-22bbd5549e94.selcdn.net/uploads/picture/picture/330926/large_4607010740191.JPG',
  'https://emksp.ru/files/fba/fba4fd332567a5ee2f1e7b65f5c148f0.jpg'
]

const countImageOnScreen = 3;

const Teaser: React.FC<TeaserProps> = () => {
  const [isActiveTeaser, setIsActiveTeaser] = useState<boolean>();

  const teaserMouseEnterHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsActiveTeaser(true);
  }

  const teaserMouseLeaveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsActiveTeaser(false);
  }

  return (
    <div
      className={styles['teaser']}
      onMouseEnter={teaserMouseEnterHandler}
      onMouseLeave={teaserMouseLeaveHandler}
    >
      <div className={styles['left-fade']}></div>
      <div className={styles['right-fade']}></div>

      <div className={styles['carousel']}>
        <div className={styles['top-wrapper']}>
          {renderImages(images)}
          {renderImages(images.slice(0, countImageOnScreen))}
        </div>

        <div className={styles['middle-wrapper']}>
          {renderImages(images)}
          {renderImages(images.slice(0, countImageOnScreen))}
        </div>

        <div className={styles['bottom-wrapper']}>
          {renderImages(images)}
          {renderImages(images.slice(0, countImageOnScreen))}
        </div>
      </div>

      <div
        className={`${styles['subscribe']} ${isActiveTeaser ? styles['subscribe-active'] : ''}`}
      >
        <div className={styles['bottom-fade']}></div>

        <div className={styles['subscribe__info']}>
          <div className={styles['picture-manufacturer']}>
            <img
              src="https://solea-parent.dfs.ivi.ru/picture/bypass/reposition_subscription_ivi.svg"
              alt="manufacturer"
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