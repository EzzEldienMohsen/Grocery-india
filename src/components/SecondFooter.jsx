import { Link } from 'react-router-dom';
import { footerLinks, logo, menuLinks, secondSocial } from '../assets';

const SecondFooter = () => {
  return (
    <div className="w-3/5 flex flex-col items-start justify-start my-4 pl-2 pr-10">
      <Link to="/">
        <img src={logo} alt="name" className="w-28 h-28" />
      </Link>
      <div className="grid grid-cols-2 justify-start w-full md:w-4/5">
        <div className="flex flex-col justify-start items-start px-6 mr-16 flex-nowrap">
          {menuLinks.map((link) => {
            return (
              <Link
                key={link.id}
                to={link.to}
                target="__blank"
                className="text-2xl text-white pt-2"
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col justify-start items-start">
          {secondSocial.map((social) => {
            return (
              <div key={social.id} className="flex justify-between items-start">
                <social.logo className="w-12 pr-4 h-12 md:w-16 md:h-16 text-white" />
                <h1 className="capitalize md:text-3xl text-xl text-white">
                  {social.text}
                </h1>
              </div>
            );
          })}
        </div>
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
