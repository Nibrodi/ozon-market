<template>
  <div id="app" class="container">
    <Nav></Nav>
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
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

.container {
  max-width: 1024px;
  padding: 0 44px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
