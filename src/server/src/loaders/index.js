const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const dependencyInjector = require('./dependencyInjector');
const Logger = require('./logger');
const User = require('../models/user/User');
const refreshToken = require('../models/user/RefreshToken');
const product = require('../models/Product');

const loader = async (expressApp) => {
  // eslint-disable-next-line no-unused-vars
  const mongoConnection = await mongooseLoader();
  Logger.info('👆 DB loaded and connected');

  const userModel = {
    name: 'userModel',
    model: User,
  };

  const refreshTokenModel = {
    name: 'refreshTokenModel',
    model: refreshToken,
  };

  const productModel = {
    name: 'productModel',
    model: product,
  };

  await dependencyInjector({
    models: [
      userModel,
      refreshTokenModel,
      productModel,
    ],
  });

  Logger.info('👆 Dependency Injector Loaded');

  await expressLoader(expressApp);
  Logger.info('👆 Express Loaded');
};

module.exports = loader;
