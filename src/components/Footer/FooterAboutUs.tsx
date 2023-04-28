import React from "react";
import style from "./footer-style.module.scss";

const FooterAboutUs: React.FC = () => {
  return (
    <div>
      <span className={style.footer__title}>О нас</span>
      <ul className={style.footer__linkList}>
        <li className={style.footer__linkItem}>
          <a href="https://corp.ivi.ru/" className="nbl-link">
            О компании
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a
            href="https://corp.ivi.ru/career/#career-vacancy-block"
            className="nbl-link"
          >
            Вакансии
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/pages/beta/" className="nbl-link">
            Программа бета-тестирования
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/info/partners" className="nbl-link">
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
          <a href="https://www.ivi.tv/info/agreement" className="nbl-link">
            Пользовательское соглашение
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/info/confidential" className="nbl-link">
            Политика конфиденциальности
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a
            href="https://www.ivi.tv/info/goryachaya-liniya-komplaens"
            className="nbl-link"
          >
            Комплаенс
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterAboutUs;
