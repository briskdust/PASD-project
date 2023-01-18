import { FaTimes } from "react-icons/fa";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import sanityClient from "../../client";

import {
    useJsApiLoader,
    GoogleMap,
    DirectionsRenderer,
} from "@react-google-maps/api";

import { useRef, useState } from "react";
import MapSet from "../../styles/MapSet.styled";

const center = { lat: 52.4326, lng: 5.3913 };

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
    const [randomLatLng, setRandomLatLng] = useState("");

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
        var database;
        var orderId;
        if (idRef.current.value.toString().length < 10) {
            database = "delivery";
            let prom1 = new Promise(function(res1) {
                sanityClient
                .fetch(`*[_type == "delivery"&&id==${idRef.current.value}]`)
                .then(data => {
                    if (JSON.stringify(data) === "[]") {
                        alert("This is not a valid delivery");
                        return;
                    }
                    setDelivery(data[0]);
                    if (delivery.status === "REJ") {
                        alert("This is not a valid delivery");
                        return;
                    } else if (delivery.status === "EXP") {
                        clearRoute();
                        alert(
                            "This delivery is not yet ready for pickup.\n\nCheck back later."
                        );
                        return;
                    }
                    res1(data[0].order_id);
                });
            });
            sanityClient
                .fetch(`*[_type == "order"&&id==${await prom1}]`)
                .then(data => {
                    setOrig(data[0].sender_info);
                    setDest(data[0].receiver_info);
                });
        } else {
            database = "personal"
            orderId = idRef.current.value;
            sanityClient
                .fetch(`*[_type == "${database}"&&id=="${orderId}"]`)
                .then(data => {
                    setOrig(data[0].sender_info);
                    setDest(data[0].receiver_info);
                });
        }



        geocoder.geocode(
            { address: dataOrig.zipcode },
            function (results, status) {
                if (status === "OK") {
                    const path = results[0].geometry.location;
                    geocoder.geocode(
                        { address: dataDest.zipcode },
                        function (results1, status) {
                            if (status === "OK") {
                                const path1 = results1[0].geometry.location;
                                // eslint-disable-next-line no-undef
                                const bounds = new google.maps.LatLngBounds();
                                bounds.extend(path);
                                bounds.extend(path1);
                                const localRandomLatLng = bounds.getCenter();
                                setRandomLatLng(bounds.getCenter());
                                directionsService
                                    .route({
                                        origin: localRandomLatLng,
                                        destination: dataDest.zipcode,
                                        // eslint-disable-next-line no-undef
                                        travelMode: google.maps.TravelMode.DRIVING,
                                    })
                                    .then(data => {
                                        setDirectionsResponse(data);
                                        setDistance(data.routes[0].legs[0].distance.text);
                                        setDuration(data.routes[0].legs[0].duration.text);
                                    });
                            }
                        }
                    );
                }
            }
        );
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
                    zoom={7.55}
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
                                map.panTo(randomLatLng);
                                map.setZoom(13);
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
