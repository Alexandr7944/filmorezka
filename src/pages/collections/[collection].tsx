import { CollectionMovie, MyContainer, Navbar } from '@/components';
import { selectGenres } from '@/store/selectors';
import { capitalizeStr } from '@/utils/capitalize';
import { useRouter } from 'next/router';
import en from "@/locales/en/pages/watch/watch"
import ru from "@/locales/ru/pages/watch/watch"

const Collection = () => {
  const {locale} = useRouter();
  const t = locale === "en"? en : ru;
  const { genres } = selectGenres();

  const router = useRouter();
  
  const collection: string = `${router.query.collection}`;
  const nameRu: string | undefined = genres?.map((genre: { nameEn: string; nameRu: any; }) => {
    if (genre.nameEn === collection) return genre.nameRu;
  }).join('');
  const titleCollection = nameRu ? capitalizeStr(nameRu) : '';
  const index = router.asPath.indexOf('?')
  const params = index !== -1 ? router.asPath.substring(index) : '';  

  const navbar = [
    {title: `${t.main}`, href: '/'},
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
