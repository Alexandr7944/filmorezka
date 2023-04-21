import React from "react";
import styles from './contentUser-style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from "../../models";
import { ContentProps } from "../models";

interface ContentUserProps extends ContentProps {
  content: IUser;
}

const sizeIcon: string = '22.5px';

const ContentUser: React.FC<ContentUserProps> = ({content}) => {
  return (
    <div
      className={styles['wrapper']}
    >
      <div className={styles['links']}>
        {content.links.map((link) => (
          <div
            className={styles['links__item']}
            key={uuidv4()}
          >
            <div className={styles['item__icon']}>
              {<link.icon size={sizeIcon}/>}
            </div>

            <div className={styles['item__title']}>
              {link.title}
            </div>

            {link.description &&
              <div className={styles['item__description']}>
                {link.description}
              </div>
            }

            {link.mark &&
              <div className={styles['item__mark']}></div>
            }
          </div>
        ))}
      </div>

      <div className={styles['right-part']}>
        <div className={styles['actions']}>
          <div className={styles['button-enter']}>
            Войти или зарегистрироваться
          </div>
        </div>

        <div className={styles['additional-links']}>
          {content.options.map(({title}) => (
            <div
              className={styles['additional-links__item']}
              key={uuidv4()}
            >
              <span className={styles['item__text']}>{title}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default ContentUser
