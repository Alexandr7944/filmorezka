import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { MoviesList, MyContainer, Navbar } from '@/components';

const Home = () => {
  const navbar = [{title: 'Home'}];

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        <h1>Главная</h1>
        <MoviesList
          title='Рекомендую посмотреть'
          url='https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'
        />
        <MoviesList
          title='Современные мультфильмы'
          url='https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'
        />
      </div>
    </MyContainer>
  )
}

export default Home;
