import React from 'react';
import styles from './button-style.module.scss';

type ButtonProps = {
  title: string
}

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <button
      className={styles['my-button']}
    >
      { title }
    </button>
  )
}

export default Button