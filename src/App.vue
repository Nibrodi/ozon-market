<template>
  <div id="app" class="container">
    <Nav :count="count"></Nav>
    <Header :count="headerCount"></Header>
    <main>
      <router-view v-on:update-cart="updateNav($event)"></router-view>
    </main>
    <Preloader v-show="loading"></Preloader>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Header from './components/Header'
import Preloader from './components/Preloader'

export default {
  name: 'app',
  data: function() {
    return {
      count: 0,
      headerCount: 0,
      loading: false
    }
  },
  methods: {
    updateNav: function($event) {
      this.loading = true
      setTimeout(() => {
        let cart = this.$storage.get('cart', false)
          if (cart) {
            this.count = cart.length
          }
        this.headerCount = $event
        this.loading = false
      }, 2000)
    }
  },
  mounted: function() {
    let count = this.$children[2].items ? this.$children[2].items.length : this.$children[2].cart.length
      this.updateNav(count)
  },
  components: {
    Nav,
    Header,
    Preloader
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
