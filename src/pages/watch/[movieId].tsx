/* eslint-disable react-hooks/exhaustive-deps */
import Fetching from '@/API/Fetching';
import { MyContainer, Navbar } from '@/components';
import Comments from '@/components/Comments/Comments';
import WatchMovie from '@/components/WatchMovie';
import { IActor } from '@/interface/IActor';
import { INewMovie } from '@/interface/IMovie';
import { IVideo } from '@/interface/IMoviePage';
import { selectGenres } from '@/store/selectors';
import { capitalizeStr } from '@/utils/capitalize';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import en from "../../locales/en/pages/watch/watch"
import ru from "../../locales/ru/pages/watch/watch"

const WatchPage = () => {
  const {locale} = useRouter();
  const t = locale === "en"? en : ru;
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
  const { genres } = selectGenres();
  const nameEn: string | undefined = genres?.map((genre: { nameRu: string | undefined; nameEn: any; }) => {
    if (genre.nameRu === movie?.genre[0]) return genre.nameEn;
  }).join('');
  
  const navbar = [
    {title: `${t.main}`, href: '/'},
    {
      title: `${movie?.genre?.length &&
        movie?.genre[0] &&
        capitalizeStr(movie.genre[0]) || `${t.selection}`}`,

      href: movie?.genre && movie?.genre[0] && genres
        ? `/collections/${nameEn}?genre=${nameEn}`
        : '/'

    },
    {title: `${locale==="ru" ? movie?.name && capitalizeStr(movie.name) || '' : movie?.nameEn && capitalizeStr(movie.nameEn) || movie?.name}`}
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
        <Comments movieId={movieId} movieName={movie ? movie.name : ''} />
      </div>
    </MyContainer>
  )
}

export default WatchPage