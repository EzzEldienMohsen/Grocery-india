import { useGlobalContext } from '../utils';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
const Error = () => {
  const { isClicked } = useGlobalContext();
  return (
    <div
      className={`${
        isClicked ? 'pt-[137px]' : 'pt-[233px]'
      } w-full flex justify-center items-center `}
    >
      <div
        className={`card  bg-white shadow-2xl w-[500px] flex justify-center items-center`}
      >
        <figure>
          <img
            src="https://www.zeptonow.com/_next/image?url=https%3A%2F%2Fcdn.zeptonow.com%2Fapp%2Fimages%2Funserviceable-graphic.png&w=640&q=75"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Sit Tight! We’re Coming Soon!</h2>
          <p className="mb-2">
            Our team is working tirelessly to bring 10 minute deliveries to your
            location
          </p>
          <div className="card-actions justify-center border-t-4  pt-3 border-t-slate-200">
            <div className="flex flex-col w-3/5 justify-center items-center">
              <h2 className="card-title mb-2">Follow Us</h2>
              <div className="flex justify-between items-center">
                <FaInstagram className="w-10 h-10 mr-8" id="bars" />
                <FaXTwitter className="w-10 h-10 mr-8" id="bars" />
                <CiFacebook className="w-10 h-10 mr-4" id="bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
