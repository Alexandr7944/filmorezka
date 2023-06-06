import React, { useEffect, useState } from 'react';
import style from './chatLogin-style.module.scss';
import { CgClose } from '../Icons';
import { Error } from '../UI/Error';
import Autorization from '@/microservices/Autorization';
import { DisplayName, Email, EmailProps, Password, PasswordProps } from './Messages';
import { MessagesProps, steps } from '@/interface/ChatLogin';
import { useAppDispatch } from '@/hooks/hook';
import { setUser } from '@/store/reducers/userSlice';
import { IUserAccount } from '@/interface/IUserAccount';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';

interface ChatLoginProps {
  dispatch: ReturnType<typeof useAppDispatch>
}

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const displayNameRegex: RegExp = /^[a-zA-Z0-9]{6,12}$/;
const passwordRegex: RegExp = /^[a-zA-Z0-9!-_&?]{8,16}$/;

const closeModal = () => {
  document.documentElement.style.overflow = 'auto';
  document.getElementById('modal')?.remove();
}

const ChatLogin: React.FC<ChatLoginProps> = ({ dispatch }) => {
  const [progress, setProgress] = useState<number>(steps.email);
  const [step, setStep] = useState<number>(steps.email);
  const [email, setEmail] = useState<string>('');
  const [isRegistered, setIsRegistered] = useState<boolean>(true);
  const [messageError, setMessageError] = useState<string>('');
  const [isDisabledButton, setIsDisabledButton] = useState<boolean>(true);
  const [displayName, setDisplayName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const changeStep = (currentStep: steps) => {
    setStep(currentStep);
    setProgress(currentStep);
    setMessageError('');
    setIsDisabledButton(false);

    if (currentStep === steps.email) {
      setDisplayName('');
    }

    setPassword('');
    setRepeatPassword('');
  }

  const stateChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setIsDisabledButton(false);
    setter(e.target.value);
    setMessageError('');
  }

  const sendEmail = async () => {
    const isCorrect: boolean = emailRegex.test(email);
    setIsDisabledButton(!isCorrect);

    if (isCorrect) {
      setIsLoading(true);
      const isHaveEmail: boolean = await Autorization.checkEmail(email);
      setIsLoading(false);

      setIsDisabledButton(true);
      setIsRegistered(!isHaveEmail);

      if (isHaveEmail) {
        changeStep(steps.password);
      } else {
        changeStep(steps.displayName);
      }
    } else {
      setMessageError('Неправильные указаны данные');
    }
  }

  const sendDisplayName = async () => {
    const isCorrect: boolean = displayNameRegex.test(displayName);
    setIsDisabledButton(!isCorrect);

    if (isCorrect) {
      setIsLoading(true);
      const isHaveName: boolean = await Autorization.checkDisplayName(displayName);
      setIsLoading(false);

      if (isHaveName) {
        setMessageError('Такое имя уже занято');
      } else {
        setIsDisabledButton(true);
        changeStep(steps.password);
      }
    } else {
      setMessageError('Количество симолов от 6 до 12, использовать можно только латиницу и цифры');
    }
  }

  const checkCorrectnessPasswords = () : boolean => {
    const isCorrectRegex: boolean = passwordRegex.test(password);
    const isEqual: boolean = password === repeatPassword;

    if (!isCorrectRegex) {
      setMessageError('Пароль должен состоять от 8 до 16 символов');
      setIsDisabledButton(!isCorrectRegex);
      return false;
    } else if (isRegistered && !isEqual) {
      setMessageError('Пароли не совпадают');
      setIsDisabledButton(!isEqual);
      return false;
    }

    return true;
  }

  const saveToStore = async () => {
    const user: IUserAccount | undefined = await Autorization.getUser();

    if (user) {
      dispatch(setUser(user));
    }
  }

  const sendStates = async () => {
    const isCorrectPasswords: boolean = checkCorrectnessPasswords();

    if (isCorrectPasswords) {
      setIsLoading(true);

      if (isRegistered) {
        const isSuccessful: boolean = await Autorization.registration(email, displayName, password);

        if (!isSuccessful) {
          setMessageError('Сервер не отвечает :(');
          setIsLoading(false);
          return;
        } 
      } else {
        const isSuccessful: boolean = await Autorization.login(email, password);

        if (!isSuccessful) {
          setMessageError('Неверный пароль');
          setIsLoading(false);
          return;
        }
      }
      
      saveToStore();
      closeModal();
    }
  }

  const authorizationGmail = useGoogleLogin({
    onSuccess: async (codeResponse: TokenResponse) => {
      await Autorization.loginGmail(codeResponse.access_token);
      // location.reload();
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  const generalPropsMessages = {
    currentStep: step,
    isRegistered, messageError, isDisabledButton, changeStep, stateChangeHandler, isLoading
  };

  const propsMessages = {
    email: {
      ...generalPropsMessages, authorizationGmail,
      step: steps.email,
      setterState: setEmail,
      sendState: sendEmail,
      state: email
    } as EmailProps,
    displayName: {
      ...generalPropsMessages,
      step: steps.displayName,
      setterState: setDisplayName,
      sendState: sendDisplayName,
      state: displayName
    } as MessagesProps,
    password: {
      ...generalPropsMessages, setRepeatPassword,
      step: steps.password,
      setterState: setPassword,
      sendState: sendStates,
      state: password
    } as PasswordProps
  };

  return (
    <div className={style['dialog-login']}>
      <div className={style['header']}>
        <div className={style['title']}>
          <div className={style['title__description']}>
            {step === steps.email
              ? 
              'Вход или регистрация'
              :
              isRegistered 
                ?
                'Здравствуйте'
                :
                'Новый пользователь'
            }
          </div>

          {step !== steps.email &&
            <div className={style['title__user']}>
              {email}
            </div>
          }
        </div>

        <div 
          className={style['close']}
          onClick={closeModal}
        >
          <CgClose size={'30px'}/>
        </div>
      </div>

      <div 
        className={style['progress-bar']}
        style={{width: `${progress}%`}}
      />

      <div className={style['chat']}>
        <Email {...propsMessages.email}/>

        <DisplayName {...propsMessages.displayName}/>

        <Password {...propsMessages.password}/>

        {messageError && 
          <div className={style['error']}>
            <Error 
              title='Ошибка'
              description={messageError}
            />
          </div>
        } 
      </div>
    </div>
  )
}

export default ChatLogin