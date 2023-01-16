import { FaLocationArrow, FaTimes } from "react-icons/fa";
import sanityClient from "../../client";

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


  const [dataOrig, setOrig] = useState("");
  const [dataDest, setDest] = useState("");
  const [delivery, setDelivery] = useState("");
  const [location, setLocation] = useState({});
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [totalDistance, setTotalDistance] = useState("");
  const [dropOffDistance, setDropOffDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [totalDuration, setTotalDuration] = useState("");
  const [dropOffDuration, setDropOffDuration] = useState("");

  const idRef = useRef();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  

  async function calculateRoute() {
    if (idRef.current.value === "") {
      return;
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    await sanityClient.fetch(`*[_type == "delivery"&&id==${idRef.current.value}]`).then(data => {
      if (JSON.stringify(data) === "[]") {
        alert("This is not a valid delivery")
        return;
      }
      setDelivery(data[0])
    })
    if (delivery.status === "REJ") {
      alert("This is not a valid delivery")
      return;
    } else if (delivery.status === "EXP") {
      clearRoute();
      alert("This delivery is not yet ready for pickup.\n\nCheck back later.")
      return;
    }
    sanityClient.fetch(`*[_type == "order"&&id==${delivery.order_id}]`).then(data => {
      console.log(data[0].sender_info);
      setOrig(data[0].sender_info);
      setDest(data[0].receiver_info);
    })
  
    const results = await directionsService.route({
      origin: location,
      waypoints: [{location: dataOrig.zipcode}],
      destination: dataDest.zipcode,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setDropOffDistance(results.routes[0].legs[1].distance.text);
    setDropOffDuration(results.routes[0].legs[1].duration.text);
    const totalDistance = (results.routes[0].legs[0].distance.value + results.routes[0].legs[1].distance.value) / 1000;
    const totalDuration = results.routes[0].legs[0].duration.value + results.routes[0].legs[1].duration.value;
    setTotalDistance(totalDistance.toFixed(0) + " km");

    const hours = Math.floor(totalDuration / 3600);
    const minutes = Math.floor((totalDuration % 3600) / 60);
    const durationFormat = `${hours} hour ${minutes} mins`;
    setTotalDuration(durationFormat);
    }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    setDropOffDistance("");
    setDropOffDuration("");
    setTotalDistance("");
    setTotalDuration("");
    setDelivery("");
    idRef.current.value = "";
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
            <label htmlFor="delivery-id">Delivery ID: </label>
            <input id="delivery-id" type="text" placeholder="ID" ref={idRef} />
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
                map.panTo(location)
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
          <div className="distance">Pick-up Distance: {distance} </div>
          <div className="duration">Pick-up Duration: {duration} </div>
        </div>
        <div className="s-row">
          <div className="distance">Drop-off Distance: {dropOffDistance} </div>
          <div className="duration">Drop-off Duration: {dropOffDuration} </div>
        </div>
        <div className="s-row">
          <div className="distance">Total Distance: {totalDistance} </div>
          <div className="duration">Total Duration: {totalDuration} </div>
        </div>
        <div className="s-row">
          <div className="distance">Delivery Status: {delivery.status} </div>
        </div>
      </div>
    </MapSet>
  );
};

export default Delivery;
