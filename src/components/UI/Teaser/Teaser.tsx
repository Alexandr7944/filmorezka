import React from 'react';
import styles from './teaser-style.module.scss';

type TeaserProps = {
}

//TODO недоделанная версия
const Teaser: React.FC<TeaserProps> = () => {
  return (
    <div
      className={styles['teaser']}
    >
      <img
        className={styles['picture-site-1']}
        src={'https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg'}
        alt="ivi"
      />
      <img
        className={styles['picture-site-2']}
        src={'https://hit-print.ru/upload/iblock/637/637f1198fe9a718764fa82131303b2b3.jpg'}
        alt="ivi"
      />
      <img
        className={styles['picture-site-3']}
        src={'https://d9ae6ad5-3627-4bf2-85a7-22bbd5549e94.selcdn.net/uploads/picture/picture/330926/large_4607010740191.JPG'}
        alt="ivi"
      />
      <img
        className={styles['picture-site-3']}
        src={'https://emksp.ru/files/fba/fba4fd332567a5ee2f1e7b65f5c148f0.jpg'}
        alt="ivi"
      />
    </div>
  )
}

export default Teaser