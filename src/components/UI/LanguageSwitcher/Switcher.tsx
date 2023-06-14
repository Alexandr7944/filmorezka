import React from "react";
import style from "./switcher-style.module.scss";
import router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LanguageState } from "@/types/lang";
import { setLanguage } from "@/store/reducers/langReducer";

const Switcher = () => {
  const language = useSelector((state: LanguageState) => state.language);
  const dispatch = useDispatch();
  const { locale } = useRouter();
  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
    dispatch(setLanguage(locale));
  };
 
  return (
    <div>
      {" "}
      <select
        onChange={changeLanguage}
        defaultValue={locale}
        className={style.text_shadow + " " + style.select}
      >
        <option  className={style.en} value="en">
          EN
        </option>
        <option  className={style.ru} value="ru">
          RU
        </option>
      </select>
    </div>
  );
};

export default Switcher;
