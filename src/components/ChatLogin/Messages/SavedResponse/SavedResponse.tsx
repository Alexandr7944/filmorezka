import React from 'react';
import style from './savedResponse-style.module.scss';
import { MdOutlineEdit } from '@/components/Icons';
import { steps } from '@/interface/ChatLogin';

export interface SavedResponseProps {
  changeStep: (step: steps) => void,
  state: string,
  step: steps
}

const SavedResponse: React.FC<SavedResponseProps> = ({ changeStep, state, step }) => {
  return (
    <div className={style['saved-response']}>
      <div 
        className={style['edit']}
        onClick={() => changeStep(step)}
      >
        <MdOutlineEdit size={'25px'}/>
      </div>

      <div className={`${style['message']} ${style['message-user']}`}>
        <div className={style['message__title']}>
          {state}
        </div>
      </div>
    </div>
  );
}

export default SavedResponse;
