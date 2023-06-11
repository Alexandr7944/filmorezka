import { MyContainer, Navbar } from '@/components';

const Profile = () => {
  const navbar = [
    {title: 'Главная', href: '/'},
    {title: 'Профиль'}
  ];

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <h2 className="container">
        Стрница профиля
      </h2>
    </MyContainer>
  )
}

export default Profile;
