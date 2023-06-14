import React from "react";
import style from "./footer-style.module.scss";
import en from "../../locales/en/footer/footer"
import ru from "../../locales/ru/footer/footer"
import { useRouter } from "next/router";

const FooterAboutUs: React.FC = () => {
  const {locale} = useRouter();
  const t:any = locale === "en"? en : ru;
  return (
    <div>
      <span className={style.footer__title}>{t.about}</span>
      <ul className={style.footer__linkList}>
        <li className={style.footer__linkItem}>
          <a href="https://corp.ivi.ru/" >
            {t.about_company}
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a
            href="https://corp.ivi.ru/career/#career-vacancy-block"
            
          >
            {t.job}
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/pages/beta/" >
            {t.b_test}
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/info/partners" >
            {t.partners}
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a
            href="https://corp.ivi.ru/advertisers/"
            className={style.nbllink + " " + style.nbllink_style}
          >
            {t.promo}
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/info/agreement" >
            {t.agreement}
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a href="https://www.ivi.tv/info/confidential" >
         {t.privacy}
          </a>
        </li>
        <li className={style.footer__linkItem}>
          <a
            href="https://www.ivi.tv/info/goryachaya-liniya-komplaens"
            
          >
            {t.Compliance}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterAboutUs;
