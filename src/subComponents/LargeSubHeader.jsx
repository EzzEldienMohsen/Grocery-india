import { Link } from 'react-router-dom';
import { logo, menuLinks } from '../assets';

const LargeSubHeader = () => {
  return (
    <div className="md:flex hidden w-full h-auto justify-start items-center px-5">
      <img src={logo} alt="logo" className="w-36 h-3w-36 mr-16" />
      <ul className="flex justify-between items-center w-4/5">
        {menuLinks.map((link) => {
          return (
            <Link
              to={link.to}
              key={link.id}
              className="text-2xl text-white "
              target="__blank"
            >
              {link.text}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default LargeSubHeader;
