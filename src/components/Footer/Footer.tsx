import Link from "next/link";
import style from "./footer-style.module.scss";
import { BsEnvelope, BsGooglePlay } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { AiFillApple, AiOutlineNotification } from "react-icons/ai";
import { RiTv2Fill } from "react-icons/ri";
import FooterMobile from "./FooterMobile";
import FooterAboutUs from "./FooterAboutUs";
import FooterNetworks from "./FooterNetworks";
import { useRouter } from "next/router";
import en from "../../locales/en/footer/footer"
import ru from "../../locales/ru/footer/footer"


const Footer: React.FC = () => {
  const {locale} = useRouter();
  const t:any = locale === "en"? en : ru;
  return (
    <div className={style.footer}>
      <div className={style.mycontainer}>
        <div className={style.footer__desktop}>
          <div className={style.footer__container + " " + style.line}>
            <div className={style.footer__column}>
              <FooterAboutUs />
            </div>

            <div className={style.footer__column}>
              <span className={style.footer__title}>{t.section}</span>
              <ul className={style.footer__linkList}>
                <li className={style.footer__linkItem}>
                  <Link href="/" className="nbl-link">
                    {t.ivi}
                  </Link>
                </li>
                <li className={style.footer__linkItem}>
                  <a href="https://www.ivi.tv/new" className="nbl-link">
                  {t.news}
                  </a>
                </li>
                <li className={style.footer__linkItem}>
                  <Link href="/" className="nbl-link">
                  {t.films}
                  </Link>
                </li>
                <li className={style.footer__linkItem}>
                  <Link href="/" className="nbl-link">
                  {t.serials}
                  </Link>
                </li>
                <li className={style.footer__linkItem}>
                  <Link
                    href="/"
                    className={style.nbllink + " " + style.nbllink_style}
                  >
                     {t.cartoons}
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
                    {t.certificate}
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.footer__column}>
              <span className={style.footer__title}>{t.support}</span>
              <div>
                <span className={style.footer__linkItem}>
                  {t.help}
                </span>
                <br />
                <span className={style.footer__linkItem}>
                 {t.operators}
                </span>
              </div>
              <div className={style.footer__support}>
                <a href="https://www.ivi.tv/profile">
                  <div
                    className={
                      style.footer__buttonstyle + " " + style.footer__button
                    }
                  >
                    {t.write}
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
                    <div>{t.questions}</div>
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
                  {t.watch_movie}
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
                    <div className={style.footer__preamble}>{t.upload}</div>
                    <div className={style.footer__title}>App Store</div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=ru.ivi.client"
                  className={style.footer__button}
                >
                  <BsGooglePlay className={style.footer__stores_icons} />
                  <div className={style.footer__textBlock}>
                    <div className={style.footer__preamble}>{t.available}</div>
                    <div className={style.footer__title}>Google Play</div>
                  </div>
                </a>
                <a
                  href="https://go.onelink.me/app/devicesiOS"
                  className={style.footer__button}
                >
                  <RiTv2Fill className={style.footer__stores_icons} />
                  <div className={style.footer__textBlock}>
                    <div className={style.footer__preamble}>{t.lookat}</div>
                    <div className={style.footer__title}>Smart TV</div>
                  </div>
                </a>
                <a
                  href="https://go.onelink.me/app/devicesiOS"
                  className={style.footer__button}
                >
                  <AiFillApple className={style.footer__stores_icons} />
                  <div className={style.footer__textBlock}>
                    <div className={style.footer__preamble}>{t.upload}</div>
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
