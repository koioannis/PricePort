<template>
  <b-modal id="sign-in" title="Σύνδεση" hide-footer hide-header>
    <h1 v-if="signin === true" class="text-center mt-4 mb-4"><b>LOGIN</b></h1>
    <h1 v-else class="text-center mt-4 mb-4"><b>REGISTER</b></h1>

    <SignIn v-if="signin" @changeRegisterLogin="changeRegisterLogin"/>
    <SignUp v-else @changeRegisterLogin="changeRegisterLogin"/>
  </b-modal>
</template>

<script>
import SignIn from '@/components/auth/SignIn.vue';
import SignUp from '@/components/auth/SignUp.vue';
import EventBus from '@/main';

export default {
  name: 'SignTemplate',
  methods: {
    changeRegisterLogin() {
      console.log('in');
      this.signin = !this.signin;
    },
  },
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      signin: true,
    };
  },
  created() {
    EventBus.$on('signinOption', (state) => {
      this.signin = state;
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
