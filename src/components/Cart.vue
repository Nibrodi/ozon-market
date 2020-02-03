<template>
    <div class="cart row">
        <div class="col-10">
            <div class="cart__header d-flex justify-content-between">
                <div class="cart__selectAll">
                    <input type="checkbox" id="selectAll" @change="selectAll()" v-model="isSelectAll">
                    <label for="selectAll">Выбрать все</label>
                </div>
                <div class="cart__deleteAll" @click="deleteSelection()">Удалить выбранное</div>
            </div>
            <div class="cart__list">
                <div v-for="item in cart" :key="item.id">
                <div class="cart__item d-flex justify-content-between align-items-center">
                    <label :for="item.id" class="d-flex align-items-center">
                        <input type="checkbox" :id="item.id" v-model="item.checked" @change="select()">
                        <div class="cart__itemImg" :style="{'background-image': `url(${item.image})`}"></div>
                        <div class="cart__itemText">{{item.name}}</div>
                    </label>
                    <div class="cart__itemPrice">{{formatPrice(item.price)}} &#8381;</div>
                </div>
                <div class="hr"></div>
                </div>
            </div>
            <div class="summary">
                <div class="row">
                    <div class="summary__header col-12">Ваш заказ:</div>
                    <div class="col-6 summary__text">{{cart.length}} товара на сумму</div><div class="col-6 summary__header text-right">{{formatPrice(priceItems)}} &#8381;</div>
                    <div class="col-6 summary__text">Cкидка</div><div class="col-6 summary__header summary__header_color_red text-right">-{{formatPrice(discountItems)}} &#8381;</div>
                    <div class="col-6 summary__header">Общая стоимость</div><div class="col-6 summary__header text-right">{{formatPrice(summaryPrice)}} &#8381;</div>
                    <div class="col-12 hr"></div>
                    <div class="col-6 summary__text summary__text_color_gray">Доступные способы и время доставки можно выбрать при оформлении заказа</div>
                    <div class="col-6">
                        <button class="summary__button">Оформить</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cart',
    data: function(){
        return {
            cart: [],
            isSelectAll: false
        }
    },
    created: function () {
        let cart = this.$storage.get('cart', false)
        if (cart) {
            this.cart = cart
        }
        if (this.$route.path === '/cart') this.$parent.headerCount = this.cart.length
    },
    computed: {
        checkSelectAll: function() {
            let res = true
            this.cart.forEach((item) => {
                if (!item.checked) {
                    res = false
                }
            })
            return res
        },
        priceItems: function() {
            let sum = 0
            this.cart.forEach((item) => {
                sum += item.price
            })
            return sum
        },
        discountItems: function() {
            let sum = 0
            this.cart.forEach((item) => {
                if (item.discount > 0) {
                    sum += +this.discountPrice(item)
                }
            })
            return sum
        },
        summaryPrice: function() {
            return this.priceItems - this.discountItems
        }
    },
    methods: {
        discountPrice: function(item) {
            return (item.price*item.discount/100).toFixed(2)
        },
        formatPrice: function(price) {
            return (price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ").replace(/\./, ',')
        },
        deleteSelection: function() {
            let newCart = []
            this.cart.forEach((item) => {
                if (!item.checked) {
                    newCart.push(item)
                }
            })
            let cart = this.$storage.get('cart', false)
            if (cart) {
                this.$storage.set('cart', newCart)
                this.cart = newCart
                this.isSelectAll = false;
            }
            this.$emit('update-cart', this.cart.length)
        },
        selectAll: function() {
            this.turnAllSelect(this.isSelectAll)
        },
        turnAllSelect: function(state) {
            let all = true
            this.cart = this.cart.map((item) => {
                item.checked = state
                if (!item.checked) {
                    all = false
                }
                return item
            })
            this.isSelectAll = all
        },
        select: function() {
            let all = true
            this.cart.forEach((item) => {
                if (!item.checked) {
                    all = false
                }
            })
            this.isSelectAll = all
        }
    }
}
</script>

<style lang="scss" scoped>

.hr {
    height: 1px;
    background: rgba(0, 26, 52, 0.163844);
}

label {
    margin: 0;
}
.cart {
    &__header {
        padding: 16px 24px;
        background: #F2F3F5;
    }
    &__selectAll {
        label {
            font-size: 14px;
            font-weight: normal;
            line-height: 18px;
            color: #001A34;
        }
        input {
            margin-right: 16px;
        }
    }
    &__deleteAll {
        font-size: 14px;
        line-height: 18px;
        color: #F91155;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
    &__item {
        padding: 18px 24px;
    }
    &__itemImg {
        width: 80px;
        height: 80px;
        margin: 8px 16px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        flex-shrink: 0;
    }
    &__itemText {
        max-height: 40px;
        max-width: 50%;
        overflow: hidden;
        font-size: 16px;
        line-height: 20px;
        color: #001A34;
    }
    &__itemPrice {
        font-size: 20px;
        line-height: 26px;
        color: #001A34;
    }
}

.summary {
    padding: 24px;
    background: #F2F3F5;
    .row {
        >* {
            margin-bottom: 16px;
        }
    }
    .hr {
        margin-bottom: 32px;
    }
    &__header {
        font-size: 20px;
        line-height: 26px;
        color: #001A34;
        &_color_red {
            color: #F91155;
        }
    }
    &__text {
        font-size: 16px;
        line-height: 20px;
        color: #001A34;
        &_color_gray {
            color: #808D9A;
        }
    }
    &__button {
        background: #005BFF;
        padding: 7px 12px;
        border-radius: 3px;
        width: 100%;
        height: 100%;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        color: #FFFFFF;
        outline: none;
        border: none;
        &:focus {
            outline: none;
        }
    }
}
</style>