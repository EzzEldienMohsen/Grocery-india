import { TheMap } from '../components';
import { useGlobalContext } from '../utils';

const Landing = () => {
  const { setIsHidden } = useGlobalContext();
  setIsHidden(() => false);
  return (
    <div className="text-4xl flex justify-center items-center  lg:w-full">
      <TheMap />
    </div>
  );
};

export default Landing;
