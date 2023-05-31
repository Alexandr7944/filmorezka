import React from 'react';
import styles from './loader-style.module.scss';

const hexToRgbA = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export interface LoaderProps {
  color?: string;
}

const Error: React.FC<LoaderProps> = ({ color }) => {
  if (!color) {
    color = '#ffffff';
  }

  return (
    <div 
      className={styles['loader']}
      style={{
        border: `2px solid ${hexToRgbA(color, 0.5)}`,
        borderTopColor: `${hexToRgbA(color, 1)}`
      }}
    >
    </div>
  )
}

export default Error