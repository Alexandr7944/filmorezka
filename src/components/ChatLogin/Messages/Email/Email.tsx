import React from 'react';
import style from './email-style.module.scss';
import { MessagesProps, steps } from '@/interface/ChatLogin';
import { Input } from '@/components/UI/Input';
import { BiUser, SiGmail, SlSocialVkontakte } from '@/components/Icons';
import { Button } from '@/components/UI/Button';
import SavedResponse from '../SavedResponse/SavedResponse';
import { Loader } from '@/components/UI/Loader';

const vkAuthURL: string = process.env.VK_AUTH_URL as string;

export interface EmailProps extends MessagesProps {
  authorizationGmail: () => void,
}

const Email: React.FC<EmailProps> = ({...props}) => {
  return (
    <div className={style['wrapper']}>
      <div className={`${style['message']} ${style['message-site']}`} >
        <div className={style['message__title']}>
          Войдите или зарегистрируйтесь
        </div>
        
        {props.currentStep === steps.email && 
          <div className={style['message__description']}>
            чтобы пользоваться сервисом на любом устройстве
          </div>
        }
      </div>

      {props.currentStep === steps.email 
        ? 
        <div className={style['response']}>
          <Input 
            placeholder='Email'
            type='email'
            icon={BiUser}
            isError={props.messageError.length > 0}
            value={props.state}
            onChange={e => props.stateChangeHandler(e, props.setterState)}
            testId='emailInput'
          />

          <Button 
            disabled={props.isDisabledButton}
            onClick={props.sendState}
            testId='sendEmail'
          >
            {props.isLoading ? <Loader /> : 'Продолжить'}
          </Button>

          <div className={style['authrozitation']}>
            <a 
              className={style['vk']}
              href={vkAuthURL}
            >
              <SlSocialVkontakte size='25px'/>
            </a>

            <div 
              className={style['gmail']}
              onClick={props.authorizationGmail}
            >
              <SiGmail size='25px'/>
            </div>
          </div>

          <div className={style['politics']}>
            Нажимая «Продолжить», я соглашаюсь

            <p>
              с <a 
                className={style['politics__link']} 
                href="https://www.ivi.tv/info/confidential"
              >Политикой конфиденцальности</a>
            </p>

            <p>
              и <a 
                className={style['politics__link']} 
                href="https://www.ivi.tv/info/agreement"
              >Пользовательским соглашением</a>
            </p>
          </div>
        </div>
        :
        <SavedResponse changeStep={props.changeStep} state={props.state} step={props.step}/>
      }
    </div>
  );
}

export default Email;
