import React from 'react'
import style from "./button-style.module.scss";
export type ButtonProps = {
  title: string | React.ReactNode,
  variant: string | React.ReactNode
}
const Button: React.FC<ButtonProps>  = ({title,variant}) => {

  return (
    <div>
            <button
                    className={
                      variant + " " + style.footer__button
                    }
                  >
             {title}
                  </button>
    </div>
  )
}

export default Button