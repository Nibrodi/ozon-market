<template>
  <nav class="nav row">
      <div class="col-12 d-flex justify-content-between align-items-center">
          <a href="#" class="nav__logo"><img src="/images/logo.svg" alt="logo"></a>
          <div class="d-flex">
              <a class="nav__link nav__link_state_active" href="#">Каталог</a>
              <a class="nav__link" href="#">Доставка</a>
              <a class="nav__link" href="#">Оплата</a>
              <a class="nav__link" href="#">Поддержка</a>
          </div>
          <div class="d-flex">
              <a href="#" class="nav__profile"></a>
              <a href="#" class="nav__cart"></a>
              <div class="nav__badge">2</div>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>

.nav {
    &__link {
        display: block;
        position: relative;
        font-family: GTEestiProDisplay;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.68px;
        text-transform: uppercase;
        color: #808D9A;
        padding: 28px 25px 16px 25px;
        text-decoration: none;
        &:after {
            content: "";
            position: absolute;
            width: 0;
            bottom: 0;
            left: 50%;
            height: 2px;
            background: #808D9A;
            transition: 0.4s ease-in-out all;
        }
        &:hover {
            &:after {
                left: 0;
                width: 100%;
            }
        }
        &_state_active {
            color: #001A34;
            &:after {
                background: #001A34;
            }
        }
    }
    &__cart,
    &__profile {
        display: block;
        width: 40px;
        height: 40px;
    }
    &__cart {
        background: url('/images/cart.svg') center center no-repeat;
    }
    &__profile {
        background: url('/images/profile.svg') center center no-repeat;
    }
    &__badge {
        position: absolute;
        right: 8px;
        background: #F91155;
        border-radius: 8px;
        width: 23px;
        height: 16px;
        font-family: GTEestiProDisplay;
        font-size: 12px;
        line-height: 16px;
        text-align: center;
        color: #FFFFFF;
    }
}
</style>