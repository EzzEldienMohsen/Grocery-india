import { Link } from 'react-router-dom';
import { footerLinks, logo, menuLinks, secondSocial } from '../assets';

const SecondFooter = () => {
  return (
    <div className="w-full flex  flex-col items-start justify-start my-4 pl-2 pr-10">
      <Link to="/">
        <img src={logo} alt="name" className="w-28 h-28" />
      </Link>
      <div className="flex  items-center md:justify-between justify-start w-full ">
        <div className="flex flex-col justify-start items-start w-2/5 px-6 mr-16 flex-nowrap">
          {menuLinks.map((link) => {
            return (
              <Link
                key={link.id}
                to={link.to}
                target="__blank"
                className="text-3xl text-white pt-2"
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col justify-start items-start w-1/5 mr-16">
          {secondSocial.map((social) => {
            return (
              <div
                key={social.id}
                className="flex justify-between items-center mb-3"
              >
                <social.logo className="w-6 pr-4 h-6 md:w-14 md:h-14 text-white" />
                <h1 className="capitalize md:text-2xl text-lg text-white">
                  {social.text}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="w-2/5 h-96 pic pt-16 ml-18"></div>
      </div>
      <p className="mt-2 opacity-65 text-white text-xl">
        © KiranaKart Technologies Private Limited
      </p>
      <div className="flex justify-start items-center  mb-10 mt-4">
        {footerLinks.map((link) => {
          return (
            <Link
              key={link.id}
              to={link.to}
              target="__blank"
              className="opacity-65 text-white text-xl mr-6 mb-2"
            >
              {link.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SecondFooter;
