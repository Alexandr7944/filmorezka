import { ButtonEffects, MoviesSlider, MyContainer, Navbar } from '@/components';
import BigCarousel from '@/components/BigCarousel';

const Home = () => {
  const navbar = [{title: 'Главная'}];

  return (
    <MyContainer>
      <Navbar link={navbar} />

      <BigCarousel />

      <ButtonEffects />

      <div className="container">
        <MoviesSlider
          title='Случайная подборка'
          url='http://localhost:5000/films/random'
        />
        <MoviesSlider
          title='Топ лучших комедий'
          url='http://localhost:5000/films/filters?genre=comedy'
        />
        <MoviesSlider
          title='Топ лучших'
          url='http://localhost:5000/films/random'
        />
      </div>
  </MyContainer>
  )
}

export default Home;