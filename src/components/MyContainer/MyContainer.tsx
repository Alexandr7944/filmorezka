import Head from 'next/head';
import { Header } from '../Header'; 
import { Footer } from '../Footer';
import { useAppDispatch } from '@/hooks/hook';
import { useEffect } from 'react';
import Fetching from '@/API/Fetching';
import { genre } from '@/types/genre';
import { setGenres } from '@/store/reducers/genresSlice';
import Autorization from '@/microservices/Autorization';
import { setUser } from '@/store/reducers/userSlice';
import { IUserAccount } from '@/interface/IUserAccount';

type MyContainerProps = {
  children: React.ReactNode,
  keywords?: HTMLMetaElement
}

const MyContainer: React.FC<MyContainerProps> = ({ children, keywords }) => {
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
    <>
      <Head>
        <meta name='keywords' content={'кино, сериалы, ' + keywords }/>
        <title>Фильморезка</title>
      </Head>

      <div className='my-body'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default MyContainer