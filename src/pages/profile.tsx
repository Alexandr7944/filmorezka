import { MyContainer, Navbar } from '@/components';

const navbar = [
  {title: 'Главная', href: '/'},
  {title: 'Профиль'}
];

const Profile = () => {

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
