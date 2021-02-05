require('dotenv').config();
const routes = require('express').Router();


routes.get('/', (req, res) => {
  res.status(200).send('200 OK');
});

module.exports = routes;