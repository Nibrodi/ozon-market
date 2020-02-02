<template>
  <header class="header row">
      <div class="col-12 d-flex align-items-baseline">
        <div class="header__title">{{header}}</div>
        <div class="header__count">{{description}}</div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      header: 'Дом и сад',
      description: '24 товара'
    }
  },
  watch: {
    $route(to) {
      if (to.path === '/catalog') {
        this.header = 'Дом и сад'
        this.description = '24 товара'
      }
      if (to.path === '/cart') {
        this.header = 'Корзина'
        this.description = '2 товара'
      }
      console.log(to)
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
    padding: 20px 0;
    &__title {
        font-size: 30px;
        line-height: 38px;
        color: #001A34;
    }
    &__count {
        font-size: 16px;
        line-height: 20px;
        color: #808D9A;
        margin-left: 10px;
    }
}
</style>