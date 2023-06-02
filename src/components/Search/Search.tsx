import React, { useState } from "react";
import style from "./search.module.scss";
import SearchModal from "./SearchModal";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div onClick={() => setModalActive(true)}>
     
        <div className={style.search_desktop + " " + style.search}>
          <BiSearch size="20px" />
          <span>Поиск</span>
        </div>
        <div className={style.search_mobile + " " + style.search}>
          <BiSearch size="20px" />
          <span className={style.tabBar__itemCaption}>Поиск</span>
        </div>
        <SearchModal active={modalActive} setActive={setModalActive} />
    </div>
  );
};

export default Search;
