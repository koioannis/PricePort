<template>
  <b-navbar toggleable="md" varient="light" id="navbar" class="fixed-top">
    <b-navbar-brand href="/">
      <img src="@/assets/svg/logo.svg" class="logo-img">
      <b-navbar-brand class="ml-3">PRICEPORT</b-navbar-brand>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <div class="d-md-flex d-none search-box mb-1">
      <img src="@/assets/svg/magnyfing_glass.svg" class="ml-4 mr-4">
      <input type="text" class="search-input" placeholder="Search for products">
    </div>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <div class="d-none d-lg-flex">
          <img src="@/assets/svg/question.svg" class="small-icon mr-4">
          <img src="@/assets/svg/report.svg" class="small-icon mr-5">
        </div>
        <b-button size="md" class="my-button register-button mr-4"
          @click="signin">Register</b-button>
        <b-button size="md" class="my-button login-button"
          @click="login">Login</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import EventBus from '@/main';

export default {
  name: 'Navbar',
  methods: {
    login() {
      EventBus.$emit('signinOption', true);
      this.$bvModal.show('sign-in');
    },
    signin() {
      EventBus.$emit('signinOption', false);
      this.$bvModal.show('sign-in');
    },
  },
};
</script>

<style lang="scss" scoped>
  #navbar {
    padding-top: 1.2em;
    padding-bottom: 1.2em;
    padding-left: 3%;
    padding-right: 3%;
    background-color: white;

    .logo-img {
      width: 3em;
    }

    .search-box {
      margin-left: 4%;
      background-color: #F9F9F9;
      box-shadow: 0px 8px 0px #E3E3E3 !important;
      outline: none;
      width: 25%;
      border-radius: 17px;
      padding-top: 1em;
      padding-bottom: 1em;

      .search-input {
        width: 100%;
        margin-right: 8%;
        background-color: #F9F9F9;
        border: none;
        outline: none;
        opacity: 0.9;
      }
    }

    .small-icon {
      width: 1.8em;
      cursor: pointer;
    }

    .my-button {
      width: 6.5em;
      border-radius: 10px;
      color: black;
      padding: 0.6em;
    }

    .my-button:focus {
      outline: none !important;
      box-shadow: 1px 2px 6px #00ffffb7 !important;
    }

    .register-button {
      background-color: #00FFFF;
      border: none;
    }

    .login-button {
      background-color: white;
      border: solid 3px #00FFFF;
    }
  }
</style>
