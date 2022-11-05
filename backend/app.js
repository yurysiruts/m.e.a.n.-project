const express = require('express');
const bodyParses = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

// from created mongoDB database
mongoose.connect('mongodb+srv://hankje:zG7VbJsOctC1S3Gt@cluster0.ba9wtd6.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log('connected to DB');
  })
  .catch(() => {
    console.log('connection failed!');
  });

app.use(bodyParses.json());
app.use(bodyParses.urlencoded({ extended: false }));

// CORS error(different hosts for front and back server) overcomed by adding this headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
})

app.post('/api/posts', (req, res, next) => {
  // const newPost = req.body;
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  newPost.save();
  res.status(201).json({
    message: 'Post added successfully!'
  });
})

// middleware express function
app.get('/api/posts', (req, res, next) => {   
    Post.find()
      .then((docs) => {
        res.status(200).json({
          message: 'Posts fetched succesfully!',
          posts: docs,
        });
      });
})

// exporting hole expressApp to our server-backend host.
module.exports = app;