const express = require('express');

const app = express();

// CORS error(different hosts for front and back server) overcomed by adding this headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
})

// middleware express function
app.use('/api/posts', (req, res, next) => {
  const posts = [
    { id: '4asfo121e', title: '1st Title', content: 'This is coming from the server' },
    { id: 'sdf13eesa', title: '2nd Title', content: 'This is coming from the server' },
    { id: '3sfdfsdfv', title: '3rd Title', content: 'This is coming from the server' },
  ];

  res.status(200).json({
    message: 'Posts fetched succesfully!',
    posts: posts,
  });
})

// exporting hole expressApp to our server-backend host.
module.exports = app;