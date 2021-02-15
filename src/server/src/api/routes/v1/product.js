const { Router } = require('express');
const { Container } = require('typedi');
const { celebrate, Joi } = require('celebrate');

const middlewares = require('../../middlewares');
const ProductService = require('../../../services/product');
const RouteFactory = require('../../RouteFactory');

const route = Router();
const ApiRoutes = RouteFactory('v1');

const product = (app) => {
  app.use(route);
  route.post(ApiRoutes.ProductAction, middlewares.isAuth,
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        stores: Joi.array().items(Joi.object({
          price: Joi.number().required(),
          shipping: Joi.number().required(),
          name: Joi.string().required(),
          url: Joi.string().required(),
        })),
      }),
    }),
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling create product endpoint with body %o', req.body);
      try {
        const productServiceInstance = Container.get(ProductService);

        const result = await productServiceInstance.CreateProduct(req.body);

        return res.json(result);
      } catch (error) {
        return next(error);
      }
    });

  route.delete(`${ApiRoutes.ProductAction}/:productId`, middlewares.isAuth,
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling delete product with body %o', req.body);
      try {
        const productServiceInstance = Container.get(ProductService);

        await productServiceInstance.DeleteProduct(req.params.productId);

        return res.status(200).end();
      } catch (error) {
        return next(error);
      }
    });

  route.put(`${ApiRoutes.ProductAction}/:productId`, middlewares.isAuth,
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling modify product with body %o', req.body);
      try {
        const productServiceInstance = Container.get(ProductService);

        const result = await productServiceInstance.ModifyProduct(req.params.productId, req.body);

        return res.json(result).status(200);
      } catch (error) {
        return next(error);
      }
    });

  route.get(`${ApiRoutes.ProductAction}/:productId`, async (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling get product endpoint');

    try {
      const productServiceInstance = Container.get(ProductService);

      const result = await productServiceInstance.GetProduct(req.params.productId, req.body);

      return res.json(result).status(200);
    } catch (error) {
      return next(error);
    }
  });

  route.get(ApiRoutes.GetRandomProducts, async (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling get random products endpoint');

    try {
      const productServiceInstance = Container.get(ProductService);

      const result = await productServiceInstance.GetRandomProducts(req.params.count);

      return res.json(result).status(200);
    } catch (error) {
      return next(error);
    }
  });
};

module.exports = product;
