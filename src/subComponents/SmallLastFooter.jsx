import { Link } from 'react-router-dom';
import { logo, pagesLinks } from '../assets';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { FaApple } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

const SmallLastFooter = () => {
  return (
    <div className="w-full bg-slate-50 flex flex-col mt-4 mb-8 md:hidden ">
      <div className="grid grid-cols-2 justify-center items-center mb-2 ">
        {pagesLinks.map((link) => {
          return (
            <Link
              target="__blank"
              to={link.to}
              key={link.id}
              className="text-black text-2xl font-semibold m-2"
            >
              {link.text}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col justify-start items-start mt-2 bg-inherit w-full mb-4 border-b-2 border">
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
      <div className="mt-2 w-full flex flex-col justify-start items-start bg-slate-50 ">
        <img src={logo} alt="logo" className="w-1/2 mb-2 h-auto" />
        <div className="flex justify-between w-3/5 items-center">
          <FaInstagram className="w-12 h-12" />
          <FaXTwitter className="w-12 h-12" />
          <CiFacebook className="w-12 h-12" />
          <FaLinkedin className="w-12 h-12" />
        </div>
        <p className="mt-2 mb-8 bg-slate-50 opacity-65 text-black">
          © KiranaKart Technologies Private Limited
        </p>
      </div>
    </div>
  );
};

export default SmallLastFooter;
