import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { MyContainer, Navbar } from '@/components';

const Home = () => {
  const navbar = [{title: 'Home'}]

  return (
    <>
      <MyContainer>
        <Navbar link={navbar} />
        Главная
      </MyContainer>
    </>
  )
}

export default Home;
