<template>
  <div id="app" class="container">
    <Nav></Nav>
    <Header></Header>
    <main>
      <Catalog></Catalog>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Header from './components/Header'
import Catalog from './components/Catalog'

export default {
  name: 'app',
  components: {
    Nav,
    Header,
    Catalog
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

@font-face {
  font-family: GTEestiProDisplay;
  src: url('/fonts/GTEsti.otf');
}

.container {
  max-width: 1024px;
  padding: 0 44px;
}
</style>
