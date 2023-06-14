import { Admin, MyContainer, Navbar } from '@/components';

const AdminPage = () => {
  const navbar = [
    {title: 'Главная', href: '/'},
    {title: 'Админка'}
  ];

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        <Admin/>
      </div>
    </MyContainer>
  )
}

export default AdminPage;
