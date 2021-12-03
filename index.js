const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 3000;
const API_SERVICE_URL = 'https://newsapi.org/v2/';

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.get('/*', (req, res) => {
  axios
    .get(`${API_SERVICE_URL}/${req.url}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.send(error.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
