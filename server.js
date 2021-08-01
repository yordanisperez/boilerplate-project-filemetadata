var express = require('express');
var cors = require('cors');
require('dotenv').config();
const routes = require('./routes/routes');

var app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(routes({}))




const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
