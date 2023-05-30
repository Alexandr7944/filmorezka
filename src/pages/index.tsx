import { MoviesSlider, MyContainer, Navbar } from '@/components';
import { useAppDispatch } from '@/hooks/hook';
import { IUserAccount } from '@/interface/IUserAccount';
import Autorization from '@/microservices/Autorization';
import { setUser } from '@/store/reducers/userSlice';
import { useEffect } from 'react';

const Home = () => {
  const navbar = [{title: 'Главная'}];
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      let data: IUserAccount | undefined = await Autorization.getUser();

      if (data) {
        dispatch(setUser(data));
      }
    }

    fetchData();
  }, [])

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        <MoviesSlider
          title='Топ лучших'
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
