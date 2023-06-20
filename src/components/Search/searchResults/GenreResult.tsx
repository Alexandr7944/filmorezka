import React from "react";
import style from "../search.module.scss";
import { MdOutlineMovieFilter } from "react-icons/md";
import { useRouter } from "next/router";
import { selectLangs } from "@/store/selectors";
type genreResults = {
  genreResults: any;
};
const GenreResult: React.FC<genreResults> = ({ genreResults }) => {
  // const { locale } = useRouter();
  const locale = selectLangs();
  return (
    <div className={style.title}>
      <div>
        <MdOutlineMovieFilter size={"25px"} color={"#a970ff"} />
      </div>
      <div className={style.section__search_result}>
        {locale==="ru"? genreResults.nameRu : genreResults.nameEn || genreResults.nameRu}
      </div>
    </div>
  );
};

export default GenreResult;
