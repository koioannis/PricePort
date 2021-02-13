const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const dependencyInjector = require('./dependencyInjector');
const Logger = require('./logger');
const User = require('../models/user/User');
const refreshToken = require('../models/user/RefreshToken');

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
  await dependencyInjector({
    models: [
      userModel,
      refreshTokenModel,
    ],
  });

  Logger.info('👆 Dependency Injector Loaded');

  await expressLoader(expressApp);
  Logger.info('👆 Express Loaded');
};

module.exports = loader;
