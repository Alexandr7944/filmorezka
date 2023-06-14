import { ButtonEffects, MoviesSlider, MyContainer, Navbar } from '@/components';
import BigCarousel from '@/components/BigCarousel';
import en from "../locales/en/home/home"
import ru from "../locales/ru/home/home"
import { useRouter } from 'next/router';
const Home = () => {
  const navbar = [{title: 'Главная'}];
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  return (
    <MyContainer>
      <Navbar link={navbar} />

      <BigCarousel />

      <ButtonEffects />

      <div className="container">
        <MoviesSlider
          title={t.random_selection}
          genre='childlike'
          url='http://localhost:5005/films/filters?genre=childlike'
        />
        <MoviesSlider
          title={t.top_of_the_best_comedies}
          genre='comedy'
          url='http://localhost:5005/films/filters?genre=comedy'
        />
        <MoviesSlider
          title={t.top_of_the_best}
          genre='random'
          url='http://localhost:5005/films/random'
        />
      </div>
  </MyContainer>
  )
}

export default Home;