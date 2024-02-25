import { useGlobalContext } from '../utils';
import Products from './Products';

const Landing = () => {
  const { setIsHidden } = useGlobalContext();
  setIsHidden(() => false);
  return (
    <div>
      <Products />
    </div>
  );
};

export default Landing;
