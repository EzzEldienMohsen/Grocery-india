import { useGlobalContext } from '../utils';
import Products from './Products';

const Landing = () => {
  const { setIsHidden } = useGlobalContext();
  setIsHidden(() => false);
  return (
    <div
      className={` flex-col flex justify-center items-center lg:w-full pt-10`}
    >
      <Products />
    </div>
  );
};

export default Landing;
