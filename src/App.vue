<template>
  <div id="app" class="container">
    <Nav :count="count"></Nav>
    <Header :count="headerCount"></Header>
    <main>
      <router-view v-on:update-cart="updateNav()"></router-view>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Header from './components/Header'

export default {
  name: 'app',
  data: function() {
    return {
      count: 0,
      headerCount: 0
    }
  },
  methods: {
    updateNav: function() {
      let cart = this.$storage.get('cart', false)
      if (cart) {
        this.count = cart.length
      }
    }
  },
  mounted: function() {
      this.updateNav()
  },
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
