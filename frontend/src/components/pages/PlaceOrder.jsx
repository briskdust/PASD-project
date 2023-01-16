import react from "react";
import sanityClient from "../../client";



const PlaceOrder = () => {

    const order = {
        _type : "temp",
        tracking_id : "15",
        email : "dctknap@gmail.com"

    }


    function sendMessage() {
        sanityClient.create(order)
    }

    return (
        <div><button onClick={sendMessage}>SEND!</button></div>
    );
}

export default PlaceOrder