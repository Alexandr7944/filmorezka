import { CollectionMovie, MyContainer, Navbar } from '@/components';
import { useRouter } from 'next/router';

const Collection = () => {
  const router = useRouter();

  const navbar = [
    {title: 'Главная', href: '/'},
    {title: 'Подборки', href: '/#'},
    {title: `${router.query.collection}`},
  ];
  
  return (
    <MyContainer>
      <Navbar link={navbar} />
      <CollectionMovie collection={`${router.query.collection}`} />
    </MyContainer>
  )
}

export default Collection;
