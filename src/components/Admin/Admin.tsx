import { BiCameraMovie, BiSearch } from 'react-icons/bi';
import { Input } from '../UI/Input';
import styles from './admin-style.module.scss';
import { useEffect, useState } from 'react';
import Fetching from '@/API/Fetching';
import { INewMovie } from '@/interface/IMovie';
import { selectGenres } from '@/store/selectors';
import { genre } from '@/types/genre';
import {v4 as uuidv4} from 'uuid';
import { MdOutlineMovieFilter } from 'react-icons/md';
import useDebounce from '@/hooks/useDebounce';
import Edit from './Edit';
import { useAppSelector } from '@/hooks/hook';
import { useRouter } from 'next/router';

const regExpEn: RegExp = /^[a-zA-Z\s\?\'\"]*$/;

const Admin: React.FC = () => {
  const user = useAppSelector(state => state.user);
  const [selectedObject, setSelectedObject] = useState<INewMovie | genre>();
  const [foudFilms, setFoundFilms] = useState<INewMovie[]>([]);
  const [foudGenres, setFoundGenres] = useState<genre[]>([]);
  const [enteredString, setEnteredString] = useState<string>('');
  const isPause:boolean = useDebounce(enteredString, 2500);
  const [isVisibleList, setIsVisibleList] = useState<boolean>(false);

  const {genres} = selectGenres();
  
  useEffect(() => {
    if (isPause) return;

    if (enteredString) {
      const changedString: string = enteredString.toLowerCase().replace(' ', '_');

      const requstUrl = regExpEn.test(enteredString)
        ? `http://localhost:5000/films/name?nameEn=${changedString}`
        : `http://localhost:5000/films/name?name=${changedString}`;

      Fetching.getNewAll(requstUrl)
      .then((films: INewMovie[]) => {
        return films && setFoundFilms(films)
      }
      );

      const filteredGenres: genre[] = genres.filter((genre) => 
        genre.nameEn.toLowerCase().includes(changedString) || 
        genre.nameRu.toLowerCase().includes(changedString)
      );
    
      setFoundGenres(filteredGenres.slice(0, 5));
    } else {
      setFoundFilms([]);
      setFoundGenres([]);
    }
  }, [enteredString, isPause]);

  useEffect(() => {
    if (!selectedObject) {
      return ;
    }

    if ('name' in selectedObject) {
      setFoundFilms(foudFilms.map((film) =>
        film.id === selectedObject?.id 
          ? selectedObject
          : film
      ));
    } else {
      setFoundGenres(foudGenres.map((genre) =>
        genre.id === selectedObject?.id 
          ? selectedObject
          : genre
      ));
    }
  }, [selectedObject]);

  return (
    user.roles && user.roles.includes('admin') 
    ?
    <div className={styles.admin}>
      <h2 className={styles.admin__title}>Управление фильмами и жанрами</h2>

      <div className={styles.wrapper}>
        <div className={styles.wrapper__left}>
          <div className={styles.search}>
            <Input 
              icon={BiSearch}
              placeholder='Поиск'
              onChange={(e) => setEnteredString(e.target.value)}
              style={{width: '410px'}}
              onFocus={() => setIsVisibleList(true)}
              onBlur={() => setTimeout(() => setIsVisibleList(false), 100)}
            />

            {isVisibleList && 
              <div className={styles.search__result}>
                {foudGenres.map((genre) => (
                  <div
                    className={styles.result__item}
                    key={uuidv4()}
                    onClick={() => setSelectedObject(genre)}
                  >
                    <div className={styles.item__icon}>
                      <MdOutlineMovieFilter size={'25px'} color={'#a970ff'}/>
                    </div>

                    <span className={styles.item__name}>
                      {regExpEn.test(enteredString) ? genre.nameEn : genre.nameRu}
                    </span>
                  </div>
                ))}

                {foudFilms.map((film) => (
                  <div
                    className={styles.result__item}
                    key={uuidv4()}
                    onClick={() => setSelectedObject(film)}
                  >
                    <div className={styles.item__icon}>
                      <BiCameraMovie size={'25px'} color={'#a970ff'}/>
                    </div>

                    <span className={styles.item__name}>
                      {regExpEn.test(enteredString) ? film.nameEn : film.name}
                    </span>
                  </div>
                ))}
              </div>
            }
          </div>
        </div>

        <div className={styles.wrapper__right}>
          {selectedObject && 
            <Edit selectedObject={selectedObject} setSelectedObject={setSelectedObject}/>
          }
        </div>
      </div>
    </div>
    :
    <div>Доступ запрещен!</div>
  )
}

export default Admin