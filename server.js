const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.post('/get', (req, res) => {
  return res.send("Hello, world!");
});

app.get('/', (req,res) => {
  return res.send("Coming soon...");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

