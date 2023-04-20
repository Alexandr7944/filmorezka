import React, {useState} from 'react';
import styles from './header-style.module.scss';
import {v4 as uuidv4} from 'uuid';
import {navigationsItems} from "@/components/UI/Header/models";
import {IoMdNotificationsOutline} from 'react-icons/io';
import {BiSearch, BiUser} from 'react-icons/bi';
import {
  ContentProps,
  HeaderContent,
  IFormat,
  INotification, IUser,
  notifications,
  TypeContent, user
} from "@/components/UI/Header/Content/models";
import ContentLink from "@/components/UI/Header/Content/ContentLink";
import ContentNotification from "@/components/UI/Header/Content/ContentNotification";
import ContentUser from "@/components/UI/Header/Content/ContentUser";

const pictureSite:string = 'https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg';

const Header: React.FC = () => {
  const [contentHeader, setContentHeader] = useState<HeaderContent>();
  const [typeContentHeader, setTypeContentHeader] = useState<TypeContent>();

  const resetContent = () => {
    setContentHeader(null);
    setTypeContentHeader(null);
  }

  const headerMouseLeaveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    resetContent();
  }

  const setContentHeaderMouseEnterHandler = (e: React.MouseEvent<HTMLDivElement | SVGElement>, content: HeaderContent, type: TypeContent) => {
    setContentHeader(content);
    setTypeContentHeader(type);
  }

  const resetContentHeaderMouseEnterHandler = (e: React.MouseEvent<HTMLDivElement | SVGElement>) => {
    resetContent();
  }

  const getReactComponentByContent = (content: HeaderContent, typeContent: TypeContent): React.FC<ContentProps> => {
    const ContentComponent: React.FC<ContentProps> = () => {
      switch (typeContent) {
        case TypeContent.Link:
          return <ContentLink content={content as IFormat} />
        case TypeContent.Notification:
          return <ContentNotification content={content as INotification} />
        case TypeContent.User:
          return <ContentUser content={content as IUser} />
        default:
          throw new Error(`Нереализованный тип ${typeContent}`);
      }
    };

    return ContentComponent;
  }

  return (
    <div
      className={`${styles['header']} ${contentHeader ? styles['header-active'] : ''}`}
      onMouseLeave={headerMouseLeaveHandler}
    >
      <div className={styles['links']}>
        <img
          className={styles['picture-site']}
          src={pictureSite}
          alt="ivi"
        />

        <div className={styles['navigation']}>
          {navigationsItems.map((item) => (
            <div
              className={styles['navigation__item']}
              key={uuidv4()}
              onMouseEnter={
                item.content
                  ? (e) => setContentHeaderMouseEnterHandler(e, item.content!, item.typeContent!)
                  : resetContentHeaderMouseEnterHandler
              }
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className={styles['activities']}>
          <div className={styles['subscription-payment']}>Оплатить подписку</div>

          <div className={styles['search']}>
            <BiSearch size='20px' />
            <span>Поиск</span>
          </div>

          <div className={styles['notifications']}>
            <IoMdNotificationsOutline
              size='25px'
              className={styles['notification-icon']}
              onMouseEnter={(e) =>
                setContentHeaderMouseEnterHandler(e, notifications, TypeContent.Notification)
              }
            />
          </div>

          <div
            className={styles['avatar']}
            onMouseEnter={(e) =>
              setContentHeaderMouseEnterHandler(e, user, TypeContent.User)
            }
          >
            <BiUser size='25px'/>
          </div>
        </div>
      </div>

      {contentHeader &&
        getReactComponentByContent(contentHeader, typeContentHeader!)()
      }
    </div>
  )
}

export default Header