import { CollectionMovie, MyContainer, Navbar } from '@/components';
import { capitalizeStr } from '@/utils/capitalize';
import { useRouter } from 'next/router';

const Collection = () => {
  const router = useRouter();
  const collection: string = `${router.query.collection || ''}`;
  const titleCollection = collection && collection !== 'random'
    ? capitalizeStr(collection)
    : 'Подборки'

  const navbar = [
    {title: 'Главная', href: '/'},
    {title: titleCollection}
  ];
  
  return (
    <MyContainer>
      <Navbar link={navbar} />
      <CollectionMovie collection={collection} />
    </MyContainer>
  )
}

export default Collection;
