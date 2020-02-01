<template>
  <div id="app" class="container">
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

@font-face {
  font-family: GTEestiProDisplay;
  src: url('./assets/fonts/GTEsti.otf');
}

.container {
  max-width: 1024px;
  padding: 0 44px;
}
</style>
