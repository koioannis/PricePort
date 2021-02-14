<template>
  <b-row id="product-viewer">
    <b-col lg="4" class="product-info fixed-top border-right" style="padding: 0">
      <ProductInfo @toggleEdit="toggleEdit" :editing="editing" />
    </b-col>
    <b-col offset-lg="4" lg="8" style="padding: 0">
      <ProductStores class="product-info" :editing="editing" />
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
    };
  },
  methods: {
    toggleEdit() {
      this.editing = !this.editing;
    },
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
