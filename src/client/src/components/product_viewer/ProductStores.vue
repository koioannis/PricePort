<template>
  <div>
    <div class="d-flex justify-content-between border-top pt-2 pb-2 pl-5 pr-5">
      <div class="d-flex">
        <p class="mr-3 pt-3">filters:</p>
        <img src="@/assets/svg/plus.svg" style="width: 2em">
      </div>
      <div class="pt-3">
        <p>Sort by: <span class="sort pl-3 pr-3 pt-2 pb-2">Price</span></p>
      </div>
    </div>

    <div class="ml-1 mr-1 pl-5 pr-5 pt-4 pb-4 border-top" v-if="editing == true">
      <div class="d-flex align-items-center" style="width: 100%">
        <img src="@/assets/svg/plus.svg" style="width: 5.5em;cursor: pointer">
        <div style="width: 100%">
          <b-row class="ml-5 mt-2">
            <b-col lg="1" class="mt-1">url: </b-col>
            <b-col lg="11">
              <input type="text" class="big-input" placeholder="www.store0.com">
            </b-col>
          </b-row>
          <b-row class="ml-5 mt-2">
            <b-col lg="1" class="mt-1">name:</b-col>
            <b-col lg="11">
              <input type="text" class="big-input" placeholder="Store 0">
            </b-col>
          </b-row>
          <b-row class="ml-5 mt-2">
            <b-col lg="1" class="mt-1">price:</b-col>
            <b-col lg="2">
              <input type="text" class="small-input" placeholder="0,59€">
            </b-col>
            <b-col lg="2" class="mt-1" style="max-width: fit-content">shipping:</b-col>
            <b-col lg="2">
              <input type="text" class="small-input" placeholder="0,99€">
            </b-col>
            <b-col lg="5">
              <div class="pl-5 pr-5 add-btn">Add</div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>

    <div v-for="shop in shops" :key=shop class="ml-1 mr-1 pl-5 pr-5 pt-4 pb-4 border-top
      d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center">
        <div class="shop-img"></div>
        <div class="ml-3 mt-2">
          <h3>Store {{shop}}</h3>
          <div class="h4 stars">★★★★★</div>
        </div>
      </div>
      <div class="d-flex pt-3">
        <img src="@/assets/svg/report_grey.svg" class="mr-4 report">
        <div>
          <h4>0,99€</h4>
          <p class="small text-muted">+0,99€ shipping</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductStores',
  props: [
    'editing',
  ],
  data() {
    return {
      shops: 15,
    };
  },
};
</script>

<style lang="scss" scoped>
  .sort {
    width: 1em;
    background-color: #E6E6E6;
    border-radius: 10px;
  }

  .shop-img {
    padding: 2.5em;
    width: 2em;
    background-color: #E6E6E6;
    border-radius: 23px;
  }

  .stars {
    color: rgb(0,255,255);
    margin-top: -0.4em;
  }

  .report {
    cursor: pointer;
    width: 2em;
  }

  .big-input {
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    outline: 0;
    border: none;
    background-color: #E6E6E6;
    border-radius: 10px;
    width: inherit;
  }

  .small-input {
    outline: 0;
    border: none;
    background-color: #E6E6E6;
    border-radius: 10px;
    width: inherit;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
  }

  .add-btn {
    background-color: #00FFFF;
    color: #000000;
    border: none;
    border-radius: 10px;
    padding-top: 0.55em;
    padding-bottom: 0.55em;
    width: fit-content;
    cursor: pointer;
    text-align: center;
    font-size: 0.8em;
  }

  .add-btn:hover {
    background-color: #00ffffce;
    color: #000000;
    outline: 0;
  }
</style>
