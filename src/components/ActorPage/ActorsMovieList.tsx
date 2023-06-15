import React, { useState } from "react";
import style from "./actorpage-style.module.scss";
import Image from "next/image";
import Button from "../UI/FooterUI/Button/Button";
import { useRouter } from "next/router";
import ActorModal from "./Modal/ActorModal";
import { IMovie, INewMovie } from "@/interface/IMovie";
import en from "../../locales/en/actorpage/actorpage"
import ru from "../../locales/ru/actorpage/actorpage"
interface ActorsMovieListProps {
  movieItem: INewMovie;
}
const ActorsMovieList: React.FC<ActorsMovieListProps> = (movieItem) => {
  const movie = movieItem.movieItem;
  const [modalActive, setModalActive] = useState(false);

  const router = useRouter();
  const handleMouseEnter = () => {
    setModalActive(true);
  };
  const handleMouseLeave = () => {
    setModalActive(false);
  };
  const {locale, locales} = useRouter();
  const t:any = locale === "en"? en : ru;
  return (
    <div
      className={style.movieBorder}
      onClick={() => router.push(`/watch/${movie.id}`)}
    >
      {movie && (
        <div className={style.movieList}>
          <div className={style.img2}>
            <Image
              src={movie.image}
              alt="movieItem poster"
              width={100}
              height={144}
            />
          </div>
          <div className={style.stores2}>
            <div
              className={style.movieList__content}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={style.title2}>
                {locale==="ru" ? movie.name :movie.nameEn}
                <div className={style.modal}>
                  <ActorModal
                    active={modalActive}
                    setActive={setModalActive}
                    movieItem={movie}
                  />
                </div>
              </div>
              <div className={style.person_name2}>
                <span>{movie.nameEn || ""}</span>
              </div>
              <div className={style.person_name2}>
                <span>{movie.year}</span>
              </div>
            </div>
            <div className={style.person_name}>
              <span>
                {movie.rating
                  ? `${t.rating}: ${movie.rating.toFixed(1)}`
                  : `${t.rating}: —`}
              </span>
            </div>
            <div>
              {" "}
              <Button
                title={t.more_detailed}
                variant={style.watchBtn + " " + style.title2}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActorsMovieList;
