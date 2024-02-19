/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../utils';

const LocationCheck = ({ text }) => {
  const { setIsChecked, isDropDown, isChecked, setIsDropDown, setIsHidden } =
    useGlobalContext();
  const navigate = useNavigate();
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  }

  function success(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    if (
      lat <= 37.10472222222222 &&
      lat >= 8.071388888888889 &&
      lng <= 97.43305555555555 &&
      lng >= 68.13305555555554
    ) {
      setIsChecked(() => true);
      setIsDropDown(() => false);
    } else {
      setIsDropDown(() => false);

      setIsHidden(() => true);
      return navigate('/error');
    }
  }

  function error() {
    console.log('Unable to retrieve your location');
  }
  return (
    <div className=" w-[140px] z-[100] mr-2 rounded-lg ml-5 h-[50px] bg-white text-black">
      <div className={`dropdown ${isDropDown ? 'dropdown-open' : ''} `}>
        <div
          tabIndex={0}
          role="button"
          className="w-inherit pt-3 pl-3 flex justify-center items-center mb-4"
          onClick={() => setIsDropDown(() => true)}
        >
          <>{text}</>
        </div>
        <div
          tabIndex={0}
          className="dropdown-content z-[100] card card-compact w-[800px] p-2 shadow bg-white "
        >
          <div className="card-body">
            <h3 className="card-title">
              Please provide your delivery location to see products at nearby
              store
            </h3>
            <div className="w-inherit flex justify-between items-center mt-4">
              <Link
                to="/manual"
                className="btn w-2/5 btn-square rounded-md manual-button text-xl"
                onClick={() => setIsDropDown(() => false)}
              >
                insert manually
              </Link>

              <button
                onClick={handleLocationClick}
                className="btn  w-2/5 btn-square rounded-md auto-button text-xl"
              >
                Grant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCheck;
