import React from "react";
import style from "../search.module.scss";
import router from "next/router";
import { TbMasksTheater } from "react-icons/tb";

const ActorResults = ({ ...item }) => {
  return (
    <div
      className={style.title}
      onClick={() => router.push(`/actorpage/${item.personId}`)}
    >
      <div>
        <TbMasksTheater size={"25px"} color={"#a970ff"} />
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

export default ActorResults;
