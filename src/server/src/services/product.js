const { Service, Container } = require('typedi');
const objectMapper = require('object-mapper');
const productDTO = require('../mapping/productDTO');

Service();
class ProductService {
  constructor() {
    this.logger = Container.get('logger');
    this.productModel = Container.get('productModel');
  }

  async CreateProduct({ name, description, stores }) {
    const productRecord = await this.productModel.create({
      name,
      description,
      stores,
    });

    if (!productRecord) {
      throw new Error();
    }

    this.logger.debug('%o', productRecord);
    return objectMapper(productRecord, productDTO);
  }

  async DeleteProduct(productId) {
    const deletedProduct = await this.productModel.findOneAndDelete({ _id: productId });

    if (!deletedProduct) {
      const error = new Error('Product not found');
      error.status = 404;
      throw error;
    }
  }

  async ModifyProduct(productId, update) {
    const newProductRecord = await this.productModel.findOneAndUpdate({ _id: productId },
      update, { new: true });

    this.logger.debug('%o', newProductRecord);

    if (!newProductRecord) {
      const error = new Error('product not found');
      error.status = 404;
      throw error;
    }

    return objectMapper(newProductRecord, productDTO);
  }

  async GetProduct(productId) {
    const newProductRecord = await this.productModel.findOne({ _id: productId });

    this.logger.debug('%o', newProductRecord);

    if (!newProductRecord) {
      const error = new Error('product not found');
      error.status = 404;
      throw error;
    }

    return objectMapper(newProductRecord, productDTO);
  }

  async GetRandomProducts(count) {
    const productRecords = await this.productModel.aggregate([
      { $sample: { size: Number(count) } },
    ]);

    if (!productRecords) {
      const error = new Error('products not found');
      error.status = 404;
      throw error;
    }

    const products = [];

    productRecords.forEach((productRecord) => {
      products.push(objectMapper(productRecord, productDTO));
    });

    return products;
  }
}

module.exports = ProductService;
