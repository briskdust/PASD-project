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

    const message = {
        to: 'dctknap@gmail.com',
        from: 'test@test.com',
        subject: 'test',
        html: `
        <p><strong>Name:</strong>Bob</p>
        <p>hello world</p>`
    }

    


    return (
        <div><button onClick={sendMessage}>SEND!</button></div>
    );
}

export default PlaceOrder