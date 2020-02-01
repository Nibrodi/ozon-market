<template>
  <header class="header row">
      <div class="col-12 d-flex align-items-baseline">
        <div class="header__title">Дом и сад</div>
        <div class="header__count">24 товара</div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>

.header {
    padding: 20px 0;
    &__title {
        font-family: GTEestiProDisplay;
        font-size: 30px;
        line-height: 38px;
        color: #001A34;
    }
    &__count {
        font-family: GTEestiProText;
        font-size: 16px;
        line-height: 20px;
        color: #808D9A;
        margin-left: 10px;
    }
}
</style>