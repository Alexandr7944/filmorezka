import { MyContainer, Navbar } from '@/components';
import WatchMovie from '@/components/WatchMovie';

const navbar = [
  {title: 'Главная', href: '/'},
  {title: 'Сериалы'}
];

const WatchPage = () => {

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className='container'>
        <WatchMovie />
      </div>
    </MyContainer>    
  )
}

export default WatchPage