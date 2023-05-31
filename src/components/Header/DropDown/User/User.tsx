import React from "react";
import styles from './user-style.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { DropDownProps, IUser } from "@/interface/Header";
import { Button } from "@/components/UI/Button";
import ChatLogin from "@/components/ChatLogin/ChatLogin";
import ReactDOM from "react-dom";
import { IUserState, clearUser } from "@/store/reducers/userSlice";
import { selectUser } from "@/store/selectors";
import { useAppDispatch } from "@/hooks/hook";
import Autorization from "@/microservices/Autorization";

interface UserProps extends DropDownProps {
  content: IUser;
}

interface IOption {
  title: string,
  isAuthorization: boolean,
  onClick?: () => void
};

const sizeIcon: string = '22.5px';

const User: React.FC<UserProps> = ({content}) => {
  const userAccount: IUserState = selectUser();
  const dispatch = useAppDispatch();

  const createLoginModal = () => {
    document.documentElement.style.overflow = 'hidden';
  
    const container = document.createElement('div');
    container.id = 'modal';
    document.body.appendChild(container);
  
    ReactDOM.render(<ChatLogin dispatch={dispatch}/>, container);
  }

  const logOutProfileClickHandler = async () => {
    dispatch(clearUser());
    await Autorization.logOut();
  }

  const options: IOption[] = [
    {
      title: 'Редактировать профиль',
      isAuthorization: true,
    },
    {
      title: 'Настройки',
      isAuthorization: false,
    },
    {
      title: 'Помощь',
      isAuthorization: false,
    },
    {
      title: 'Выйти из Иви',
      isAuthorization: true,
      onClick: logOutProfileClickHandler
    }
  ]

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
        {!userAccount.isAuth && 
          <div className={styles['actions']}>
            <Button 
              onClick={createLoginModal}
            >
              Войти или зарегистрироваться
            </Button>
          </div>
        }

        <div className={styles['additional-links']}>
          {options.map(({title, isAuthorization, onClick}) => (
            (!isAuthorization || isAuthorization === userAccount.isAuth) &&
              <div
                className={styles['additional-links__item']}
                key={uuidv4()}
                onClick={onClick}
              >
                <span className={styles['item__text']}>{title}</span>
              </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default User
