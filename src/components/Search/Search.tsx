import React, { useState } from "react";
import style from "./search.module.scss";
import SearchModal from "./SearchModal";
import { BiSearch } from "react-icons/bi";
import en from "../../locales/en/search/search"
import ru from "../../locales/ru/search/search"
import { useRouter } from "next/router";

const Search = () => {
  const [modalActive, setModalActive] = useState(false);
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  return (
    <div onClick={() => setModalActive(true)}>
     
        <div className={style.search_desktop + " " + style.search}>
          <BiSearch size="20px" />
          <span>{t.title}</span>
        </div>
        <div className={style.search_mobile + " " + style.search}>
          <BiSearch size="20px" />
          <span className={style.tabBar__itemCaption}> {t.title}</span>
        </div>
        <SearchModal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Search;
