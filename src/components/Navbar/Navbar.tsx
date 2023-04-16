import Link from 'next/link';
import style from './navbar-style.module.scss';

type LinkType = {
  title: string,
  href?: string
}

type NavbarProps = {
  link: LinkType[]
}

const Navbar: React.FC<NavbarProps> = ({ link }) => {
  
  return (
    <nav className={style.navbar}>
      <div className="container">
        <ul className={style["navbar__list"]}>
          {
            link.map((el: LinkType) => 
              <li className={style["navbar__item"]} key={el.title}>
                {
                  el.href
                    ? <Link href={el.href}>{el.title}</Link>
                    : <span>{el.title}</span>
                }
              </li>
            )
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar