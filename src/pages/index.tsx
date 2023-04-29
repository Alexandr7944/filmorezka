import {MoviesSlider, MyContainer, Navbar } from '@/components';

const Home = () => {
  const navbar = [{title: 'Главная'}];

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        <h1>Главная</h1>
        <MoviesSlider
          title='Рекомендую посмотреть'
          url='https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'
        />
        <MoviesSlider
          title='Современные мультфильмы'
          url='https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=2'
        />
      </div>
    </MyContainer>
  )
}

export default Home;
