import { Link } from 'react-router-dom';
import { logo, menuLinks } from '../assets';
import { FaBars } from 'react-icons/fa';

const SmallSubHeader = () => {
  return (
    <div className="w-full h-20 flex items-center justify-between  px-16 md:hidden">
      <img src={logo} alt="logo" className="w-24 h-24" />
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className=" m-1">
          <FaBars id="bars" className="w-16 h-16 text" />
        </div>
        <ul
          tabIndex={0}
          id="drop"
          className="dropdown-content z-[1] menu p-2 shadow-2xl  rounded-box w-80"
        >
          {menuLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  to={link.to}
                  target="__blank"
                  className="mt-2 text-white text-2xl"
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SmallSubHeader;
