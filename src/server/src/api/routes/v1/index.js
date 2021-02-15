const { Router } = require('express');
const auth = require('./auth');
const product = require('./product');
// const versionBase = 'v1';

const apiRoutes = () => {
  const app = Router();
  auth(app);
  product(app);
  return app;
};

module.exports = apiRoutes;
