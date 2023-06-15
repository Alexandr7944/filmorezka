import { Admin, MyContainer, Navbar } from '@/components';
import en from "../locales/en/admin"
import ru from "../locales/ru/admin"
import { useRouter } from 'next/router';

const AdminPage = () => {
  const {locale} = useRouter();
  const t = locale === "en"? en : ru;
  const navbar = [
    {title: `${t.main}`, href: '/'},
    {title: `${t.admin}`}
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
