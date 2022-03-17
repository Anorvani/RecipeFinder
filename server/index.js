const express = require('express');
//const router = require('./router.js');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const axios = require('axios');
const cors = require('cors');
const app_key = process.env.APP_KEY;
const app_id = process.env.APP_ID;
const type = process.env.TYPE;
const BASE_URL = process.env.BASE_URL;


const baseUrl = 'https://api.edamam.com/api/recipes/v2'

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(express.static('client/dist'));
//app.use('/api', router)

app.get('/test', (req, res) => {
  let {q} = req.query
  // console.log(req.query)
  axios.get('https://api.edamam.com/api/recipes/v2', {params: {type: type, q: q, app_id: app_id, app_key: app_key}})
  .then((response) => {
    res.status(200).send(response.data.hits)
  })
  .catch((err) => res.status(404).send(err));
})

app.get('/test/type', (req, res) => {
  let {q, mealType} = req.query
  // console.log(req.query)
  axios.get('https://api.edamam.com/api/recipes/v2', {params: {type: type, q: q, app_id: app_id, app_key: app_key, mealType: mealType}})
  .then((response) => {
    res.status(200).send(response.data.hits)
  })
  .catch((err) => res.status(404).send(err));
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));