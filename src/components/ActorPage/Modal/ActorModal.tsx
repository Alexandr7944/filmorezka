import React from "react";
import style from "./modal.module.scss";
import Image from "next/image";
import Button from "../../UI/FooterUI/Button/Button";
import { useRouter } from "next/router";
import {INewMovie } from "@/interface/IMovie";
interface ModalProps {
  active: boolean;
  movieItem: INewMovie;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const ActorModal: React.FC<ModalProps> = ({ active, setActive, movieItem }) => {

  console.log(movieItem);
  const router = useRouter();
  return (
    <div
      className={active ? style.active : style.modal}
      onClick={() => setActive(false)}
    >
      {movieItem && (
        <div
          className={active ? style.modal__content : style.hidden}
          onClick={() => router.push(`/watch/${movieItem.id}`)}
        >
          <div className={style.img2}>
            <Image
              src={movieItem.image}
              alt="movieItem poster"
              width={120}
              height={188}
            />
          </div>
          <div className={style.modal__box}>
            <div className={style.title}>
              {movieItem.name || movieItem.nameEn}
            </div>
            <div className={style.person_name}>
              {movieItem.nameEn || ""}
              {movieItem.year ? `  ${movieItem.year}` : ""}
            </div>
            <div className={style.title2}>
              {movieItem.actors ? (
                <div>
                  <p className={style.title3}>В главных ролях:</p>
                  <p>{movieItem.actors.slice(0, 5).join()}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={style.title2}>
              {movieItem.director ? (
                <div>
                  <p className={style.title3}>Режиссёр:</p>
                  <p>{movieItem.director}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <Button
              title={"Подробнее"}
              variant={style.watchBtn + " " + style.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActorModal;
