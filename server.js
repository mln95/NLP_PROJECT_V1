
// require express to run the server
const path = require('path');
const express = require("express");
const port = 3000;
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');

// instance of the app
const app = express();

// require dependencies

const cors = require("cors");
const bodyParser = require("body-parser");

// cross origin allowance

app.use(cors());

// middleware

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

//main project folder
app.use(express.static("dist"));

// server listening

app.listen(port, () => {
    console.log(`The server is working on port number ${port}`);
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname + '/dist/index.html'))
// });



// get the url send by the client
const url_api = "https://api.meaningcloud.com/sentiment-2.1";
const key_api = process.env.KEY_API;
app.post("/server", async (req, res) => {
    // url_from_client = req.body.user_url;
    // res.send("The data has been received");
    const response = await fetch(`${url_api}?key=${key_api}&lang=fr&url=${req.body.user_url}`);
    try {
        const json = await response.json();
        // app.get('/client_data', (req,res)=>{
        //     res.send(json);
        // })
        res.send(json);
    } catch (err) {
        console.error("error");
    }
});