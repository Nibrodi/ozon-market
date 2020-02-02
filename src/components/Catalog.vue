<template>
  <div class="catalog row">
      <CatalogItem v-for="item in items" :item="item" :key="item.id"></CatalogItem>
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
  methods: {
    addToCart: function(item) {
      this.$parent.addToCart(item)
    }
  },
  components: {
      CatalogItem
  }
}
</script>

<style lang="scss" scoped>
</style>