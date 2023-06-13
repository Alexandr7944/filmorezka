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
          title='Современные мультфильмы'
          genre='childlike'
          url='http://localhost:5000/films/filters?raitinr=9&genre=childlike'
        />
        <MoviesSlider
          title='Подборка комедий'
          genre='comedy'
          url='http://localhost:5000/films/filters?genre=comedy'
        />
        <MoviesSlider
          title='Топ лучших, наверное'
          genre='random'
          url='http://localhost:5000/films/random'
        />
      </div>
  </MyContainer>
  )
}

export default Home;