<template>
  <div id="app">
    <Navbar />
    <SignTemplate />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SignTemplate from '@/components/auth/SignTemplate.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    SignTemplate,
  },
};
</script>

<style lang="scss">
  $font-dir: '../src/assets/fonts/';

  @font-face {
    font-family: 'Now';
    src: url('#{$font-dir}/now/Now-Regular.otf');
    src: url('#{$font-dir}/now/Now-Bold.otf');
    src: url('#{$font-dir}/now/Now-Light.otf');
    src: url('#{$font-dir}/now/Now-Thin.otf');
    src: url('#{$font-dir}/now/Now-Medium.otf');
  }

  body, html {
    font-family: 'Now' !important;
    overflow-x: hidden;
  }
</style>
