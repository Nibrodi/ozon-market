<template>
  <div class="catalog row">
      <CatalogItem v-for="item in items" :item="item" :key="item.id" v-on:update-cart="$emit('update-cart')"></CatalogItem>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem'
import mock from '../mock-data/Catalog'

export default {
  name: 'Catalog',
  data: function () {
    return {
      items: mock.data
    }
  },
  mounted: function () {
    this.updates();
  },
  methods: {
    updates() {
      let cart = this.$storage.get('cart', false)
      if (cart) {
        this.items.forEach(item => item.isInCart = false)
        cart.forEach((item) => {
          let find = this.items.find((elem) => elem.id === item.id)
          if (find) {
            find.isInCart = true;
          }
        });
      }
      this.$parent.headerCount = this.items.length
    }
  },
  components: {
    CatalogItem
  },
  watch: {
    $route() {
      this.updates()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>