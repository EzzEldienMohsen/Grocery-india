import { Outlet } from 'react-router-dom';
import { SecondFooter, SecondHeader } from '../components';

const SecondHome = () => {
  return (
    <div id="second-home" className="w-full h-auto">
      <SecondHeader />
      <div className="w-full" id="second-outlet">
        <Outlet />
      </div>
      <SecondFooter />
    </div>
  );
};

export default SecondHome;
