import Fetching from '@/API/Fetching';
import LoadDB from '@/LoadDB';
import {MoviesSlider, MyContainer, Navbar } from '@/components';

const Home = () => {
  const navbar = [{title: 'Главная'}];
  // new LoadDB().login();
  // new LoadDB().load(); 

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        <MoviesSlider
          title='Топ лучших'
          url='http://localhost:5000/films/random'
        />
        <MoviesSlider
          title='Случайная подборка'
          url='http://localhost:5000/films/rating/9'
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