import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { useRef, useState } from "react";
import MapSet from "../../styles/MapSet.styled";

const center = { lat: 53.219383, lng: 6.566502 };

const Delivery = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCa3J2cp1n4MT37i3SeXFAXs0Rn3lct7TQ",
    libraries: ["places"], // 'places' is required for Autocomplete (don't really need)
  });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <MapSet>
      <div className="map-box">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: true,
          }}
          onLoad={map => setMap(map)}
        >
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>

      <div className="botton-set">
        <div className="f-row">
          <Autocomplete>
            <input type="text" placeholder="Origin" ref={originRef} />
          </Autocomplete>
          <Autocomplete>
            <input type="text" placeholder="Destination" ref={destinationRef} />
          </Autocomplete>

          <div className="button-grp">
            <button
              className="calc-route clickable"
              type="submit"
              onClick={calculateRoute}
            >
              Calculate Route
            </button>
            <i
              className="clickable"
              onClick={() => {
                map.panTo(center);
                map.setZoom(15);
              }}
            >
              <FaLocationArrow />
            </i>
            <i className="clear-route clickable" onClick={clearRoute}>
              <FaTimes />
            </i>
          </div>
        </div>
        <div className="s-row">
          <div className="distance">Distance: {distance} </div>
          <div className="duration">Duration: {duration} </div>
        </div>
      </div>
    </MapSet>
  );
};

export default Delivery;
