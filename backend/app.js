const express = require('express');

const app = express();

// middleware express function
app.use((req, res, next) => {
  console.log('first middleware!');
  next();
})

app.use((req, res, next) => {
  res.send('Hello from express');
})

// exporting hole expressApp to our server-backend host.
module.exports = app;