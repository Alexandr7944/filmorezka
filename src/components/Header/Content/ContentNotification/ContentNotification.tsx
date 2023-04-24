import React from "react";
import styles from './contentNotification-style.module.scss';
import { MdOutlineNotificationsActive } from "@/components/Icons/index";
import { INotification } from "../../models";
import { ContentProps } from "../models";

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