import React, { ButtonHTMLAttributes } from 'react';
import styles from './button-style.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  testId?: string
}

const Button: React.FC<ButtonProps> = ({ children, testId, ...props }) => {
  return (
    <button 
      className={styles['my-button']}
      {...props}
      data-testid={testId}
    >
      { children }
    </button>
  )
}

export default Button