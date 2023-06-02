import React from "react";
import style from "../search.module.scss";
import { MdOutlineMovieFilter } from "react-icons/md";
type genreResults = {
  genreResults: any;
};
const GenreResult: React.FC<genreResults> = ({ genreResults }) => {
  return (
    <div className={style.title}>
      <div>
        <MdOutlineMovieFilter size={"25px"} color={"#a970ff"} />
      </div>
      <div className={style.section__search_result}>
        {genreResults.nameRu || genreResults.name}
      </div>
    </div>
  );
};

export default GenreResult;
