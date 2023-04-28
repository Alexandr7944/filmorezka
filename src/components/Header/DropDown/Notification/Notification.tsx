import React from "react";
import styles from './notification-style.module.scss';
import { MdOutlineNotificationsActive } from "@/components/Icons/index";
import { DropDownProps, INotification } from "@/interface/Header";

interface NotificationProps extends DropDownProps {
  content: INotification;
}

const Notification: React.FC<NotificationProps> = ({content}) => {
  return (
    <div
      className={styles['wrapper']}
    >
      <div className={styles['content']}>
        <MdOutlineNotificationsActive
          size="70px"
        />
        <div className={styles['content__text']}>Здесь появляются только важные сообщения</div>
      </div>
    </div>
  )
}

export default Notification