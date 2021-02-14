const ProductDTO = {
  _id: 'id',
  name: 'name',
  description: 'description',
  'stores[].name': 'stores[].name',
  'stores[].price': 'stores[].price',
  'stores[].shipping': 'stores[].shipping',
  'stores[].url': 'stores[].url',
};

module.exports = ProductDTO;
