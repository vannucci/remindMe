const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false}));
require('./routing/routes')(app);

// const accountsid = 'ACca9beca0739df92a37a93586a42f3566';
// const authtoken = 'd57a4e8c105892f4e6fb9642c34bdbd2';


app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

