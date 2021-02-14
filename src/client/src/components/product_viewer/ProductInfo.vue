<template>
  <div style="height: inherit;">
    <div class="top-product-section">
      <div class="pt-5 d-flex justify-content-between w-75 m-auto">
        <div class="h5" v-if="editing == false">Top Picks</div>
        <div class="h5" v-else>Editing</div>
        <div v-if="editing == false">
          <img src="@/assets/svg/edit.svg" class="icons mr-3" @click="toggleEditing">
          <img src="@/assets/svg/report_black.svg" class="icons">
        </div>
        <div v-else>
          <img src="@/assets/svg/exit.svg" class="icons" @click="toggleEditing">
        </div>
      </div>
    </div>
    <div class="product-wrapper-info">
      <div class="product-img"></div>
      <div class="h3 mt-5 ml-2 text-left" v-if="editing == false">Product Name</div>
      <input type="text" class="mt-5 ml-2 product-input-editing" v-else
        placeholder="Product Name">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductInfo',
  props: [
    'editing',
  ],
  methods: {
    toggleEditing() {
      this.$emit('toggleEdit');
    },
  },
};
</script>

<style lang="scss" scoped>
  .top-product-section {
    height: 45%;
    background: rgb(0,255,255);
    background: linear-gradient(48deg, rgba(0,255,255,1) 0%, rgba(0,189,255,1) 100%);
  }

  .icons {
    width: 2em;
    cursor: pointer;
  }

  .product-wrapper-info {
    position: absolute;
    left: 0;
    right: 0;
    top: 45%;
    margin: auto;
    transform: translate(0%, -50%);
    width: fit-content;

    .product-img{
      margin: auto;
      width: 25em;
      height: 25em;
      background-color: #F9F9F9;
      border-radius: 20px;
      outline: 0;
      box-shadow: 0px 20px 0px #0000001e !important;
    }

    .product-input-editing {
      outline: 0;
      border: none;
      font-size: 1.7em
    }
  }

  @media only screen and (max-width: 1300px) {
    .product-img {
      width: 18em !important;
      height: 18em !important;
    }

    .product-wrapper-info {
      top: 49%;
    }
  }

  @media only screen and (max-width: 1000px) {
    .top-product-section {
      height: 15em !important;
      margin-bottom: 10em;
    }
  }
</style>
