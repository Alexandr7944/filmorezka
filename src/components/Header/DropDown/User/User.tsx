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
import { GoogleOAuthProvider } from "@react-oauth/google";
import process from 'process';
import { useRouter } from 'next/router';
import en from "../../../../locales/en/header/header"
import ru from "../../../../locales/ru/header/header"
interface UserProps extends DropDownProps {
  content: IUser;
}

interface IOption {
  title: string,
  isAuthorization: boolean,
  onClick?: () => void,
};

const sizeIcon: string = '22.5px';

const User: React.FC<UserProps> = ({content}) => {
  const {locale} = useRouter();
  const t:any = locale === "en"? en : ru;
  const userAccount: IUserState = selectUser();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const createLoginModal = () => {
    document.documentElement.style.overflow = 'hidden';
  
    const container = document.createElement('div');
    container.id = 'modal';
    document.body.appendChild(container);

    const clientId: string = process.env.GOOGLE_CLIENT_ID as string;
  
    ReactDOM.render(
      <GoogleOAuthProvider clientId={clientId}>
        <ChatLogin dispatch={dispatch}/> 
      </GoogleOAuthProvider>,
      container
    );
  }

  const logOutProfileClickHandler = async () => {
    dispatch(clearUser());
    await Autorization.logOut();
    router.push('/');
  }

  const options: IOption[] = [
    {
      title: 'edit_profile',
      isAuthorization: true,
    },
    {
      title: 'settings',
      isAuthorization: false,
    },
    {
      title: 'help',
      isAuthorization: false,
    },
    {
      title: 'get_out',
      isAuthorization: true,
      onClick: logOutProfileClickHandler,
    }
  ]
  return (
    <div
      className={`${styles['wrapper']} container`}
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
              {t[link.title]}
            </div>

            {link.description &&
              <div className={styles['item__description']}>
                {t[link.description]}
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
              testId='authorization'
            >
             {t.login_or_register}
            </Button>
          </div>
        }

        <div className={styles['additional-links']}>
          {userAccount.isAuth && userAccount.roles?.find(role => role === 'admin') &&
            <div
              className={styles['additional-links__item']}
              key={uuidv4()}
              onClick={() => router.push('/admin')}
            >
              <span className={styles['item__text']}>Админка</span>
            </div>
          }

          {options.map(({title, isAuthorization, onClick}) => (
            (!isAuthorization || isAuthorization === userAccount.isAuth) &&
              <div
                className={styles['additional-links__item']}
                key={uuidv4()}
                onClick={onClick}
                data-testid={title}
              >
                <span className={styles['item__text']}>{t[title]}</span>
              </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default User
