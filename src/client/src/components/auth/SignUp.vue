<template>
  <div id="signup">
    <div class="input-style">
      <input type="text" class="w-75 big-input" placeholder="username">
    </div>
    <div class="input-style">
      <input type="text" class="w-75 big-input" placeholder="email">
    </div>
    <div class="input-style">
      <input type="text" class="w-75 big-input" placeholder="password">
    </div>
    <div class="input-style">
      <input type="text" class="w-75 big-input" placeholder="password">
    </div>
    <div class="d-flex text-center">
      <b-col class="terms d-flex pt-4 pb-4 justify-content-center align-items-center">
        <input type="checkbox" class="mb-1" id="terms">
        <div>
          <span style="font-size: 0.7em;" class="ml-2">
            I agreed to the <span style="color: #008080">terms</span>
          </span>
        </div>
      </b-col>
      <b-col class="register-btn pt-4 pb-4">
        <span style="font-size: 0.7em">Register</span></b-col>
    </div>
    <div class="d-flex pt-5 pb-5 text-center ml-3 mr-3">
      <b-col class="mt-2 small">Already Registered?</b-col>
      <b-col>
        <b-button class="my-button" @click="changeLogin">Login</b-button>
      </b-col>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  methods: {
    changeLogin() {
      this.$emit('changeRegisterLogin');
    },
  },
};
</script>

<style lang='scss' scoped>
  #signup {
    width: 100%;
    background-color: #F9F9F9;
    border-radius: 10px;
    display: block;
    outline: none;

    .input-style {
      width: 100%;
      height: 4em;
      border-bottom: solid 3px #E6E6E6;
    }

    .big-input {
      height: 80%;
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: #F9F9F9;
      border: none;
      outline: none;
      font-size: 0.8em;
      opacity: 0.9;
    }

    .terms {
      background-color: #F2F2F2;
      height: 100%;
    }

    .register-btn {
      background-color: #00FFFF;
      cursor: pointer;
    }

    .register-btn:hover {
      background-color: #00ffffcb;
    }

    .my-button {
      font-size: 0.8em;
      width: 10em;
      border-radius: 8px;
      background-color: #00FFFF;
      color: black;
      border: none;
      outline: none;
      box-shadow: none;
    }
  }
</style>
