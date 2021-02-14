<template>
  <div id="card">
    <div class="product-img">
      <img src="@/assets/bag.png">
    </div>
    <div class="product-info">
      <h5 style="color: #00BDFF" class="font-weight-bold">0,99€</h5>
      <h6 style="line-height: 0.6em;color: black">Product {{product}}</h6>
      <small class="text-muted">from Store 1</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: [
    'product',
  ],
};
</script>

<style lang="scss" scoped>
  #card {
    background-color: #F9F9F9;
    width: 15em;
    height: 14em;
    margin-bottom: 1em;
    border-radius: 20px;
    outline: none;
    box-shadow: 0px 10px 0px #0000001e !important;

    .product-img {
      width: 80%;
      height: 70%;
    }

    .product-info {
      position: relative;
      z-index: 1000;
      bottom: 10%;
      left: 5%;
    }
  }
</style>
