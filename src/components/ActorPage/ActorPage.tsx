import React, { useEffect, useState } from "react";
import style from "./actorpage-style.module.scss";
import { v4 as uuidv4 } from "uuid";
import { MdArrowBackIosNew } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { IActor } from "@/interface/IActor";
import { INewMovie } from "@/interface/IMovie";
import Image from "next/image";
import ActorsMovieList from "./ActorsMovieList";
import Fetching from "@/API/Fetching";
import LoaderUI from "../UI/ActorPage/LoaderUI/LoaderUI";
import NoFilms from "./NoFilms";

interface ActorPageProps {
  actorID: string | string[] | undefined;
}

const ActorPages: React.FC<ActorPageProps> = ({ actorID }) => {
  const URL_ACTORS = "http://localhost:5100/actors/id/";
  const URL_FILMS = "http://localhost:5000/films/sp/";

  const [actor, setActor] = useState<IActor>();
  const [film, setFilm] = useState<INewMovie[]>();
  const [yet, setYet] = useState(false);
  const [menu_class, setMenuClass] = useState(style.visible);
  const [sortFilms, setSortFilms] = useState("ACTOR");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Fetching.getNewAll(`${URL_ACTORS}${actorID}`).then(
      (actor) => actor && setActor(actor)
    );
  }, [actorID]);

  useEffect(() => {
    const test = async (): Promise<INewMovie[]> => {
      let data: INewMovie[] = [];
      if (actor?.films) {
        setIsLoading(true);
        let sortedByKeyLenght = actor?.films.filter(
          (a: any) => a.professionKey === sortFilms
        );
        for (let i = 0; i < sortedByKeyLenght.length; i++) {
          if (sortFilms) {
            let temp = await Fetching.getNewAll(
              //@ts-ignore
              `${URL_FILMS}${sortedByKeyLenght[i].filmId}`
            );
            if (temp.statusCode !== 404) {
              data = data?.concat(temp);
            }
          }
        }
      }
      setIsLoading(false);
      return data?.sort((a, b) => b.year - a.year);
    };

    async function datesInit() {
      const data = await test();
      setFilm(data);
    }
    datesInit();
  }, [actor?.films, sortFilms]);


  const comeBack = () => {
    history.back();
  };
  const activeYet = () => {
    if (yet === false) {
      setYet(true);
      setMenuClass(style.hidden);
    }
  };

  let filmsarr: Array<string | number> = ["фильм", "фильмов", "фильма"];
  const moviesLength = (
    inter: number,
    filmsarr: Array<string | number>
  ): string => {
    let inter2 = Math.abs(inter) % 100;
    var n1 = inter % 10;
    if (inter2 > 10 && inter2 < 20) {
      return `${inter} ${filmsarr[1]}`;
    }
    if (n1 > 1 && n1 < 5) {
      return `${inter} ${filmsarr[2]}`;
    }
    if (n1 == 1) {
      return `${inter} ${filmsarr[0]}`;
    }
    return `${inter} ${filmsarr[1]}`;
  };
  const arOptionsRus = (text: string) => {
    if (text === "ACTOR") {
      return "Актёр";
    }
    if (text === "HIMSELF") {
      return "Актёр: играет самого себя";
    }
    if (text === "PRODUCER") {
      return "Продюссер";
    }
   
    if (text === "DIRECTOR") {
      return "Режиссёр";
    }
    if (text === "WRITER") {
      return "Сценарист";
    }
    if (text === "COMPOSER") {
      return "Композитор";
    }
    if (text === "HRONO_TITR_MALE") {
      return "В титрах не указан";
    } else null;
  };

  const arOptions: Array<string> = [
    "ACTOR",
    "HIMSELF",
    "WRITER",
    "DIRECTOR",
    "PRODUCER",
    "COMPOSER",
   "HRONO_TITR_MALE"
  ];
  const options = arOptions.map((text, index: number) => {
    return actor?.films &&
      actor?.films.filter((a: any) => a.professionKey === text).length > 0 ? (
      <div key={uuidv4()}>
        <div
          className={
            sortFilms === text ? style.professionActive : style.profession
          }
        >
          <div
            className={
              sortFilms === text
                ? style.personsmovie
                : style.personsmovieNotActive
            }
            onClick={() => setSortFilms(text)}
          >
            {arOptionsRus(text)}
          </div>
          <div className={style.person_name}>
            {actor?.films
              ? moviesLength(
                  actor.films.filter((a: any) => a.professionKey === text)
                    .length,
                  filmsarr
                )
              : ""}
          </div>
        </div>
      </div>
    ) : (
      ""
    );
  });

  return (
    <div className={style.line}>
      <div
        onClick={comeBack}
        className={style.stores3 + " " + style.title + " " + style.pointer}
      >
        <MdArrowBackIosNew />
        <div>Назад </div>
      </div>
      {actor?.personId ? 
     
      <div className={style.mycontainer}>
       
          <div className={style.content_column}>
            <div className={style.actor_block}>
              <div className={style.img}>
                {actor.posterUrl ? (
                  <Image
                    src={actor.posterUrl}
                    alt="actorphoto"
                    width={100}
                    height={100}
                  />
                ) : (
                  ""
                )}
              </div>
              <div>
                <h1 className={style.h1}>{actor.name || actor.nameEn}</h1>
                <div className={style.person_name}>
                  <div> {actor.nameEn} </div>
                  <div>
                    {actor.birthplace
                      ? `Место рождения: ${actor.birthplace}`
                      : ""}
                  </div>
                  <div>
                    {actor.birthday
                      ? `Дата рождения: ${actor.birthday} • `
                      : ""}
                    {actor.age ? `${actor.age} лет` : ""}
                  </div>
                  <div>
                    {actor.profession ? `Карьера: ${actor.profession}` : ""}
                  </div>
                </div>
              </div>
            </div>
            
            <div className={style.title3}>Фильмография</div>
            <div
              className={style.sort__professions + " " + style.scrollwrapper}
            >
              {options}
              <div className={style.dot}></div>
            </div>

            <div>
              <div
                className={isLoading === true ? style.visible : style.hidden}
              >
                <LoaderUI />
              </div>
              <div>
                {film?.length === 0 && isLoading === false ? <NoFilms /> : ""}
              </div>
              <div
                className={isLoading === true ? style.hidden : style.visible}
              >
                {film
                  ? film
                      .slice(0, 8)
                      .map((item) => (
                        <ActorsMovieList key={uuidv4()} movieItem={item} />
                      ))
                  : ""}
                {film && film.length > 8 ? (
                  <div
                    onClick={activeYet}
                    className={menu_class + " " + style.pointer}
                  >
                    {film ? `Еще` : ""}
                  </div>
                ) : (
                  ""
                )}
                {yet === true && film !== undefined
                  ? film
                      .slice(8)
                      .map((item) => (
                        <ActorsMovieList key={uuidv4()} movieItem={item} />
                      ))
                  : ""}
              </div>
            </div>
          </div>
      
      </div>
         : <NoFilms />}
    </div>
  );
};

export default ActorPages;
