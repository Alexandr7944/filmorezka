import React from "react";
import style from "../search.module.scss";
import { BiCameraMovie } from "react-icons/bi";
import router from "next/router";

const FilmResults = ({ ...item }) => {
  console.log(item)
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
          {item.name ? item.name : item.nameEn || ""}
        </div>
        <div>{item.year !== "null" ? item.year : ""}</div>
      </div>
    </div>
  );
};

export default FilmResults;
