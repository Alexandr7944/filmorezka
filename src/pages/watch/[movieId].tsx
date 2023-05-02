import { MyContainer, Navbar } from '@/components';
import WatchMovie from '@/components/WatchMovie';
import { useRouter } from 'next/router';

const navbar = [
  {title: 'Главная', href: '/'},
  {title: 'Сериалы'}
];

const WatchPage = () => {
  const router = useRouter();

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className='container'>
        <WatchMovie movieId={`${router.query.movieId}`}/>
      </div>
    </MyContainer>    
  )
}

export default WatchPage