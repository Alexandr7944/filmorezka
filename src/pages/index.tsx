import Fetching from '@/API/Fetching';
import { MoviesSlider, MyContainer, Navbar } from '@/components';
import { useAppDispatch } from '@/hooks/hook';
import { IUserAccount } from '@/interface/IUserAccount';
import Autorization from '@/microservices/Autorization';
import { setUser } from '@/store/reducers/userSlice';
import { setGenres } from '@/store/reducers/genresSlice';
import { genre } from '@/types/genre';
import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import en from "../locales/en/home/home"
import ru from "../locales/ru/home/home"
import { useRouter } from 'next/router';


const Home = () => {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  const navbar = [{title: `${t.main}`}];
  const dispatch = useAppDispatch();
  useEffect(() => {
    const genresURL: string = 'http://localhost:5005/genres';
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
        <MoviesSlider
          title={t.random_selection}
          url='http://localhost:5005/films/random'
        />
        <MoviesSlider
          title={t.top_of_the_best_comedies}
          url='http://localhost:5005/films/filters?genre=comedy'
        />
        <MoviesSlider
          title={t.top_of_the_best}
          url='http://localhost:5005/films/random'
        />
      </div>
    </MyContainer>
  )
}
export async function getStaticProps({locale}:any) {

  return {
     props: {
     ...(await serverSideTranslations(locale, ["common"]))
     },
   }
 }
export default Home;