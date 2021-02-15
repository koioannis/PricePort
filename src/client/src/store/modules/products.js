import axios from 'axios';

const product = {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    createProduct(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/products/product', {
          name: data.name,
          description: 'none',
          stores: [
            {
              price: data.price,
              name: data.storeName,
              shipping: data.shipping,
              url: data.url,
            },
          ],
        }, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${context.rootState.auth.accessToken}`,
          },
        })
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    },
    getProductStores(context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`/products/product/${data.productId}`,
          { withCredentials: true })
          .then((response) => {
            resolve(response.data);
          })
          .catch(() => {
            reject();
          });
      });
    },
    addStore(context, data) {
      return new Promise((resolve, reject) => {
        axios.put(`/products/product/${data.productId}`, {
          name: data.name,
          stores: data.stores,
        }, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${context.rootState.auth.accessToken}`,
          },
        })
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    },
    getRandomProducts(context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`/products/get-random-products/${data.count}`,
          { withCredentials: true })
          .then((response) => {
            resolve(response.data);
          })
          .catch(() => {
            reject();
          });
      });
    },
  },
};

export default product;
