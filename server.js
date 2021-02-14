const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// CORS configuration
// var corsOptions = {
//   origin: "http://localhost:3001"
// };

var corsConfig = require('./api/config/corsConfig').corsOptions;

// express CORS definition
app.use(cors(corsConfig));

// parse json requests using body-parser
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded requests using bodyparser
app.use(bodyParser.urlencoded({ extended: true}));

// index route
app.get("/", (req, res) => {
	res.json({ message: "index test page", sucess: true});
});


// setup server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`** server running on ${PORT} **`);
});

// connect to mongo
let connectMongo = require("./api/config/connection");

connectMongo().catch(console.dir);
