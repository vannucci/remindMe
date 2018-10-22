const express = require('express');
const mongoose = require('mongoose');

const accountsid = 'ACca9beca0739df92a37a93586a42f3566';
const authtoken = 'd57a4e8c105892f4e6fb9642c34bdbd2';
const port = process.env.PORT || 3000;

const client = require('twilio')(accountsid,authtoken);

client.messages
  .create({
    body: "RemindMe! is up and running",
    from: "+12016251701",
    to: "+17327786522"
  })
  .then(message => console.log(message.sid))
  .done();

// mongoose.connect();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('It\'s not the Volvo you were expecting...<3');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.get('/', (req,res) => {
  return res.send("Coming soon...");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

