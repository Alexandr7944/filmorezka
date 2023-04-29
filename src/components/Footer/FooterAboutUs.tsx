import React from "react";
import style from "./footer-style.module.scss";

const FooterAboutUs: React.FC = () => {
  return (
    <div>
      <span className={style.footer__title}>О нас</span>
      <ul className={style.footer__linkList}>
        <li className={style.footer__linkItem}>
          <a href="https://corp.ivi.ru/" >
            О компании
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a
            href="https://corp.ivi.ru/career/#career-vacancy-block"
            
          >
            Вакансии
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/pages/beta/" >
            Программа бета-тестирования
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/info/partners" >
            Информация для партнёров
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a
            href="https://corp.ivi.ru/advertisers/"
            className={style.nbllink + " " + style.nbllink_style}
          >
            Размещение рекламы
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/info/agreement" >
            Пользовательское соглашение
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/info/confidential" >
            Политика конфиденциальности
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a
            href="https://www.ivi.tv/info/goryachaya-liniya-komplaens"
            
          >
            Комплаенс
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterAboutUs;
