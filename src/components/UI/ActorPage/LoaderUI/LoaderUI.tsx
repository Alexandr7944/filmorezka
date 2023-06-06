import React from 'react'
import style from "./loader-style.module.scss";
const LoaderUI = () => {
  return (
    <div className={style.loader}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className={style.spinner}>
      <circle stroke="url(#gradient)" r="20" cy="33" cx="33" strokeWidth="2" fill="transparent" className={style.path}></circle>
        <linearGradient id="gradient">
          <stop stopOpacity="1" stopColor="#ea003d" offset="0%"></stop>
          <stop stopOpacity="0" stopColor="#af3dff" offset="100%"></stop>
        </linearGradient>
      
    </svg> 
  </div>
  )
}

export default LoaderUI