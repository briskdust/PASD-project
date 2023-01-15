import ReactDOM from "react";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");

const PlaceOrder = () => {

    const message = {
        to: 'dctknap@gmail.com',
        from: 'test@test.com',
        subject: 'test',
        html: `
        <p><strong>Name:</strong>Bob</p>
        <p>hello world</p>`
    }

    sgMail.send(message).catch((error) => {
        console.log("Error: ", error)
    })


    return (
        <div/>
    );
}

export default PlaceOrder