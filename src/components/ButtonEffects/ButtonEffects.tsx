import React from 'react';
import styles from './buttonEffects-style.module.scss';
import { Button } from '../UI/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';
import en from "../../locales/en/buttoneffect/buttoneffect"
import ru from "../../locales/ru/buttoneffect/buttoneffect"
import { selectLangs } from '@/store/selectors';
const ButtonEffects: React.FC = () => {
  // const {locale} = useRouter();
  const locale = selectLangs();
  const t = locale === "en"? en : ru;
  return (
    <Button 
      style={{
        backgroundColor: '#1f1b2e',
        width: '98%',
        maxWidth: '1370px',
        margin: '15px auto',
        height: '45px',
        padding: '0'
      }}
    >
      <div className={styles.background}>
        <Image
          src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg'}
          alt="image"
          width={30}
          height={30}
        >
        </Image>

        <span className={styles.description}>{t.freedays}</span>
      </div>
    </Button>
  )
}

export default ButtonEffects