import { MyContainer, Navbar } from '@/components';
import { useRouter } from 'next/router';
import en from "../locales/en/pages/profile/profile"
import ru from "../locales/ru/pages/profile/profile"


const Profile = () => {


  const { locale } = useRouter();
  const t = locale === 'en' ? en : ru;
  const navbar = [
    {title: `${t.main}`, href: '/'},
    {title: `${t.profile}`}
  ];

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
