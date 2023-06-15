import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './admin-style.module.scss';
import { INewMovie } from '@/interface/IMovie';
import { genre } from '@/types/genre';
import Image from 'next/image';
import { Input } from '../UI/Input';
import { MdOutlineEdit } from '../Icons';
import { Button } from '../UI/Button';
import { Loader } from '../UI/Loader';
import Fetching from '@/API/Fetching';
import en from "@/locales/en/admin"
import ru from "@/locales/ru/admin"
import { useRouter } from 'next/router';


export interface EditProps {
  selectedObject: INewMovie | genre;
  setSelectedObject: Dispatch<SetStateAction<INewMovie | genre | undefined>>
}

const Edit: React.FC<EditProps> = ({ selectedObject, setSelectedObject }) => {
  const [nameRu, setNameRu] = useState<string>('');
  const [nameEn, setNameEn] = useState<string>('');
  const [isLoad, setIsLoad] = useState<boolean>();
  const {locale} = useRouter();
  const t:any = locale === "en"? en : ru;

  useEffect(() => {
    setNameRu('name' in selectedObject ? selectedObject.name : selectedObject.nameRu || '');
    setNameEn(selectedObject.nameEn || '');
    setIsLoad(false);
  }, [selectedObject])

  const saveFilm = async () => {
    setIsLoad(true);
    const body = {
      id: selectedObject.id,
      name: nameRu,
      nameEn: nameEn
    }

    await Fetching.putEditObject('http://localhost:5000/films/update', body);

    setSelectedObject({...selectedObject, name: nameRu, nameEn: nameEn});
    setIsLoad(false);
  }

  const saveGenre = async () => {
    setIsLoad(true);
    const body = {
      id: selectedObject.id,
      nameRu: nameRu,
      nameEn: nameEn
    }

    await Fetching.putEditObject('http://localhost:5000/genres/update', body);

    setSelectedObject({...selectedObject, nameRu: nameRu, nameEn: nameEn});
    setIsLoad(false);
  }

  return (
    'name' in selectedObject
      ?
        <div className={styles['selected-item']}>
          <div className={styles['selected-item__title']}>
            {t.film}
          </div>

          <div className={styles['selected-item__input']}>
            <Input
              onChange={(e) => setNameRu(e.target.value)}
              icon={MdOutlineEdit}
              value={nameRu}
              placeholder={t.r_name}
            />
          </div>

          <div className={styles['selected-item__input']}>
            <Input
              onChange={(e) => setNameEn(e.target.value)}
              icon={MdOutlineEdit}
              value={nameEn}
              placeholder={t.e_name}
            />
          </div>

          <Button
            onClick={() => saveFilm()}
          >
            {isLoad ? <Loader /> : `${t.save}`}
          </Button>

          <Image 
            src={selectedObject.image}
            alt="image"
            width={400}
            height={400}
          />
        </div>
      :
        <div className={styles['selected-item']}>
          <div className={styles['selected-item__title']}>
            {t.genre}
          </div>

          <div className={styles['selected-item__input']}>
            <Input
              onChange={(e) => setNameRu(e.target.value)}
              icon={MdOutlineEdit}
              value={nameRu}
              placeholder={t.r_name}
            />
          </div>

          <div className={styles['selected-item__input']}>
            <Input
              onChange={(e) => setNameEn(e.target.value)}
              icon={MdOutlineEdit}
              value={nameEn}
              placeholder={t.e_name}
            />
          </div>

          <Button
            onClick={() => saveGenre()}
          >
            {isLoad ? <Loader /> : `${t.save}`}
          </Button>
        </div>
  )
}

export default Edit