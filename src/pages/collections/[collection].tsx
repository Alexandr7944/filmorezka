import { CollectionMovie, MyContainer, Navbar } from '@/components';
import { useRouter } from 'next/router';

const Collection = () => {
  const router = useRouter();
  const collection: string = `${router.query.collection || ''}`;
  
  const navbar = [
    {title: 'Главная', href: '/'},
    {title: 'Подборки', href: '/#'},
    {title: collection},
  ];
  
  return (
    <MyContainer>
      <Navbar link={navbar} />
      <CollectionMovie collection={`${router.query.collection}`} />
    </MyContainer>
  )
}

export default Collection;
