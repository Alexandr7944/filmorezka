/* eslint-disable react-hooks/exhaustive-deps */
import Fetching from '@/API/Fetching';
import { MyContainer, Navbar } from '@/components';
import WatchMovie from '@/components/WatchMovie';
import { IActor } from '@/interface/IActor';
import { INewMovie } from '@/interface/IMovie';
import { IVideo } from '@/interface/IMoviePage';
import { capitalizeStr } from '@/utils/capitalize';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const WatchPage = () => {
  const [movie, setMovie] = useState<INewMovie>();
  const [video, setVideo] = useState<IVideo>({
    total: 0, 
    items: [{
      name: '',
      site: '',
      url: ''
    }
  ]});
  
  const [actors, setActors] = useState<IActor[]>();
  const router = useRouter();
  const navbar = [
    {title: 'Главная', href: '/'},
    {
      title: `${movie?.genre?.length &&
        movie?.genre[0] &&
        capitalizeStr(movie.genre[0]) || 'Подборка для Вас'}`,
      href: movie?.genre && movie?.genre[0]
        ? `/collections/${movie?.genre[0]}`
        : '/collections/random'
    },
    {title: `${movie?.name && capitalizeStr(movie.name) || ''}`}
  ];  

  const movieId = router.query.movieId;

  useEffect(() => {
    Fetching.getNewAll(`http://localhost:5000/films/id/${movieId}`)
      .then(movie => setMovie(movie));
  }, [movieId]);

  useEffect(() => {
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${movie && movie.filmSpId}/videos`)
      .then(video => video?.items && setVideo(video));
    Fetching.getAll(`https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${movie && movie.filmSpId}`)
      .then(actors => setActors(actors));
  }, [movie]);

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className='container'>
        {movie && <WatchMovie movie={movie} video={video} actors={actors} />}
      </div>
    </MyContainer>    
  )
}

export default WatchPage