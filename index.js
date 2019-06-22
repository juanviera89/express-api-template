const express = require('express');
const rfr = require('rfr');
const args = rfr('libs/args');
let app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
const PORT = parseInt( args.get('PORT')) || 3000;
app.listen(PORT);
console.info(`Server listening on port ${PORT}`);
if ((process.env.NODE_ENV || 'local').toUpperCase() != 'TEST') module.exports = app;