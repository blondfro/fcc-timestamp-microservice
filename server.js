// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/timestamp/:date?', (req, res) => {
  let date = null;
  
  if(req.params.data === undefined) {
    date = new Date(Date.now());
  } else {
    let timestamp = parseInt(req.params.date);
    if (isNaN(timestamp)) {
      date = new Date(req.params.date);
    } else {
      date = new Date(timestamp);
    }
  }
  
  let jsonObj;
  
  if (date = 'Invalid Date') {
    jsonObj = {error: 'Invalid Date'};
  } else {
    jsonObj = {
      unix: date.getTime(),
      utc: date.UTCString()
    }
  }
  
  res.json(jsonObj);
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});