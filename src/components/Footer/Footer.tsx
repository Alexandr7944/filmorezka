import Link from "next/link";
import style from "./footer-style.module.scss";
import { BsEnvelope, BsGooglePlay } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { AiFillApple, AiOutlineNotification } from "react-icons/ai";
import { RiTv2Fill } from "react-icons/ri";
import FooterMobile from "./FooterMobile";
import FooterAboutUs from "./FooterAboutUs";
import FooterNetworks from "./FooterNetworks";

const Footer: React.FC = () => {
  return (
    <div className={style.footer}>
      <div className={style.mycontainer}>
        <div className={style.footer__desktop}>
          <div className={style.footer__container + " " + style.line}>
            <div className={style.footer__column}>
              <FooterAboutUs />
            </div>

            <div className={style.footer__column}>
              <span className={style.footer__title}>Разделы</span>
              <ul className={style.footer__linkList}>
                <li className={style.footer__linkItem}>
                  <Link href="/" className="nbl-link">
                    Мой Иви
                  </Link>
                </li>
                <li className={style.footer__linkItem}>
                  <a href="https://www.ivi.tv/new" className="nbl-link">
                    Что нового
                  </a>
                </li>
                <li className={style.footer__linkItem}>
                  <Link href="/" className="nbl-link">
                    Фильмы
                  </Link>
                </li>
                <li className={style.footer__linkItem}>
                  <Link href="/" className="nbl-link">
                    Сериалы
                  </Link>
                </li>
                <li className={style.footer__linkItem}>
                  <Link
                    href="/"
                    className={style.nbllink + " " + style.nbllink_style}
                  >
                    Мультфильмы
                  </Link>
                </li>
                <li
                  className={
                    style.footer__linkItem + " " + style.footer__certificate
                  }
                >
                  <a
                    href="https://www.ivi.tv/info/agreement"
                    className={style.footer__certificate__link}
                  >
                    Активация сертификата
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.footer__column}>
              <span className={style.footer__title}>Служба поддержки</span>
              <div>
                <span className={style.footer__linkItem}>
                  Мы всегда готовы вам помочь.
                </span>
                <br />
                <span className={style.footer__linkItem}>
                  Наши операторы онлайн 24/7
                </span>
              </div>
              <div className={style.footer__support}>
                <a href="https://www.ivi.tv/profile">
                  <div
                    className={
                      style.footer__buttonstyle + " " + style.footer__button
                    }
                  >
                    Написать в чате
                  </div>
                </a>
                <div className={style.footer__flex}>
                  <a href="mailto:support@ivi.ru">
                    <div
                      className={
                        style.footer__button +
                        " " +
                        style.footer__button_support
                      }
                    >
                      <BsEnvelope size={"16px"} color={"white"} />
                    </div>
                  </a>
                  <div
                    className={
                      style.footer__button + " " + style.footer__button_support
                    }
                  >
                    <a>
                      <FiPhone size={"16px"} color={"white"} />
                    </a>
                  </div>
                </div>

                <ul className={style.footer__questions}>
                  <li>
                    <a href="https://ask.ivi.ru/">ask.ivi.ru</a>
                    <div>Ответы на вопросы</div>
                  </li>
                </ul>
              </div>
            </div>

            <div className={style.footer__column}>
              <div className={style.footerWidget}>
                <div className={style.footerWidget__iconSection}>
                  <div className={style.footer__mute}>
                    {" "}
                    <AiOutlineNotification size={"56px"} color={"white"} />
                  </div>
                  <div className={style.line2}></div>
                </div>
                <div className={style.footerWidget__text}>
                  Смотрите фильмы, сериалы и мультфильмы без рекламы
                </div>
              </div>
            </div>
          </div>
          <div className={style.footer__container + " " + style.line}>
            <div className={style.footer__column_wide}>
              <div className={style.stores}>
                <a
                  href="https://go.onelink.me/app/devicesiOS"
                  className={style.footer__button}
                >
                  <AiFillApple className={style.footer__stores_icons} />
                  <div className={style.footer__textBlock}>
                    <div className={style.footer__preamble}>Загрузить в</div>
                    <div className={style.footer__title}>App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=ru.ivi.client"
                  className={style.footer__button}
                >
                  <BsGooglePlay className={style.footer__stores_icons} />
                  <div className={style.footer__textBlock}>
                    <div className={style.footer__preamble}>Доступно в</div>
                    <div className={style.footer__title}>Google Play</div>
                  </div>
                </a>
                <a
                  href="https://go.onelink.me/app/devicesiOS"
                  className={style.footer__button}
                >
                  <RiTv2Fill className={style.footer__stores_icons} />
                  <div className={style.footer__textBlock}>
                    <div className={style.footer__preamble}>Смотрите на</div>
                    <div className={style.footer__title}>Smart TV</div>
                  </div>
                </a>
                <a
                  href="https://go.onelink.me/app/devicesiOS"
                  className={style.footer__button}
                >
                  <AiFillApple className={style.footer__stores_icons} />
                  <div className={style.footer__textBlock}>
                    <div className={style.footer__preamble}>Загрузить в</div>
                    <div className={style.footer__title}>App Store</div>
                  </div>
                </a>
              </div>
              <div className={style.footer__copyrights}>
                <p>
                  <span>©&nbsp;</span>
                  <span>2023</span>
                  <span>&nbsp;ООО «Иви.ру»</span>
                </p>
                <p>
                  HBO ® and related service marks are the property of Home Box
                  Office, Inc
                </p>
              </div>
            </div>
            <div className={style.footer__column_wide}>
            <div className={style.footer__community}>
            <FooterNetworks />
            </div>
           
            </div>
          </div>
        </div>
      </div>

      <FooterMobile />
    </div>
  );
};
export default Footer;
