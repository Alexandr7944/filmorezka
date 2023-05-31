import React from 'react';
import styles from './error-style.module.scss';
import { BiErrorCircle } from '../../Icons';

export interface ErrorProps {
  title: string ;
  description: string;
}

const Error: React.FC<ErrorProps> = ({ title, description }) => {
  return (
    <div 
      className={styles['error']}
    >
      <div className={styles['error__icon']}>
        <div className={styles['icon']}>
          <BiErrorCircle size={'40px'}/>
        </div>
      </div>

      <div className={styles['error__text']}>
        <div className={styles['title']}>
          {title}
        </div>

        <div className={styles['description']}>
          {description}
        </div>
      </div>
    </div>
  )
}

export default Error