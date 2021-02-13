<template>
  <div id="home">
    <div class="top-picks">
      <div class="d-flex justify-content-between pt-4 title">
        <h4>Top Picks</h4>
        <div>
          <img src="@/assets/svg/white_left_arrow.svg" class="arrow">
          <img src="@/assets/svg/white_right_arrow.svg" class="arrow ml-3">
        </div>
      </div>

      <div class="mr-4 d-inline-flex card-row">
        <div class="ml-5" v-for="index in 10" :key=index>
          <router-link to="/" class="product">
            <ProductCard />
          </router-link>
        </div>
      </div>
    </div>

    <div class="mt-2">
      <div class="d-flex justify-content-between pt-4 title">
        <h4>Products tagged with <span class="font-weight-bold mark">Technology</span></h4>
        <div>
          <img src="@/assets/svg/black_left_arrow.svg" class="arrow">
          <img src="@/assets/svg/black_right_arrow.svg" class="arrow ml-3">
        </div>
      </div>

      <div class="mr-4 d-inline-flex card-row">
        <div class="ml-5" v-for="index in 10" :key=index>
          <ProductCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '@/components/home/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss" scoped>
  #app {
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
      overflow: hidden;
      width: 100%;
    }

    .product {
      text-decoration: none;
    }
  }
</style>
