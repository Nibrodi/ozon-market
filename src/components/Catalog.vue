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
  components: {
      CatalogItem
  }
}
</script>

<style lang="scss" scoped>
</style>