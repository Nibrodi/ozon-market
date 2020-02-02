<template>
  <div class="col-3 item">
      <div class="item__imageWrap">
          <img class="item__image" :src="item.image" alt="">
          <div v-if="isDiscount" class="item__discount">-{{item.discount}}%</div>
      </div>
      <div class="item__priceWrap d-flex align-items-center">
          <div class="item__price" :class="{ item__price_state_discount : isDiscount }">{{isDiscount ? formatPrice(discountPrice) : formatPrice(item.price)}} &#8381;</div>
          <div v-if="isDiscount" class="item__oldPrice">{{formatPrice(item.price)}} &#8381;</div>
      </div>
      <div class="item__name">{{item.name}}</div>
      <div class="item__raitingWrap d-flex">
          <div class="item__raiting item__raiting_star_1" v-for="raiting in [0, 1, 2, 3, 4, 5]" :key="raiting"></div>
          <div class="item__feedbacks">{{item.feedbacks}}</div>
      </div>
      <button class="item__button" @click="addToCart()" :disabled="item.isInCart">В корзину</button>
  </div>
</template>

<script>

export default {
    name: 'CatalogItem',
    data: function() {
        return {
        }
    },
    methods: {
        formatPrice: function(price) {
            return (price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
        },
        addToCart: function() {
            let cart = this.$storage.get('cart', false)
            if (cart) {
                cart.push(this.item)
                this.$storage.set('cart', cart)
            } else {
                this.$storage.set('cart', [this.item])
            }
            this.item.isInCart = true;
            this.$emit('update-cart')
        }
    },
    computed: {
        isDiscount: function() {
            return this.item.discount > 0
        },
        discountPrice: function() {
            return (this.item.price*(1 - this.item.discount/100)).toFixed(2).replace(/\./, ',');
        }
    },
    props: ['item']
}
</script>

<style lang="scss" scoped>

.item {
    padding: 16px 12px 0 12px;
    &__imageWrap {
        padding: 8px;
        text-align: center;
        position: relative;
    }
    &__image {
        height: 200px;
    }
    &__discount {
        position: absolute;
        bottom: 8px;
        width: 39px;
        height: 20px;
        left: 0;
        background: #F91155;
        border-radius: 3px;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
    }
    &__price {
        font-size: 20px;
        line-height: 26px;
        color: #001A34;
        &_state_discount {
            color: #F91155;
        }
    }
    &__oldPrice {
        margin-left: 4px;
        font-size: 12px;
        line-height: 16px;
        color: #001A34;
        position: relative;
        &:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 1px;
            z-index: -1;
            left: 0;
            top: calc(100% / 2);
            background: #F91155;
            transform: skewY(-2deg);
        }
    }
    &__name {
        font-size: 16px;
        line-height: 20px;
        color: #001A34;
        margin: 6px 0;
    }
    &__raiting {
        width: 16px;
        height: 16px;
        background: url('/images/star1.svg') center center no-repeat;
        background-size: cover;
    }
    &__feedbacks {
        font-size: 14px;
        line-height: 20px;
        color: #808D9A;
        margin-left: 6px;
    }
    &__button {
        background: #005BFF;
        padding: 7px 12px;
        margin: 16px 0 24px;
        border-radius: 3px;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
        outline: none;
        border: none;
        &:focus {
            outline: none;
        }
        &:disabled {
            background: #F2F3F5;
            color: #005BFF;
        }
    }
}
</style>