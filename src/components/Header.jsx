import React from 'react';
import { Link, redirect } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoBagOutline } from 'react-icons/io5';
import { greenPic, image, logo, purplePic } from '../assets';

const Header = () => {
  const [fetching, setFetching] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className="w-full flex flex-col ">
      <div className="w-full flex flex-col top-0 left-0 fixed z-[102]">
        <div
          className={`bg-slate-100 w-full py-4 px-8 flex justify-between items-center ${
            clicked ? 'hidden' : 'blocked'
          }`}
        >
          <img src={image} alt="logo" className="w-16 h-16 z-[102]" />
          <h1 className="text-4xl bold capitalize">adv placement</h1>
          <button
            className="bg-red-600 text-white w-16 h-10 rounded-md"
            onClick={() => {
              setClicked(true);
              return redirect('/');
            }}
          >
            App
          </button>
        </div>
        <div className="bg-indigo-800 flex h-32 justify-center items-center flex-col w-full px-8 py-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex justify-between items-center w-full lg:hidden ">
            <h1 className="text-xl">location function</h1>
            <button className="bg-transparent text-white w-16 h-10">
              <CgProfile className="bg-transparent text-white w-16 h-10" />
            </button>
          </div>
          <Link to="/" className="hidden lg:block lg:w-20 mr-2">
            <img src={logo} alt="name" />
          </Link>
          <div className="bg-current w-1 h-4/5 rounded-lg mr-2 hidden lg:block" />
          <h1 className="text-xl hidden lg:block mr-1">location function</h1>
          <input
            type="search"
            placeholder="search"
            name="search"
            className="w-full p-2 my-2 rounded lg:w-3/5 mt-2"
          />
          <Link
            to="/login"
            className="hidden lg:block lg:mr-2 text-white text-xl"
          >
            log in
          </Link>
          <Link
            to="/cart"
            className="bg-red-600 text-white  rounded-md hidden p-2 lg:flex lg:w-32 lg:h-14 lg:justify-between lg:items-center "
          >
            <IoBagOutline className=" text-white lg:w-1/2  h-full bg-transparent" />
            <h1 className="text-2xl text-white mr-2">Cart</h1>
          </Link>
        </div>
      </div>
      <div className=" w-full flex flex-col items-center justify-center pt-[223px]">
        <div
          id="delivery-time"
          className="flex justify-center flex-col items-center font-lato text-indigo-900 mb-4 w-full h-32"
        >
          <p className="text-xl text-indigo-950 font-black ">Delivery in</p>
          <h3 className="text-indigo-900 font-black text-3xl underline uppercase">
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

export default Header;
