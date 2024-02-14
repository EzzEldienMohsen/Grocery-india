import { Link } from 'react-router-dom';
import { emailLogo } from '../assets';

const SecondLanding = () => {
  return (
    <div className="flex flex-col w-full h-auto justify-center items-center px-10">
      <h3 className="-mt-24 underline text-white font-extrabold text-4xl capitalize">
        customer support
      </h3>
      <h1 className="text-white font-bold text-6xl my-16">
        We are here to help.
      </h1>
      <p className="text-3xl font-semibold text-white ">
        Have an issue with an order or feedback for us? Our support team is here
        to help you from 6 am to 3 am.
      </p>
      <div className="flex w-full flex-col justify-center items-center md:flex-row md:justify-between md:w-4/5 md:mr-10 md:px-10 mt-10">
        <div className="flex flex-col justify-center mt-10 items-center w-full md:w-1/2 md:mr-10 md:px-10">
          <Link className="flex justify-between border-slate-50 items-center flex-nowrap">
            <img src={emailLogo} alt="email" className="w-8 h-8 rounded mr-5" />
            <h2 className="text-2xl  md:text-3xl text-white font-semibold capitalize">
              order related query
            </h2>
          </Link>
          <p className="text-2xl my-8 border-t-2 pt-4 border-slate-50 text-white font-semibold capitalize">
            Connect with customer support on the app
          </p>
        </div>
        <div className="flex flex-col mt-10 justify-center items-center w-full md:w-1/2 md:mr-10 md:px-16">
          <Link className="flex justify-between  items-center flex-nowrap pr-4">
            <img src={emailLogo} alt="email" className="w-8 h-8 rounded mr-5" />
            <h2 className="text-2xl  md:text-3xl text-white font-semibold capitalize">
              for anything else
            </h2>
          </Link>
          <p className="text-2xl my-8 border-t-2 pt-4 border-slate-50 text-white font-semibold capitalize">
            Send us an email to support@zeptonow.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondLanding;
