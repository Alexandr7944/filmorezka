import React, { useState } from 'react';
import style from '../messages-style.module.scss';
import { MessagesProps, steps } from '@/interface/ChatLogin';
import { Input } from '@/components/UI/Input';
import { AiOutlineEye, AiOutlineEyeInvisible } from '@/components/Icons';
import { Button } from '@/components/UI/Button';
import { Loader } from '@/components/UI/Loader';

export interface PasswordProps extends MessagesProps {
  setRepeatPassword: React.Dispatch<React.SetStateAction<string>>
}

const Password: React.FC<PasswordProps> = (props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const changeInputTypePassword = () => {
    setIsShowPassword(!isShowPassword);
  }

  if (props.currentStep === steps.password) {
    return (
      <div className={style['wrapper']}>
        <div className={`${style['message']} ${style['message-site']}`}>
          <div className={style['message__title']}>
            Введите пароль
          </div>
          
          <div className={style['message__description']}>
            чтобы {props.isRegistered ? 'авторизироваться' : 'зарегистрироваться'}
          </div>
        </div>

        <div className={style['response']}>
          <Input 
            placeholder={props.isRegistered ? 'Придумайте пароль' : 'Введите пароль'}
            type={isShowPassword ? 'text' : 'password'}
            icon={isShowPassword ? AiOutlineEyeInvisible : AiOutlineEye}
            isError={props.messageError.length > 0}
            onChange={e => props.stateChangeHandler(e, props.setterState)}
            changeType={changeInputTypePassword}
          />

          {props.isRegistered && 
            <Input 
              placeholder='Повторите пароль'
              type={isShowPassword ? 'text' : 'password'}
              icon={isShowPassword ? AiOutlineEyeInvisible : AiOutlineEye}
              isError={props.messageError.length > 0}
              onChange={e => props.stateChangeHandler(e, props.setRepeatPassword)}
              style={{marginTop: '10px'}}
              changeType={changeInputTypePassword}
            />
          }

          <Button 
            disabled={props.isDisabledButton}
            onClick={props.sendState}
          >
            {props.isLoading 
              ? <Loader /> 
              :  
              props.isRegistered
                ? 'Зарегистрироваться'
                : 'Авторизироваться'
            }
          </Button>
        </div>
    </div>
    );
  } else {
    return (<div></div>);
  }
}

export default Password;
