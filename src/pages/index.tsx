import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { Footer, MyContainer, Navbar } from '@/components';

const Home = () => {
  const navbar = [{title: 'Home'}];

  return (
    <MyContainer>
      <Navbar link={navbar} />
      <div className="container">
        <h1>Главная</h1>
      </div>
      <Footer />
    </MyContainer>
  )
}

export default Home;
