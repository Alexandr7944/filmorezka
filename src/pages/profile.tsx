import { MyContainer, Navbar } from '@/components';
// import { useAppSelector } from '@/hooks/hook';
// import { useRouter } from 'next/router';

const navbar = [
  {title: 'Главная', href: '/'},
  {title: 'Профиль'}
];

const Profile = () => {

  // const user = useAppSelector(state => state.user);

  // const router = useRouter();
  // !user.isAuth && router.push('/');

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        <h3>Страница профиля</h3>
      </div>
    </MyContainer>
  )
}

export default Profile;
