import { FaLocationArrow, FaTimes } from "react-icons/fa";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import sanityClient from "../../client";

import {
    useJsApiLoader,
    GoogleMap,
    Marker,
    Autocomplete,
    DirectionsRenderer,
} from "@react-google-maps/api";

import { useRef, useState } from "react";
import MapSet from "../../styles/MapSet.styled";

const center = { lat: 53.219383, lng: 6.566502 };

const DeliveryUser = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCa3J2cp1n4MT37i3SeXFAXs0Rn3lct7TQ",
        libraries: ["places"], // 'places' is required for Autocomplete (don't really need)
    });


    const [dataOrig, setOrig] = useState("");
    const [dataDest, setDest] = useState("");
    const [delivery, setDelivery] = useState("");
    const [map, setMap] = useState(/** @type google.maps.Map */(null));
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");

    const idRef = useRef();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }


    async function calculateRoute() {
        if (idRef.current.value === "") {
            return;
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService();
        // eslint-disable-next-line no-undef
        const geocoder = new google.maps.Geocoder();
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

        geocoder.geocode({ address: dataOrig.zipcode }, function (results, status) {
            if (status === 'OK') {
                const path = results[0].geometry.location;
                geocoder.geocode({ address: dataDest.zipcode }, function (results1, status) {
                    if (status === 'OK') {
                        const path1 = results1[0].geometry.location;
                        // eslint-disable-next-line no-undef
                        const bounds = new google.maps.LatLngBounds();
                        bounds.extend(path);
                        bounds.extend(path1);
                        const randomLatLng = bounds.getCenter();
                        const results = directionsService.route({
                            origin: randomLatLng,
                            destination: dataDest.zipcode,
                            // eslint-disable-next-line no-undef
                            travelMode: google.maps.TravelMode.DRIVING,
                        }).then(data => {
                            setDirectionsResponse(data);
                            setDistance(data.routes[0].legs[0].distance.text);
                            setDuration(data.routes[0].legs[0].duration.text);
                        });
                    }
                });
            }
        });
    }



    function clearRoute() {
        setDirectionsResponse(null);
        setDistance("");
        setDuration("");
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
                                // eslint-disable-next-line no-undef
                                const geocoder = new google.maps.Geocoder();
                                console.log(dataOrig.zipcode)
                                geocoder.geocode({ address: dataOrig.zipcode }, function (results, status) {
                                    if (status === 'OK') {
                                        map.panTo(results[0].geometry.location);
                                        map.setZoom(15);
                                    } else {
                                        console.log('Geocode was not successful for the following reason: ' + status);
                                    }
                                });
                            }}
                        >
                            <LocalShippingIcon />
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
                    <div className="distance">Delivery Status: {delivery.status} </div>
                </div>
            </div>
        </MapSet>
    );
};

export default DeliveryUser;
