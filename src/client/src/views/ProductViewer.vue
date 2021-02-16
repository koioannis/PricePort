<template>
  <b-row id="product-viewer">
    <b-col lg="4" class="product-info fixed-top border-right" style="padding: 0">
      <ProductInfo
        @toggleEdit="toggleEdit"
        @changeProductName="changeProductName"
        :editing="editing"
        :productName="productName" />
    </b-col>
    <b-col offset-lg="4" lg="8" style="padding: 0">
      <ProductStores class="product-info"
        @changeStoreUrl="changeStoreUrl"
        @changeStoreName="changeStoreName"
        @changeProductPrice="changeProductPrice"
        @changeShippingPrice="changeShippingPrice"
        @addProductAction="addProductStoreAction"
        @changeProductName="changeProductName"
        @giveStores="getStores"
        :editing="editing"
        :addProduct="addProduct" />
    </b-col>
  </b-row>
</template>

<script>
import ProductInfo from '@/components/product_viewer/ProductInfo.vue';
import ProductStores from '@/components/product_viewer/ProductStores.vue';

export default {
  name: 'ProductViewer',
  components: {
    ProductInfo,
    ProductStores,
  },
  data() {
    return {
      editing: false,
      addProduct: false,
      storeUrl: null,
      storeName: null,
      productPrice: null,
      shippingPrice: null,
      productName: 'Product Name',
      stores: null,
      productId: this.$router.history.current.params.productId,
    };
  },
  methods: {
    addProductStoreAction() {
      if (this.addProduct) {
        this.$store.dispatch('product/createProduct', {
          name: this.productName,
          price: this.productPrice,
          storeName: this.storeName,
          shipping: this.shippingPrice,
          url: this.storeUrl,
        })
          .then((response) => {
            this.$router.push({ path: `/product/${response.id}` });
            window.location.reload();
          });
      } else {
        this.stores.push({
          price: this.productPrice,
          name: this.storeName,
          shipping: this.shippingPrice,
          url: this.storeUrl,
        });
        this.$store.dispatch('product/addStore', {
          name: this.productName,
          productId: this.productId,
          stores: this.stores,
        })
          .then(() => {
            this.$router.push({ path: `/product/${this.productId}` });
            window.location.reload();
          });
      }
    },
    toggleEdit() {
      this.editing = !this.editing;
    },
    changeProductName(name) {
      this.productName = name;
    },
    changeStoreUrl(url) {
      this.storeUrl = url;
    },
    changeProductPrice(price) {
      this.productPrice = price;
    },
    changeStoreName(name) {
      this.storeName = name;
    },
    changeShippingPrice(price) {
      this.shippingPrice = price;
    },
    getStores(stores) {
      this.stores = stores;
    },
  },
  created() {
    this.addProduct = Object.keys(this.$router.history.current.params).length === 0;
    if (this.addProduct) this.editing = true;
  },
};
</script>

<style lang="scss" scoped>
  #product-viewer {
    height: 100%;
    overflow: hidden;

    .product-info {
      height: 100%;
      margin-top: 6.8em;
    }
  }

  @media only screen and (max-width: 1000px) {
    .product-info {
      position: static;
    }
  }
</style>
