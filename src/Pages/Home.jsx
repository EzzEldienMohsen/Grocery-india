import { Outlet } from 'react-router-dom';
import { Header } from '../components';

const Home = () => {
  return (
    <div className="w-full h-auto bg-slate-50">
      <Header />
      <Outlet />;
    </div>
  );
};

export default Home;
