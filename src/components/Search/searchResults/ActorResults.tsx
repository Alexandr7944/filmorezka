import React from "react";
import style from "../search.module.scss";
import router, { useRouter } from "next/router";
import { TbMasksTheater } from "react-icons/tb";
import { selectLangs } from "@/store/selectors";

const ActorResults = ({ ...item }) => {
  // const { locale } = useRouter();
  const locale = selectLangs();
 
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
          {locale==="ru" ? item.name : item.nameEn || item.name}
        </div>
        <div>{item.year !== "null" ? item.year : ""}</div>
      </div>
    </div>
  );
};

export default ActorResults;
