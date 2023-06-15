import React from "react";
import styles from './notification-style.module.scss';
import { MdOutlineNotificationsActive } from "@/components/Icons/index";
import { DropDownProps, INotification } from "@/interface/Header";
import en from "../../../../locales/en/header/header"
import ru from "../../../../locales/ru/header/header"
import { useRouter } from "next/router";
interface NotificationProps extends DropDownProps {
  content: INotification;
}

const Notification: React.FC<NotificationProps> = ({content}) => {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  return (
    <div
    className={`${styles['wrapper']} container`}
    >
      <div className={styles['content']}>
        <MdOutlineNotificationsActive
          size="70px"
        />
        <div className={styles['content__text']}>{t.notification}</div>
      </div>
    </div>
  )
}

export default Notification