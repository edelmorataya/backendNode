let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());

let port = 3001;

let flowers = [
    {name: 'Orchid', color: "Pink", price: '10.00', code: 123002, image: 'img/f1.jpg', discount: "1.00" },
    {name: 'Marguerite', color: "Yellow", price: '15.00', code: 14402, image: 'img/f2.jpg', discount: "0.50" },
    {name: 'Paradise flower', color: "Orange", price: '2.00', code: 56004, image: 'img/f3.jpg', discount: "0.30" }
];

app.get('/api/flowers', (req, res) => {
    if (flowers.length > 0) {
        let response = { "status": "ok", "message": "Products consulted successfully", "error": false, "data": flowers };
        sendResponse({ method: "GET /api/flower", response: response, httpCode: 200, res: res });
    } else {
        let response = { "status": "ok", "message": "empty", "error": false, "data": undefined };
        sendResponse({ method: "GET /api/flower", response: response, httpCode: 204, res: res });
    }
});