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
  props: ['count'],
  data() {
    return {
      header: 'Дом и сад',
    }
  },
  computed: {
    description: function() {
      return `${this.count} товара`
    }
  },
  methods: {
    setHeader(path) {
      if (path === '/catalog') {
        this.header = 'Дом и сад'
      }
      if (path === '/cart') {
        this.header = 'Корзина'
      }
    }
  },
  mounted: function(){
    this.setHeader(this.$route.path)
  },
  watch: {
    $route(to) {
      this.setHeader(to.path)
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