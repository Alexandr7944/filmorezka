import { ButtonEffects, MoviesSlider, MyContainer, Navbar } from '@/components';
import BigCarousel from '@/components/BigCarousel';
import en from "../locales/en/home/home"
import ru from "../locales/ru/home/home"
import { useRouter } from 'next/router';
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
import { useSelector } from 'react-redux';
import { LanguageState } from '@/types/lang';
const Home = () => {
  // const { locale } = useRouter();
  const language = useSelector((state: LanguageState) => state.langs.language);
  const t = language === 'en' ? en : ru;
  // const { t } = useTranslation();
	// const [query] = useLanguageQuery();
  const navbar = [{title: `${t.main}`, href: '/'}];
  
  return (
    <MyContainer>
      <Navbar link={navbar} />
      <BigCarousel />

      <ButtonEffects />
    
      <div className="container">
        <MoviesSlider
          title={t.random_selection}
          genre='childlike'
          url='http://localhost:5000/films/filters?genre=childlike'
        />
        <MoviesSlider
          title={t.top_of_the_best_comedies}
          genre='comedy'
          url='http://localhost:5000/films/filters?genre=comedy'
        />
        <MoviesSlider
          title={t.top_of_the_best}
          genre='random'
          url='http://localhost:5000/films/random'
        />
      </div>
  </MyContainer>
  )
}

export default Home;