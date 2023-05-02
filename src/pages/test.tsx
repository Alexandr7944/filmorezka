import { Navbar } from '@/components';
import { useState } from 'react';
import { IMovie } from '@/interface/IMovie';




const Test = () => {
  const [state, setState] = useState<IMovie[] | undefined>([]);
  
  // useMemo(() => {
  //   Fetching.getAll('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1')
  //     .then((js: any) => setState(js.films));
  // }, []);
  
  return (
    <div>
      <Navbar link={[{title: 'Главная', href: '/'}, {title: 'TEST'}]}/>
      
    </div>
  )
}

export default Test