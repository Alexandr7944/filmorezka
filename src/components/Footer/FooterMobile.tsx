import React, { useState } from "react";
import Link from "next/link";
import style from "./footer-style.module.scss";
import { BiHomeAlt, BiDotsHorizontalRounded } from "react-icons/bi";
import { MdOutlineFolderSpecial, MdOutlineClose } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { SlDiamond } from "react-icons/sl";
import { TbCertificate2 } from "react-icons/tb";
import RenderContentItems from "./RenderContentItems";
import { navigationsItems } from "./navigation";
import FooterAboutUs from "./FooterAboutUs";
import { RiTv2Fill } from "react-icons/ri";
import FooterNetworks from "./FooterNetworks";
import Search from "../Search/Search";
import { useRouter } from "next/router";
import en from "../../locales/en/footer/footer"
import ru from "../../locales/ru/footer/footer"

const FooterMobile: React.FC = () => {
  const textYet = <BiDotsHorizontalRounded size="20px" />;
  const textClose = <MdOutlineClose size="20px" />;
  const {locale} = useRouter();
  const t:any = locale === "en"? en : ru;


  const [drawerOpen, setDrawerOpen] = useState(style.drawer);
  const [textContent, setTextContent] = useState(`${t.yet}`);
  const [textContentSvg, setTextContentSvg] = useState(textYet);

  const [value, setValue] = useState("");
  const updateMenu = (key: string) => {
    setValue(key);
    document.body.classList.remove(style.modal);
    setTextContent(`${t.yet}`);
    setDrawerOpen(style.drawer);
    setTextContentSvg(textYet);
  };
  const updateYet = (key: string) => {
    setValue(key);

    if (drawerOpen === style.drawer) {
      document.body.classList.add(style.modal);
      setDrawerOpen(style.drawer__isOpen);
      setTextContentSvg(textClose);
      setTextContent(`${t.close}`);
    } else {
      setDrawerOpen(style.drawer);
      setTextContentSvg(textYet);
      setTextContent(`${t.yet}`);
      document.body.classList.remove(style.modal);
    }
  };

  return (
    <div className={style.tabBar}>
      <div className="mycontainer">
        <div className={style.tabBar__content} >
          <Link data-testid="catalog-navigation-item"
            key="home"
            onClick={() => updateMenu("home")}
            href="/"
            className={
              value === "home"
                ? style.tabBar__item + " " + style.tabBar__selected
                : style.tabBar__item
            }
          >
            <div
              className={
                value === "home"
                  ? style.tabBar__itemGlow
                  : style.tabBar__itemGlowImage
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64"
                height="48"
                viewBox="0 0 64 48"
              >
                <defs>
                  <filter
                    id="c"
                    width="164.3%"
                    height="140.9%"
                    x="-32.1%"
                    y="-20.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="f"
                    width="164.3%"
                    height="164.3%"
                    x="-32.1%"
                    y="-32.1%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="g"
                    width="190%"
                    height="190%"
                    x="-45%"
                    y="-45%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="h"
                    width="200%"
                    height="200%"
                    x="-50%"
                    y="-50%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                  </filter>
                  <radialGradient
                    id="b"
                    r="78.571%"
                    fx="50%"
                    fy="50%"
                    gradientTransform="matrix(0 .63636 -.6666 0 .833 .182)"
                  >
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="e" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <path id="a" d="M0 0h64v48H0z" />
                </defs>
                <g fillRule="evenodd" opacity=".64">
                  <mask id="d" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <ellipse
                    cx="32"
                    fill="url(#b)"
                    filter="url(#c)"
                    mask="url(#d)"
                    rx="28"
                    ry="44"
                  />
                  <circle
                    cx="32"
                    r="28"
                    fill="url(#e)"
                    filter="url(#f)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="20"
                    fill="url(#e)"
                    filter="url(#g)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="12"
                    fill="url(#e)"
                    filter="url(#h)"
                    mask="url(#d)"
                  />
                </g>
              </svg>
            </div>
            <div className="nbl-tabBar__itemIcon">
              <BiHomeAlt size="20px" />
            </div>
            <div className={style.tabBar__itemCaption}>{t.ivi}</div>
          </Link>
          <Link
          data-testid="catalog-navigation-item"
            onClick={() => updateMenu("catalog")}
            data-test="my_ivi"
            href="/collection"
            className={
              value === "catalog"
                ? style.tabBar__item + " " + style.tabBar__selected
                : style.tabBar__item
            }
          >
            <div
              className={
                value === "catalog"
                  ? style.tabBar__itemGlow
                  : style.tabBar__itemGlowImage
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64"
                height="48"
                viewBox="0 0 64 48"
              >
                <defs>
                  <filter
                    id="c"
                    width="164.3%"
                    height="140.9%"
                    x="-32.1%"
                    y="-20.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="f"
                    width="164.3%"
                    height="164.3%"
                    x="-32.1%"
                    y="-32.1%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="g"
                    width="190%"
                    height="190%"
                    x="-45%"
                    y="-45%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="h"
                    width="200%"
                    height="200%"
                    x="-50%"
                    y="-50%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                  </filter>
                  <radialGradient
                    id="b"
                    r="78.571%"
                    fx="50%"
                    fy="50%"
                    gradientTransform="matrix(0 .63636 -.6666 0 .833 .182)"
                  >
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="e" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <path id="a" d="M0 0h64v48H0z" />
                </defs>
                <g fillRule="evenodd" opacity=".64">
                  <mask id="d" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <ellipse
                    cx="32"
                    fill="url(#b)"
                    filter="url(#c)"
                    mask="url(#d)"
                    rx="28"
                    ry="44"
                  />
                  <circle
                    cx="32"
                    r="28"
                    fill="url(#e)"
                    filter="url(#f)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="20"
                    fill="url(#e)"
                    filter="url(#g)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="12"
                    fill="url(#e)"
                    filter="url(#h)"
                    mask="url(#d)"
                  />
                </g>
              </svg>
            </div>
            <div className="nbl-tabBar__itemIcon">
              <MdOutlineFolderSpecial size="20px" />
            </div>
            <div className={style.tabBar__itemCaption}>{t.catalog}</div>
          </Link>

          <a
          data-testid="catalog-navigation-item"
            onClick={() => updateMenu("search")}
            className={
              value === "search"
                ? style.tabBar__item + " " + style.tabBar__selected
                : style.tabBar__item
            }
          >
            <div
              className={
                value === "search"
                  ? style.tabBar__itemGlow
                  : style.tabBar__itemGlowImage
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64"
                height="48"
                viewBox="0 0 64 48"
              >
                <defs>
                  <filter
                    id="c"
                    width="164.3%"
                    height="140.9%"
                    x="-32.1%"
                    y="-20.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="f"
                    width="164.3%"
                    height="164.3%"
                    x="-32.1%"
                    y="-32.1%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="g"
                    width="190%"
                    height="190%"
                    x="-45%"
                    y="-45%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="h"
                    width="200%"
                    height="200%"
                    x="-50%"
                    y="-50%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                  </filter>
                  <radialGradient
                    id="b"
                    r="78.571%"
                    fx="50%"
                    fy="50%"
                    gradientTransform="matrix(0 .63636 -.6666 0 .833 .182)"
                  >
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="e" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <path id="a" d="M0 0h64v48H0z" />
                </defs>
                <g fillRule="evenodd" opacity=".64">
                  <mask id="d" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <ellipse
                    cx="32"
                    fill="url(#b)"
                    filter="url(#c)"
                    mask="url(#d)"
                    rx="28"
                    ry="44"
                  />
                  <circle
                    cx="32"
                    r="28"
                    fill="url(#e)"
                    filter="url(#f)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="20"
                    fill="url(#e)"
                    filter="url(#g)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="12"
                    fill="url(#e)"
                    filter="url(#h)"
                    mask="url(#d)"
                  />
                </g>
              </svg>
            </div>
            {/* <div className="nbl-tabBar__itemIcon">
              <BiSearch size="20px" />
            </div>
            <div className={style.tabBar__itemCaption}>Поиск</div> */}
            <Search />
          </a>
          <Link
          data-testid="catalog-navigation-item"
            onClick={() => updateMenu("user")}
            data-test="my_ivi"
            href="/profile"
            className={
              value === "user"
                ? style.tabBar__item + " " + style.tabBar__selected
                : style.tabBar__item
            }
          >
            <div
              className={
                value === "user"
                  ? style.tabBar__itemGlow
                  : style.tabBar__itemGlowImage
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64"
                height="48"
                viewBox="0 0 64 48"
              >
                <defs>
                  <filter
                    id="c"
                    width="164.3%"
                    height="140.9%"
                    x="-32.1%"
                    y="-20.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="f"
                    width="164.3%"
                    height="164.3%"
                    x="-32.1%"
                    y="-32.1%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="g"
                    width="190%"
                    height="190%"
                    x="-45%"
                    y="-45%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="h"
                    width="200%"
                    height="200%"
                    x="-50%"
                    y="-50%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                  </filter>
                  <radialGradient
                    id="b"
                    r="78.571%"
                    fx="50%"
                    fy="50%"
                    gradientTransform="matrix(0 .63636 -.6666 0 .833 .182)"
                  >
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="e" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <path id="a" d="M0 0h64v48H0z" />
                </defs>
                <g fillRule="evenodd" opacity=".64">
                  <mask id="d" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <ellipse
                    cx="32"
                    fill="url(#b)"
                    filter="url(#c)"
                    mask="url(#d)"
                    rx="28"
                    ry="44"
                  />
                  <circle
                    cx="32"
                    r="28"
                    fill="url(#e)"
                    filter="url(#f)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="20"
                    fill="url(#e)"
                    filter="url(#g)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="12"
                    fill="url(#e)"
                    filter="url(#h)"
                    mask="url(#d)"
                  />
                </g>
              </svg>
            </div>
            <div className="nbl-tabBar__itemIcon">
              <AiOutlineUser size="20px" />
            </div>
            <div className={style.tabBar__itemCaption}>{t.profile}</div>
          </Link>
          <a
          data-testid="catalog-navigation-item"
            onClick={() => updateYet("yet")}
            className={
              value === "yet"
                ? style.tabBar__item + " " + style.tabBar__selected
                : style.tabBar__item
            }
          >
            <div
              className={
                value === "yet"
                  ? style.tabBar__itemGlow
                  : style.tabBar__itemGlowImage
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="64"
                height="48"
                viewBox="0 0 64 48"
              >
                <defs>
                  <filter
                    id="c"
                    width="164.3%"
                    height="140.9%"
                    x="-32.1%"
                    y="-20.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="f"
                    width="164.3%"
                    height="164.3%"
                    x="-32.1%"
                    y="-32.1%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="g"
                    width="190%"
                    height="190%"
                    x="-45%"
                    y="-45%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
                  </filter>
                  <filter
                    id="h"
                    width="200%"
                    height="200%"
                    x="-50%"
                    y="-50%"
                    filterUnits="objectBoundingBox"
                  >
                    <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
                  </filter>
                  <radialGradient
                    id="b"
                    r="78.571%"
                    fx="50%"
                    fy="50%"
                    gradientTransform="matrix(0 .63636 -.6666 0 .833 .182)"
                  >
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="e" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#7e798f" />
                    <stop offset="100%" stopColor="#7e798f" stopOpacity="0" />
                  </radialGradient>
                  <path id="a" d="M0 0h64v48H0z" />
                </defs>
                <g fillRule="evenodd" opacity=".64">
                  <mask id="d" fill="#fff">
                    <use xlinkHref="#a" />
                  </mask>
                  <ellipse
                    cx="32"
                    fill="url(#b)"
                    filter="url(#c)"
                    mask="url(#d)"
                    rx="28"
                    ry="44"
                  />
                  <circle
                    cx="32"
                    r="28"
                    fill="url(#e)"
                    filter="url(#f)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="20"
                    fill="url(#e)"
                    filter="url(#g)"
                    mask="url(#d)"
                    opacity=".4"
                  />
                  <circle
                    cx="32"
                    r="12"
                    fill="url(#e)"
                    filter="url(#h)"
                    mask="url(#d)"
                  />
                </g>
              </svg>
            </div>
            <div className="nbl-tabBar__itemIcon">{textContentSvg}</div>

            <div className={style.tabBar__itemCaption}>{textContent}</div>
          </a>
        </div>
      </div>

      <div className={drawerOpen}>
        <div className={style.mycontainer}>
          <div className={style.line}>
            <div className={style.footer__container}>
              <a
                href="https://www.ivi.tv/subscribe?redirect_url=%2F"
                className={
                  style.footer__button + " " + style.footer__button_width
                }
              >
                <SlDiamond className={style.footer__stores_icons} />
                <div className={style.footer__textBlock}>
                  <div className={style.footer__title}>{t.subscription}</div>
                </div>
              </a>
              <a
                href="https://www.ivi.tv/cert"
                className={
                  style.footer__button + " " + style.footer__button_width
                }
              >
                <TbCertificate2 className={style.footer__stores_icons} />
                <div className={style.footer__textBlock}>
                  <div className={style.footer__title}>
                    {t.certificate}
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className={style.line + " " + style.padding}>
            <div className={style.links}>
              {navigationsItems.map((item: any, i) => (
                <RenderContentItems key={`key`+ i} {...item} />
              ))}
            </div>
          </div>
          <div className={style.line + " " + style.padding}>
            <div>
              <ul className={style.footer__title + " " + style.links}>
                <li>
                  <a href="https://www.ivi.tv/movies/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready">
                    {t.ivi_rating_movies}
                  </a>
                </li>
                <li>
                  <a href="https://www.ivi.tv/series/all?ivi_rating_10_gte=7&amp;sort=ivi&amp;rating_part=main&amp;rating_model=ready">
                  {t.ivi_rating_serials}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.line + " " + style.padding}>
            <div className={style.links}>
              <FooterAboutUs />
              <span className={style.footer__title}>{t.code_login}</span>
              <div className={style.footer__container2}>
                <a
                  href="https://www.ivi.tv/subscribe?redirect_url=%2F"
                  className={
                    style.footer__button + " " + style.footer__button_width
                  }
                >
                  <RiTv2Fill className={style.footer__stores_icons} />
                  <div className={style.footer__textBlock}>
                    <div className={style.footer__preamble}>{t.lookat}</div>
                    <div className={style.footer__title}>Smart TV</div>
                  </div>
                </a>{" "}
                <a
                  href="https://www.ivi.tv/cert"
                  className={
                    style.footer__button + " " + style.footer__button_width
                  }
                >
                  <RiTv2Fill className={style.footer__stores_icons} />
                  <div className={style.footer__textBlock}>
                    <div className={style.footer__title}>{t.all_devices}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={style.line + ' ' + style.fpadding}>
            <div className={style.footer__flex}>
            <FooterNetworks />
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
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
