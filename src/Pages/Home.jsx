/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import { Footer, Header, SecondaryMainHeader } from '../components';
import { useGlobalContext } from '../utils';

const Home = () => {
  const { isHidden, isChecked } = useGlobalContext();
  return (
    <div className="w-full h-auto bg-slate-50">
      <div
        className={`z-[20] w-full h-[1973px] bg-transparent opacity-35 ${
          isChecked ? 'hidden' : 'block'
        }`}
        disabled
        onClick={(e) => e.preventDefault()}
      >
        <Header />
        <SecondaryMainHeader />
        <div className="outlet">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
