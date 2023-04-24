import React, { useState } from 'react';
import styles from './header-style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { IoMdNotificationsOutline, BiSearch, BiUser } from '../Icons';
import { ContentLink, ContentNotification, ContentUser } from './Content';
import { TypeContent, navigationsItems, notifications, user } from './data';
import { HeaderContent, IFormat, INotification, IUser } from './models';

const pictureSite: string = 'https://solea-parent.dfs.ivi.ru/picture/ea003d,ffffff/reposition_iviLogoPlateRounded.svg';

<<<<<<< HEAD
const Header: React.FC = () => {
  const [contentHeader, setContentHeader] = useState<HeaderContent | null>();
  const [typeContentHeader, setTypeContentHeader] = useState<TypeContent | null>();

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
=======
const getReactComponentContent = (content: HeaderContent, typeContent: TypeContent): React.ReactNode => {
    switch (typeContent) {
>>>>>>> 94627f70312bdb11e388bd3d0ebafaa437a86299
        case TypeContent.Link:
            return <ContentLink content={content as IFormat} />;
        case TypeContent.Notification:
            return <ContentNotification content={content as INotification} />;
        case TypeContent.User:
            return <ContentUser content={content as IUser} />;
        default:
            throw new Error(`Нереализованный тип ${typeContent}`);
    }
}

const Header: React.FC = () => {
    const [contentHeader, setContentHeader] = useState<HeaderContent | null>();
    const [typeContentHeader, setTypeContentHeader] = useState<TypeContent | null>();

    const resetContent = () => {
        setContentHeader(null);
        setTypeContentHeader(null);
    }

    const setContentHeaderMouseEnterHandler = (content: HeaderContent, type: TypeContent) => {
        setContentHeader(content);
        setTypeContentHeader(type);
    }

    return (
        <div
            className={`${styles['header']} ${contentHeader ? styles['header-active'] : ''}`}
            onMouseLeave={(e) => resetContent()}
        >
            <div className={styles['links']}>
                <img className={styles['picture-site']} src={pictureSite} alt="ivi" />

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

                    <div className={styles['search']}>
                        <BiSearch size="20px" />
                        <span>Поиск</span>
                    </div>

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
                        className={styles['avatar']}
                        onMouseEnter={() => setContentHeaderMouseEnterHandler(user, TypeContent.User)
                        }
                    >
                        <BiUser size="25px" />
                    </div>
                </div>
            </div>

            {contentHeader && getReactComponentContent(contentHeader, typeContentHeader!)}
        </div>
    )
}

export default Header
