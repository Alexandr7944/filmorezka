import React, { useState } from 'react';
import styles from './header-style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { IoMdNotificationsOutline, BiSearch, BiUser } from '../Icons';
import { navigationsItems, notifications, user } from './data';
import { Content, TypeContent, IFormat, INotification, IUser } from '@/interface/Header';
import { Format, User, Notification } from './DropDown';

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
            className={`${styles['header']} ${contentDropDown ? styles['header-active'] : ''}`}
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

            {contentDropDown && getDropDown(contentDropDown, typeComponentDropDown!)}
        </div>
    )
}

export default Header