const { Router } = require('express');
const auth = require('./auth');
// const versionBase = 'v1';

const apiRoutes = () => {
  const app = Router();
  auth(app);

  return app;
};

module.exports = apiRoutes;
