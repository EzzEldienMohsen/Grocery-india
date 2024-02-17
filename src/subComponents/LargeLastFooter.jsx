import { Link } from 'react-router-dom';
import { logo, pagesLinks } from '../assets';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const LargeLastFooter = () => {
  return (
    <div className="w-full  hidden mt-4 pb-10 md:flex px-10 ">
      <div className="mt-2 w-1/4 flex flex-col justify-start items-start bg-slate-50 mr-2">
        <img src={logo} alt="logo" className="w-32 h-auto mb-4" />
        <div className="flex justify-between w-3/5 items-center">
          <FaInstagram className="w-6 h-6 mr-2" />
          <FaXTwitter className="w-6 h-6 mr-2" />
          <CiFacebook className="w-6 h-6 mr-2" />
          <FaLinkedin className="w-6 h-6 mr-2" />
        </div>
        <p className="mt-2  bg-slate-50 opacity-65 text-black">
          © KiranaKart Technologies Private Limited
        </p>
      </div>
      <div className="grid grid-cols-2 w-1/2 h-auto justify-center items-center ">
        {pagesLinks.map((link) => {
          return (
            <Link
              target="__blank"
              to={link.to}
              key={link.id}
              className="text-black text-lg font-semibold m-2"
            >
              {link.text}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center bg-inherit w-1/4 ">
        <h2 className="mr-2 text-2xl text-black">Download App</h2>
        <div className="flex flex-col justify-center items-center w-full mb-2">
          <Link
            to="/"
            className="w-5/6 bg-white text-black flex justify-center items-center rounded-md p-1 m-1 mt-2"
          >
            <IoLogoGooglePlaystore className="text-lime-500 bg-transparent mr-6" />
            <h3>Get it on Play Store</h3>
          </Link>
          <Link
            to="/"
            className="w-5/6 bg-white text-black flex justify-center items-center rounded-md p-1 m-1 mt-2"
          >
            <FaApple className="text-black bg-transparent mr-6" />
            <h3>Get it on App Store</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LargeLastFooter;
