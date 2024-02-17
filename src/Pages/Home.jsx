import { Outlet } from 'react-router-dom';
import { Footer, Header, SecondaryMainHeader } from '../components';
import { useGlobalContext } from '../utils';

const Home = () => {
  const { isHidden } = useGlobalContext();
  return (
    <div className="w-full h-auto bg-slate-50">
      <Header />
      {isHidden ? <></> : <SecondaryMainHeader />}

      <div className="outlet">
        <Outlet />
        {isHidden ? <></> : <Footer />}
      </div>
    </div>
  );
};

export default Home;
