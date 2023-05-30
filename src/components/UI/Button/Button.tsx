import React, { ButtonHTMLAttributes } from 'react';
import styles from './button-style.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button 
      className={styles['my-button']}
      {...props}
    >
      { children }
    </button>
  )
}

export default Button