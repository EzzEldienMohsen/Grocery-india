import { Link } from 'react-router-dom';
import { greenPic, purplePic } from '../assets';
import { useGlobalContext } from '../utils';

const SecondaryMainHeader = () => {
  const { isClicked } = useGlobalContext();
  return (
    <div className="w-full flex flex-col z-[-5]">
      <div
        className={`w-full flex  flex-col items-center justify-center ${
          isClicked ? 'pt-[127px]' : 'pt-[223px]'
        }`}
      >
        <div
          id="delivery-time"
          className="flex justify-center flex-col items-center font-lato text-white mb-4 w-full h-32"
        >
          <p className="text-xl text-white font-black ">Delivery in</p>
          <h3 className="text-white font-black text-3xl underline uppercase">
            9 mins
          </h3>
        </div>
        <Link
          to={'/products'}
          className="w-full bg-transparent h-auto flex justify-center items-center mb-4"
        >
          <img src={greenPic} alt="pic" className="w-4/5 h-auto" />
        </Link>
        <Link
          to={'/'}
          className="w-full bg-transparent h-auto flex justify-center items-center"
        >
          <img src={purplePic} alt="pic" className="w-4/5 h-auto" />
        </Link>
      </div>
    </div>
  );
};

export default SecondaryMainHeader;
