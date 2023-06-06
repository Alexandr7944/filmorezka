import Fetching from '@/API/Fetching';
import { MoviesSlider, MyContainer, Navbar } from '@/components';
import { useAppDispatch } from '@/hooks/hook';
import { IUserAccount } from '@/interface/IUserAccount';
import Autorization from '@/microservices/Autorization';
import { setUser } from '@/store/reducers/userSlice';
import { setGenres } from '@/store/reducers/genresSlice';
import { genre } from '@/types/genre';
import { useEffect } from 'react';

const Home = () => {
  const navbar = [{title: 'Главная'}];
  const dispatch = useAppDispatch();

  useEffect(() => {
    const genresURL: string = 'http://localhost:5000/genres';
    Fetching.getNewAll(genresURL)
      .then((data: genre[]) => {
        if (data) {
          dispatch(setGenres(data));
        }
      })
      .catch((error: any) => {
        console.error(error);
      });

    Autorization.getUser()
      .then((data: IUserAccount | undefined) => {
        if (data) {
          dispatch(setUser(data));
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, [])

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        {/* <MoviesSlider
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
        /> */}
      </div>
    </MyContainer>
  )
}

export default Home;