import { CollectionMovie, MyContainer, Navbar } from '@/components';
import { selectMediaFilters } from '@/store/selectors';
import { capitalizeStr } from '@/utils/capitalize';
import { useRouter } from 'next/router';

const Collection = () => {
  const { genres } = selectMediaFilters();

  const router = useRouter();
  
  const collection: string = `${router.query.collection}`;
  const nameRu: string | undefined = genres?.map(genre => {
    if (genre.nameEn === collection) return genre.nameRu;
  }).join('');
  const titleCollection = nameRu ? capitalizeStr(nameRu) : '';
  const index = router.asPath.indexOf('?')
  const params = index !== -1 ? router.asPath.substring(index) : '';  

  const navbar = [
    {title: 'Главная', href: '/'},
    {title: titleCollection}
  ];
  
  return (
    <MyContainer>
      <Navbar link={navbar} />
      <CollectionMovie
        collection={collection}
        title={titleCollection}
        params={params}
      />
    </MyContainer>
  )
}

export default Collection;
