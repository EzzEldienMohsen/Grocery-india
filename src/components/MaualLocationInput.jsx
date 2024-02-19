import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../utils';

const MaualLocationInput = () => {
  const { setIsChecked, setIsDropDown, setIsHidden } = useGlobalContext();
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
      setIsHidden(() => false);
    } else {
      setIsDropDown(() => false);

      setIsHidden(() => true);
      return navigate('/error');
    }
  }

  function error() {
    console.log('Unable to retrieve your location');
  }
  const autoCompleteRef = React.useRef();
  const inputRef = React.useRef();
  const options = {
    componentRestrictions: { country: 'IN' },
    fields: ['address_components', 'geometry', 'icon', 'name'],
    types: ['establishment'],
  };
  React.useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    autoCompleteRef.current.addListener('place_changed', async function () {
      const place = await autoCompleteRef.current.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      if (
        lat <= 37.10472222222222 &&
        lat >= 8.071388888888889 &&
        lng <= 97.43305555555555 &&
        lng >= 68.13305555555554
      ) {
        setIsChecked(() => true);
        setIsDropDown(() => false);
        setIsHidden(() => false);
        navigate('/');
      } else {
        setIsDropDown(() => false);
        setIsHidden(() => true);
        return navigate('/error');
      }
    });
  }, []);
  return (
    <div className="w-full h-[1000px] flex justify-center items-center ">
      <div className="md:w-[800px] lg:w-[800px] w-auto  rounded-md bg-white shadow-2xl z-10 flex p-4 pt-2 flex-col justify-center items-center">
        <div className="w-full border-b-2 border-black flex justify-center items-center p-2 mb-3">
          <h1 className="text-3xl text-black tracking-wider font-bold ">
            Your Location
          </h1>
        </div>
        <input
          ref={inputRef}
          type="search"
          placeholder="search"
          className="w-full p-2 border-black rounded-md input-bordered input mb-2"
        />
        <div className="mb-10 flex justify-between items-center p-4 w-full">
          <div className="flex flex-col w-3/5 justify-start items-start">
            <h2 id="bars" className="text-xl tracking-wide font-semibold">
              Current Location
            </h2>
            <h3 className="text-lg text-black opacity-50 mt-2">
              Enable your current location for better services
            </h3>
          </div>
          <button
            onClick={handleLocationClick}
            className="btn  w-40 btn-square rounded-md auto-button"
          >
            Enable
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaualLocationInput;
