const routes = require('express').Router();

routes.get('/', (req, res, next) => {
  res.json('Mary Poppins');
});

module.exports = routes;