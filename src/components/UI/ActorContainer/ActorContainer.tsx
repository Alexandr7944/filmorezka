import { IActor } from '@/interface/IActor';
import React from 'react';
import style from './actorContainer-style.module.scss';
import { BsFillPersonFill } from 'react-icons/bs';
import Image from 'next/image';
import router from 'next/router';

interface ActorContainerProps {
  actor?: IActor,
  key?: number,
  rating?: number 
}

const ActorContainer: React.FC<ActorContainerProps> = ({ actor, rating }) => {
  return (
    <div className={style.actor} onClick={() => router.push(`/actorpage/${actor?.staffId}`)}>
      <div className={style.actor__photo}>
        {
          rating 
            ? <div className={style.rating}>{rating}</div>
            : actor?.posterUrl
              ? <Image
                  src={actor?.posterUrl}
                  alt="actor" 
                  width={100}
                  height={100}
                />
              : <BsFillPersonFill />
        }
      </div>
      <span className={style.actor__name}>
        {actor?.nameRu}
      </span>
    </div>
  )
}

export default ActorContainer