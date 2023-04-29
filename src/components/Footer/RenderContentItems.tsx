import style from "./footer-style.module.scss";

import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { IFormat } from "./models";
import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import React from "react";
import { IconType } from "react-icons";
type RenderProps = {
  title: string;
  content: IFormat;
  icon: IconType;
};
const getIcon = (Elem: IconType): JSX.Element => {
  return <Elem />;
};
const renderContentli = (contentLi: string[] | number[]) => {
  return contentLi.map((item) => (
    <div key={uuidv4()}>
      <Link className={style.footer__linkItem} href="/">
        {item}
      </Link>
    </div>
  ));
};
const renderContent = (cont: IFormat) => {
  return (
    <div className={style.footer__navigation}>
      <Link href="/">Все {cont.nameFormat}</Link>

      <div className={style.footer__navigation_line}>
        <div className={style.footer__navigation}>
          <div className={style.footer__navigation}>
            <div className={style.footer__title}>Жанры</div>
            {renderContentli(cont.genres)}
          </div>
        </div>

        <div className={style.footer__navigation}>
          <div className={style.footer__title}>Страны</div>
          <div className={style.footer__navigation}>
            {renderContentli(cont.countries)}
          </div>

          <div className={style.footer__title}>Годы</div>
          <div className={style.footer__navigation}>
            {renderContentli(cont.years)}
          </div>
        </div>
      </div>
    </div>
  );
};
const RenderContentItems: React.FC<RenderProps> = ({ ...item }) => {
  const arrowDown = <RiArrowDownSLine size="20px" />;
  const arrowUp = <RiArrowUpSLine size="20px" />;
  const [arrowSvg, setArrowSvg] = useState(arrowDown);
  const [value, setValue] = useState(style.dropdown);
  const updateList = (value: string) => {
    
    if (value === style.dropdown) {
      setValue("");
      setArrowSvg(arrowUp);
    } else {
      setValue(style.dropdown);
      setArrowSvg(arrowDown);
    }
  };
  return (
    <div>
      <div className={style.footer__title + " " + style.stores}>
        {item.icon ? getIcon(item.icon) : ""}
        <Link onClick={() => updateList(value)} href="/">
          {item.title}{" "}
        </Link>
        {item.content ? arrowSvg : ""}
      </div>
      <div>
        <div className={value}>
          {item.content ? renderContent(item.content)! : ""}
        </div>
      </div>
    </div>
  );
};
export default RenderContentItems;
