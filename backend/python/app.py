import requests

from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.get("/orders")
def get_orders():
    r = requests.get("https://pasd-webshop-api.onrender.com/api/order/",
                     headers={"x-api-key": "hBqPEeyJNXexUZfgJRCZ"})
    return r.json()


@app.post("/deliveries")
def post_deliveries():
    data = request.get_json()
    print(data)
    r = requests.post("https://pasd-webshop-api.onrender.com/api/delivery",
                      headers={"x-api-key": "hBqPEeyJNXexUZfgJRCZ"}, json=data)

    res = r.json()

    return res, 204


if __name__ == '__main__':
    app.run()
