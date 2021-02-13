const { Container } = require('typedi');
const LoggerInstance = require('./logger');

const dependencyInjector = ({ models }) => {
  try {
    models.forEach((model) => {
      Container.set(model.name, model.model);
    });

    Container.set('logger', LoggerInstance);
  } catch (error) {
    LoggerInstance.error('Error on dependency injector loader: %o', error);
    throw error;
  }
};

module.exports = dependencyInjector;
