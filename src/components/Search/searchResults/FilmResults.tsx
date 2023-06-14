import React from "react";
import style from "../search.module.scss";
import { BiCameraMovie } from "react-icons/bi";
import router, { useRouter } from "next/router";

const FilmResults = ({ ...item }) => {
  const { locale } = useRouter();
  return (
    <div
      className={style.title}
      onClick={() => router.push(`/watch/${item.id}`)}
    >
      <div>
        <BiCameraMovie size={"25px"} color={"#a970ff"} />
      </div>
      <div>
        <div className={style.section__search_result}>
          {locale==="ru" ? item.name : item.nameEn || item.name}
        </div>
        <div>{item.year !== "null" ? item.year : ""}</div>
      </div>
    </div>
  );
};

export default FilmResults;
