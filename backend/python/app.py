import requests

from flask import Flask, request
from flask_cors import CORS

label_file = {'labelFile': open('Fragile.pdf', 'rb')}

app = Flask(__name__)
CORS(app)


@app.get("/orders")
def get_orders():
    r = requests.get("https://pasd-webshop-api.onrender.com/api/order/",
                     headers={"x-api-key": "hBqPEeyJNXexUZfgJRCZ"})
    return r.json()


@app.post("/delivery")
def post_delivery():
    data = request.get_json()

    r = requests.post("https://pasd-webshop-api.onrender.com/api/delivery/",
                      headers={"x-api-key": "hBqPEeyJNXexUZfgJRCZ",
                               "Content-Type": "application/json"},
                      json=data)

    print(r.status_code)

    if r.status_code == 200:
        return r.json()
    else:
        return "", r.status_code


@app.get("/label/<delivery_id>")
def add_label(delivery_id):
    url = f"https://pasd-webshop-api.onrender.com/api/label?delivery_id={delivery_id}"
    r = requests.post(url,
                      headers={"x-api-key": "hBqPEeyJNXexUZfgJRCZ"},
                      files=label_file)

    if r.status_code == 200:
        return "", 200
    else:
        return r.json()


@app.get("/pickup/<delivery_id>")
def pickup(delivery_id):
    url = f"https://pasd-webshop-api.onrender.com/api/delivery/{delivery_id}"
    r = requests.patch(url, headers={"x-api-key": "hBqPEeyJNXexUZfgJRCZ"},
                       json={"status": "TRN"})

    if r.status_code == 200:
        return "", 200
    else:
        return r.json()


@app.get("/delivered/<delivery_id>")
def delivered(delivery_id):
    url = f"https://pasd-webshop-api.onrender.com/api/delivery/{delivery_id}"
    r = requests.patch(url, headers={"x-api-key": "hBqPEeyJNXexUZfgJRCZ"},
                       json={"status": "DEL",
                             "actual_deliver_datetime": "2022-12-08T08:34:29.076Z"})

    if r.status_code == 200:
        return "", 200
    else:
        return r.json()


if __name__ == '__main__':
    app.run()
