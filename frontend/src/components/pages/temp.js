export default 
{
    "personalizations":[
        {
            "to" : [
                {
                    "email" : email
                }
            ]
        },
    ],
    "from" : {
            "email" : "d.c.t.knap@student.rug.nl",
            "name" : "Disruptive Delivery"
    },
    "subject" : "Tracking ID",
    "content" : [
        {
            "type" : "text/plain",
            "value" : tracking_id
        }
    ],
    "reply_to" : {
            "email" : "d.c.t.knap@gmail.com",
            "name" : "Daniël Knap"
    }

}


