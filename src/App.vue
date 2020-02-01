<template>
  <div id="app" class="container">
    <Nav></Nav>
    <Header></Header>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    Nav,
    Header
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
