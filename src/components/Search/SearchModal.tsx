import React, { useEffect, useState } from "react";
import style from "./search.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import Fetching from "@/API/Fetching";
import FilmResults from "./searchReaults/FilmResults";
import ActorResults from "./searchReaults/ActorResults";
import GenreResult from "./searchReaults/GenreResult";
import router from "next/router";
interface SearchProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const SearchModal: React.FC<SearchProps> = ({ active, setActive }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filmResult, setFilmResult] = useState([]);
  const [actorResult, setActorResult] = useState([]);
  const [genreResult, setGenreResult] = useState("");
  const regExpEn = "^[a-zA-Z]+$";
  const searchTextRu = searchValue ? `name=${encodeURI(searchValue.toLocaleLowerCase())}` : "";
  const searchTextEn =searchValue ? `nameEn=${searchValue.toLocaleLowerCase()}` : "";
  const resultString =
    searchValue.toLocaleLowerCase().search(regExpEn) === 0
      ? searchTextEn
      : searchTextRu;

  const genreRes = (genres: any) => {
    if (searchValue.length > 0) {
      for (let i = 0; i < genres.length; i++) {
        let str = genres[i];
        for (let key in str) {
          if (typeof str[key] === "string") {
            let result = str[key].indexOf(searchValue);
            if (result !== -1) {
              setGenreResult(str);
            }
          }
        }
      }
    } else {
      setGenreResult("");
    }
  };

  useEffect(() => {
    Fetching.getNewAll(`http://localhost:5000/films/name?${resultString}`).then(
      (film) => film && setFilmResult(film)
    );
    Fetching.getNewAll(`http://localhost:5100/actors/name?${resultString}`).then(
      (actor) => actor && setActorResult(actor)
    );
    Fetching.getNewAll(`http://localhost:5000/genres`).then((genre) =>
      genreRes(genre)
    );
  }, [searchValue]);
  const closeInput = () => {
    setSearchValue("");
    setActive(false);
  };


  return (
    <div
      className={active ? style.modal + " " + style.active : style.modal}
      onClick={() => closeInput()}
    >
      <div className={style.modal_block} onClick={(e) => e.stopPropagation()}>
        <div className={style.search_title}>
          <h1 className={style.search__text}>Поиск</h1>
          <div onClick={() => closeInput()} className={style.close}>
            <AiOutlineClose size={"30px"} />
          </div>
        </div>
        <div className={style.section__input_container}>
          <input
            type="text"
            name="text"
            className={style.input}
            placeholder="Фильмы, персоны, жанры"
            value={searchValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(event.target.value)
            }
          ></input>
          <div
            className={style.section__input_close}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              setSearchValue("")
            }
          >
            <AiOutlineClose size={"20px"} />
          </div>
        </div>

        <div className={style.section__search_block}>
          {filmResult.length > 0
            ? filmResult
                .slice(0, 5)
                .map((item: {}, i) => (
                  <FilmResults key={`filmresult` + i} {...item} />
                ))
            : ""}
          {actorResult.length > 0
            ? actorResult
                .slice(0, 5)
                .map((item: {}, i) => (
                  <div onClick={() => closeInput()}  key={`actorresult` + i}>  <ActorResults {...item}   /></div>
                
                ))
            : ""}
          {genreResult ? <GenreResult genreResults={genreResult} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
