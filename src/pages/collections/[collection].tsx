import { CollectionMovie, MyContainer, Navbar } from '@/components';
import { capitalizeStr } from '@/utils/capitalize';
import { useRouter } from 'next/router';
import en from "../../locales/en/pages/watch/watch"
import ru from "../../locales/ru/pages/watch/watch"

const Collection = () => {
  const {locale} = useRouter();
  const t = locale === "en"? en : ru;
  const router = useRouter();
  const collection: string = `${router.query.collection || ''}`;
  const titleCollection = collection && collection !== 'random'
    ? capitalizeStr(collection)
    : `${t.compilations}`

  const navbar = [
    {title: `${t.main}`, href: '/'},
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
