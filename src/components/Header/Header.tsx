import React, { useEffect, useState } from 'react';
import styles from './header-style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { IoMdNotificationsOutline, BiUser } from '../Icons';
import { navigationsItems, notifications, user } from './DropDown/data';
import { Content, TypeContent, IFormat, INotification, IUser } from '@/interface/Header';
import { Format, User, Notification } from './DropDown';
import { useRouter } from 'next/router';
import { IUserState } from '@/store/reducers/userSlice';
import { selectUser } from '@/store/selectors';
import Search from '../Search/Search';
import Image from 'next/image';

const pictureSite: string = 'https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg';

const getDropDown = (content: Content, typeContent: TypeContent): React.ReactNode => {
  switch (typeContent) {
    case TypeContent.Format:
      return <Format content={content as IFormat} />;
    case TypeContent.Notification:
      return <Notification content={content as INotification} />;
    case TypeContent.User:
      return <User content={content as IUser} />;
    default:
      throw new Error(`Нереализованный тип ${typeContent}`);
  }
}

const Header: React.FC = () => {
  const [contentDropDown, setContentDropDown] = useState<Content | null>();
  const [typeComponentDropDown, setTypeComponentDropDown] = useState<TypeContent | null>();
  const [isShowDropDown, setShowDropDown] = useState<boolean>(true);
  const router = useRouter();
  const userAccount: IUserState = selectUser();

  useEffect(() => {
    const handleResize = () => {
      const minWidthShowDropDown: number = 1150;
      if (window.innerWidth > minWidthShowDropDown) {
        setShowDropDown(true);
      } else {
        setShowDropDown(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const resetContent = () => {
    setContentDropDown(null);
    setTypeComponentDropDown(null);
  }

  const setContentHeaderMouseEnterHandler = (content: Content, type: TypeContent) => {
    setContentDropDown(content);
    setTypeComponentDropDown(type);
  }

  return (
    <div
      className={`${styles['header']} ${isShowDropDown && contentDropDown ? styles['header-active'] : ''} container`}
      onMouseLeave={(e) => resetContent()}
    >
      <div className={styles['links']}>
        <Image 
          className={styles['picture-site']} 
          src={pictureSite} 
          alt="ivi" 
          onClick={() => router.push(`/`)}
          height={48}
          width={66}
        />

        <div className={styles['navigation']}>
          {navigationsItems.map((item) => (
            <div
              className={styles['navigation__item']}
              key={uuidv4()}
              onMouseEnter={
                  item.content
                      ? () => setContentHeaderMouseEnterHandler(item.content!, item.typeContent!)
                      : () => resetContent()
              }
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className={styles['activities']}>
          <div className={styles['subscription-payment']}>Оплатить подписку</div>

          <div className={styles['search']}><Search /></div> 


          <div className={styles['notifications']}>
            <IoMdNotificationsOutline
              size="25px"
              className={styles['notification-icon']}
              onMouseEnter={() =>
                  setContentHeaderMouseEnterHandler(
                      notifications,
                      TypeContent.Notification
                  )
              }
            />
          </div>

          <div
              className={`${styles['avatar']} ${userAccount.isAuth ? styles['avatar-name'] : ''}`}
              onMouseEnter={() => setContentHeaderMouseEnterHandler(user, TypeContent.User)}
              onClick={() => router.push(`/profile`)}
          >
            {userAccount.isAuth 
              ? userAccount.displayName![0]
              : <BiUser size="25px" />
            }
          </div>
        </div>
      </div>

      {isShowDropDown && contentDropDown && getDropDown(contentDropDown, typeComponentDropDown!)}
  </div>
  )
}

export default Header;