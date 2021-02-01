const express = require('express');
const app = express();

const PORT = 3000;


app.get('/', function (req, res) {
  res.send('hello world from example app!');
});

app.get('/login', function (req, res) {
  res.json({
    status: 200,
    message: 'Succesful login!',
  });
});

app.get('/user/:id', function (req, res) {
  const userId = req.params.id;
  res.json({
    status: 200,
    message: `Hello user [${userId}]`,
  });
});

app.get('/slow/:time', function (req, res) {
  const { time } = req.params;
  setTimeout(() => {
    res.json({
      status: 200,
      message: `I am a very slow endpoint`,
    });
  }, time);
});

app.get('/error', function (req, res) {
  res.status(500).json({
    status: 500,
    message: `I'm an error!`,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
