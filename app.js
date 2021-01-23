const express = require('express');
const app = express();
const models = require('./database/models');

app.use(express.json());
app.use(express.urlencoded());
app.use('/api', require('./api'));

app.listen(8080, () => {
  console.log("Listening on port 8080");
})