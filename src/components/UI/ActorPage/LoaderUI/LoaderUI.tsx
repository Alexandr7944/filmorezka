import React from 'react'
import style from "./loader-style.module.scss";
export interface LoaderProps {
  color1?: string;
  color2?: string;
}
const LoaderUI: React.FC<LoaderProps> = ({color1,color2}) => {

    color1= "#ea003d";
    color2= "#af3dff";
  
  return (
    <div className={style.loader}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className={style.spinner}>
      <circle stroke="url(#gradient)" r="20" cy="33" cx="33" strokeWidth="2" fill="transparent" className={style.path}></circle>
        <linearGradient id="gradient">
          <stop stopOpacity="1" stopColor={color1} offset="0%"></stop>
          <stop stopOpacity="0" stopColor={color2} offset="100%"></stop>
        </linearGradient>
      
    </svg> 
  </div>
  )
}

export default LoaderUI