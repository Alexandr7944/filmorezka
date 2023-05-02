import Head from 'next/head';
import { Header } from '../Header'; 
import { Footer } from '../Footer';

type MyContainerProps = {
  children: React.ReactNode,
  keywords?: HTMLMetaElement
}

const MyContainer: React.FC<MyContainerProps> = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta name='keywords' content={'кино, сериалы, ' + keywords }/>
        <title>Фильморезка</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MyContainer