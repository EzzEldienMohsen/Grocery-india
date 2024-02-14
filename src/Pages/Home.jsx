import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

const Home = () => {
  return (
    <div className="w-full h-auto bg-slate-50">
      <Header />
      <div className="outlet">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
