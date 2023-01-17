import React from "react";
import { useState } from 'react';
import Tracking from "../styles/Tracking.styled";
import sanityClient from "../client";


const TrackingPage = () => {

    const [trackingID, setTrackingID] = useState("");
    const [trackingStatus, setTrackingStatus] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        sanityClient.fetch(`*[_type == "order" && id == (*[_type == "delivery" && id ==${trackingID}]){order_id}]{}`)
        .then(data => {
            console.log(data)
        })
        // sanityClient.fetch(`*[_type == "delivery" && id == ${trackingID}] {status, expected_deliver_datetime}`)
        // .then(data => {
        //     console.log(data[0]["status"])
        //     setTrackingStatus(<p>{data[0]["status"]}</p>)
        // })
        // .catch(console.error)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <label>
                    Tracking ID:
                    <input
                        type="text"
                        value={trackingID}
                        onChange={(e) => setTrackingID(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
            {trackingStatus}
            
        </div>
    );
};

export default TrackingPage;