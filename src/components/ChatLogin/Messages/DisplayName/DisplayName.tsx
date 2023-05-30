import React, { useState } from 'react';
import style from '../messages-style.module.scss';
import { MessagesProps, steps } from '@/interface/ChatLogin';
import SavedResponse from '../SavedResponse/SavedResponse';
import { Input } from '@/components/UI/Input';
import { BsEmojiSunglasses } from '@/components/Icons';
import { Button } from '@/components/UI/Button';
import { Loader } from '@/components/UI/Loader';

const DisplayName: React.FC<MessagesProps> = (props) => {
  if (props.isRegistered && props.currentStep >= steps.displayName) {
    return (
      <div className={style['wrapper']}>
        <div className={`${style['message']} ${style['message-site']}`}>
          <div className={style['message__title']}>
            Задайте имя
          </div>
          
          {props.currentStep === steps.displayName && 
            <div className={style['message__description']}>
              чтобы оставлять комментарии
            </div>
          }
        </div>
        
        {props.currentStep === steps.displayName
          ?
          <div className={style['response']}>
            <Input 
              placeholder='Придумайте имя'
              type='text'
              icon={BsEmojiSunglasses}
              isError={props.messageError.length > 0}
              value={props.state}
              onChange={e => props.stateChangeHandler(e, props.setterState)}
            />

            <Button 
              disabled={props.isDisabledButton}
              onClick={props.sendState}
            >
              {props.isLoading ? <Loader /> : 'Продолжить'}
            </Button>
          </div>
          :
          <SavedResponse changeStep={props.changeStep} state={props.state} step={props.step}/>
        }
      </div>
    );
  } else {
    return (<div></div>);
  }
}

export default DisplayName;
