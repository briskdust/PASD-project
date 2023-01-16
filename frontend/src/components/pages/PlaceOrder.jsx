import react from "react";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const PlaceOrder = () => {

    function sendMessage() {
        sgMail.send(message).catch((error) => {
            console.log("Error: ", error)
        })
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