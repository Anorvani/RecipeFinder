const axios = require('axios');
require('dotenv').config();
const APP_KEY = process.env.APP_KEY;
const APP_ID = process.env.APP_ID;
const TYPE = process.env.TYPE;
const BASE_URL = process.env.BASE_URL;

module.exports = {
  getRecipes: (req, res) => {
    let query = 'chicken'
    axios.get(`${BASE_URL}/api/recipe`, {params: {app_key: APP_KEY, app_id: APP_ID, type: TYPE, q: query}})
    console.log(APP_KEY)
    .then((response) => {
      console.log(response.data)
      res.status(200).send(response.data)
    })
    .catch((err) => res.status(404).send(err.message));
  }
}
