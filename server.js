const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false}));
require('./routing/routes')(app);



app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

