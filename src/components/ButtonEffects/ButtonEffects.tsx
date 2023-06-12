import React from 'react';
import styles from './buttonEffects-style.module.scss';
import { Button } from '../UI/Button';

const ButtonEffects: React.FC = () => {
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
        <img
          src={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg'}
        >
        </img>

        <span className={styles.description}>30 дней подписки бесплатно</span>
      </div>
    </Button>
  )
}

export default ButtonEffects