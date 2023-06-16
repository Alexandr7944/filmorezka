import React, { InputHTMLAttributes, useState } from 'react';
import styles from './input-style.module.scss';
import { IconType } from 'react-icons';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: IconType
  isError?: boolean,
  changeType?: () => void,
  testId?: string
}

const Input: React.FC<InputProps> = ({ placeholder, type, icon, isError, style, changeType, testId,...props }) => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);

  return (
    <div 
      className={`${styles['wrapper']} ${isError ? styles['wrapper-error'] : ''}`}
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => setIsMouseEnter(false)}
      style={style}
    >
      <div 
        className={styles['icon']}
        style={{cursor: `${changeType ? 'pointer' : 'auto'}`}}
      >
        <span 
          className={`${styles['icon__span']} ${isMouseEnter ? styles['icon__span-hover'] : ''} `}
          onClick={changeType}
        >
          {React.createElement(icon, {size: '20px'})}
        </span>
      </div>

      <input 
        className={styles['input']} 
        {...props}
        type={type} 
        name={type}
        placeholder={placeholder}
        data-testid={testId}
      />

      <label 
        className={styles['placeholder']} 
        htmlFor={type}
      >
        {placeholder}
      </label>

      <div 
        className={`${styles['border-bottom']} ${isMouseEnter ? styles['border-bottom-hover'] : ''}`}
      ></div>
    </div>
  )
}

export default Input