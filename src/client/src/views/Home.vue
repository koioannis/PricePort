<template>
  <div id="home" class="mb-4">
    <div class="top-picks">
      <div class="d-flex justify-content-between pt-4 title">
        <h4>Top Picks</h4>
        <div>
          <img src="@/assets/svg/white_left_arrow.svg" class="arrow"
            @click="rightArrow('top-picks', 0)">
          <img src="@/assets/svg/white_right_arrow.svg" class="arrow ml-3"
            @click="leftArrow('top-picks', 0)">
        </div>
      </div>

      <div class="mr-4 d-inline-flex card-row" ref="top-picks" id="top-picks"
        @animationend="slideLeftTop=false; slideRightTop=false">
        <div class="ml-5" v-for="product in products" :key=product>
          <router-link :to="'/product/' + '602a6e0c6b2588368001924d'" class="product">
            <ProductCard :product="product"/>
          </router-link>
        </div>
      </div>
    </div>

    <div class="mt-2">
      <div class="d-flex justify-content-between pt-4 title">
        <h4>Products tagged with <span class="font-weight-bold mark">Technology</span></h4>
        <div>
          <img src="@/assets/svg/black_left_arrow.svg" class="arrow"
            @click="rightArrow('technology', 1)">
          <img src="@/assets/svg/black_right_arrow.svg" class="arrow ml-3"
            @click="leftArrow('technology', 1)">
        </div>
      </div>

      <div class="mr-4 d-inline-flex card-row" ref="technology" id="technology">
        <div class="ml-5" v-for="product in products" :key=product>
          <router-link to="/product/sdgasd" class="product">
            <ProductCard :product="product"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/home/ProductCard.vue';

const $ = require('jquery');

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
  data() {
    return {
      currentIndex: new Array([0, 0]),
      products: null,
      productsMax: 0,
      animated: false,
    };
  },
  mounted() {
    this.productsMax = this.products - Math.floor(this.$refs['top-picks'].clientWidth / 288);
  },
  created() {
    this.$store.dispatch('product/getRandomProducts', {
      count: 20,
    })
      .then((data) => {
        this.products = data;
      });
  },
  methods: {
    leftArrow(element, index) {
      // eslint-disable-next-line no-plusplus, max-len
      if (this.currentIndex[0][index] === this.productsMax || ++this.currentIndex[0][index] < 0) return;
      const currentPosition = ((parseInt(this.$refs[element].style.marginLeft, 10) || 0) - 18);
      $(`#${element}`).animate({ 'margin-left': `${currentPosition}em` });
      this.$refs[element].style.marginLeft = `${currentPosition}em`;
    },
    rightArrow(element, index) {
      // eslint-disable-next-line no-plusplus
      if (this.currentIndex[0][index] === 0 || this.currentIndex[0][index]-- <= 0) return;
      const currentPosition = ((parseInt(this.$refs[element].style.marginLeft, 10) || 0) + 18);
      $(`#${element}`).animate({ 'margin-left': `${currentPosition}em` });
      this.$refs[element].style.marginLeft = `${currentPosition}em`;
    },
  },
};
</script>

<style lang="scss" scoped>
  #home {
    margin-top: 6.8em;

    .top-picks {
      background: rgb(0,255,255);
      background: linear-gradient(48deg, rgba(0,255,255,1) 0%, rgba(0,189,255,1) 100%);
      height: 22em;
    }

    .title {
      margin-left: 4%;
      margin-right: 4%;

      .mark {
        background-color: #BCFFFF;
        border-radius: 5px;
      }

      .arrow {
        width: 2em;
        cursor: pointer;
      }
    }

    .card-row {
      margin-top: 1%;
      width: 100%;
    }

    .product {
      text-decoration: none;
    }
  }
</style>
