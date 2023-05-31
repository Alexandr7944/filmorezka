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