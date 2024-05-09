/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
const  path = require('path')





// Require Express to run server and routes
const express= require('express');
const request = require('request');
const apiResponse = require('express-api-response')
const http = require('http')

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors= require('cors');
app.use(cors());

// Initialize the main project folder
// app.use(express.static('website'));   
app.use(express.static('dist'))
app.use(express.json())
app.use(express.json({limit: '10mb'}))

/* Setup Server
local server running and producing feedback thru working call back function */
const port= 8081;
const server = app.listen(port, listening);
function listening(){
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

app.get('/', function (req, res) {
  res.sendFile('dist/index.html') 
  // res.sendFile(path.resolve('src/client/views/index.html'))
})
