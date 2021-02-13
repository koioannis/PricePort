<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

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

  #app {
    font-family: 'Now' !important;
  }
</style>
