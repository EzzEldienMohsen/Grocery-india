import { useGlobalContext } from '../utils';
import Products from './Products';

const Landing = () => {
  const { setIsHidden, isClicked } = useGlobalContext();
  setIsHidden(() => false);
  return (
    <div
      className={` flex-col flex justify-center items-center mt-4 lg:w-full ${
        isClicked ? 'pt-[137px]' : 'pt-[233px]'
      }`}
    >
      <Products />
    </div>
  );
};

export default Landing;
