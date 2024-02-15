import GoogleMapReact from 'google-map-react';
import '../map.css';
import LocationPin from './LocationPin';
import React from 'react';
const key = import.meta.env.MAPS_API_KEY;
const TheMap = () => {
  const [location, setLocation] = React.useState(null);
  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Geolocation not supported');
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error() {
    console.log('Unable to retrieve your location');
  }
  if (!location) {
    return (
      <div className="w-full h-40 flex justify-center items-center">
        <button
          className="bg-pink-700 text-white rounded-md w-40 h-20 p-4"
          onClick={handleLocationClick}
        >
          grant
        </button>
      </div>
    );
  } else {
    return (
      <div className="map">
        <h2 className="map-h2">Come Visit Us At Our Campus</h2>

        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: key,
            }}
            defaultCenter={location}
            defaultZoom={5}
            className="w-full h-full bg-black"
          >
            <LocationPin />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
};

export default TheMap;
