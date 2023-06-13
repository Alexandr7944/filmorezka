import { MyContainer, Navbar } from '@/components';
import Profile from '@/components/Profile/Profile';
// import { useAppSelector } from '@/hooks/hook';
// import { useRouter } from 'next/router';

const ProfilePage = () => {
  const navbar = [
    {title: 'Главная', href: '/'},
    {title: 'Профиль'}
  ];

  // const user = useAppSelector(state => state.user);

  // const router = useRouter();
  // !user.isAuth && router.push('/');

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        <Profile />
      </div>
    </MyContainer>
  )
}

export default ProfilePage;
