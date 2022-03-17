var express = require('express');
var router = express.Router();
const axios = require('axios');
const {getRecipes} = require('./controller.js');

router.route('/recipe')
  .get(getRecipes)

  module.exports = router;