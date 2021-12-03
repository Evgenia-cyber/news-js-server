const express = require('express');
const axios = require('axios');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_SERVICE_URL = 'https://newsapi.org/v2';

app.get('/*', (req, res) => {
  axios
    .get(`${API_SERVICE_URL}/${req.url}`)
    .then((response) => {
      res.send(response.data);
    })
    .cath((error) => {
      res.send(error.message);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
