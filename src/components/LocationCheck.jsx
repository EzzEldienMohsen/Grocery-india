import React from 'react';
import { Link } from 'react-router-dom';

const LocationCheck = ({ text }) => {
  const [location, setLocation] = React.useState(null);
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
    setLocation({ lat, lng });
    console.log(location);
  }

  function error() {
    console.log('Unable to retrieve your location');
  }
  return (
    <div className="w-inherit bg-white text-black">
      <div className="dropdown dropdown-open">
        <div
          tabIndex={0}
          role="button"
          className="w-inherit p-4 flex justify-center items-center"
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
                to="/location-search"
                className="btn w-40 btn-square rounded-md manual-button"
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
