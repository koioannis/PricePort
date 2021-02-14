<template>
  <form @submit.prevent="login" id="signin">
    <div class="input-style">
      <input type="email" class="w-75 big-input" placeholder="email" v-model="email" required>
    </div>
    <div class="input-style">
      <input type="password" class="w-75 big-input" placeholder="password"
        v-model="password" required>
    </div>
    <div class="d-flex text-center">
      <b-col class="forgot-btn pt-4 pb-4">
        <span style="font-size: 0.7em">forgot my password</span></b-col>
      <b-col class="login-btn pt-4 pb-4" @click="$refs.submitBtn.click()">
        <span style="font-size: 0.7em">Login</span></b-col>
    </div>
    <div class="d-flex pt-5 pb-5 text-center ml-3 mr-3">
      <b-col class="mt-2 small">Haven't registered <span style="color: #008080">yet?</span></b-col>
      <b-col>
        <b-button class="my-button" @click="changeRegister">Register</b-button>
      </b-col>
    </div>
    <button type="submit" ref="submitBtn" class="d-none"></button>
  </form>
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    changeRegister() {
      this.$emit('changeRegisterLogin');
    },
    login() {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          this.email = '';
          this.password = '';
        });
    },
  },
};
</script>

<style lang="scss" scoped>
  #signin {
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

    .forgot-btn {
      background-color: #F2F2F2;
      height: 100%;
      cursor: pointer;
    }

    .forgot-btn:hover {
      background-color: #f0eeee;
    }

    .login-btn {
      background-color: #00FFFF;
      cursor: pointer;
    }

    .login-btn:hover {
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
