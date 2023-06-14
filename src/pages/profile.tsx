import { MyContainer, Navbar } from '@/components';
import Profile from '@/components/Profile/Profile';
import { useAppSelector } from '@/hooks/hook';
import { useRouter } from 'next/router';
import en from "../locales/en/pages/profile/profile"
import ru from "../locales/ru/pages/profile/profile"
const ProfilePage = () => {
  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  const navbar = [
    {title: `${t.main}`, href: '/'},
    {title: `${t.profile}`}
  ];

  const user = useAppSelector(state => state.user);

  const router = useRouter();
  !user.isAuth && router.push('/');

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        <Profile person={user}/>
      </div>
    </MyContainer>
  )
}

export default ProfilePage;
