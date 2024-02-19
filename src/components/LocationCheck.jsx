import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../utils';

const LocationCheck = ({ text }) => {
  const { setIsChecked, isDropDown, setIsDropDown, setIsHidden } =
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
    <div className="w-[180px] rounded-lg ml-10 h-[50px] bg-white text-black">
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
          className="dropdown-content z-[1] card card-compact w-96 p-2 shadow bg-white "
        >
          <div className="card-body">
            <h3 className="card-title">
              Please provide your delivery location to see products at nearby
              store
            </h3>
            <div className="w-inherit flex justify-between items-center">
              <Link
                to="/manual"
                className="btn w-40 btn-square rounded-md manual-button"
                onClick={() => setIsDropDown(() => false)}
              >
                insert manually
              </Link>

              <button
                onClick={handleLocationClick}
                className="btn  w-40 btn-square rounded-md auto-button"
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
