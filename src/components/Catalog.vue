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
  data: function() {
      return {
          items: mock.data
      }
  },
  created: function() {
    let cart = this.$storage.get('cart', false)
    if (cart) {
      cart.forEach((item) => {
        let find = this.items.find((elem) => elem.id === item.id)
        if (find) {
          find.isInCart = true;
        }
      });
    }
    this.$parent.headerCount = this.items.length
  },
  methods: {
  },
  components: {
      CatalogItem
  }
}
</script>

<style lang="scss" scoped>
</style>