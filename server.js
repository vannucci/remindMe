const express = require('express');
const mongoose = require('mongoose');

const accountsid = 'ACca9beca0739df92a37a93586a42f3566';
const authtoken = 'd57a4e8c105892f4e6fb9642c34bdbd2';
const port = process.env.PORT || 3000;


// mongoose.connect();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();

app.post('/sms', (req, res) => {
  var twiml = new twilio.twiml
  return res.send("Hello, world!");
});

app.get('/', (req,res) => {
  return res.send("Coming soon...");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

