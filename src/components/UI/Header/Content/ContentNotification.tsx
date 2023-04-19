import React from "react";
import styles from "@/components/UI/Header/Content/contentNotification-style.module.scss";
import {ContentProps, INotification} from "@/components/UI/Header/Content/models";
import {MdOutlineNotificationsActive} from "react-icons/md";

interface ContentNotificationProps extends ContentProps {
  content: INotification;
}

const ContentNotification: React.FC<ContentNotificationProps> = ({content}) => {
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

export default ContentNotification