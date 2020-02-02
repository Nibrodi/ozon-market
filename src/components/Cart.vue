<template>
    <div class="cart row">
        <div class="col-10">
            <div class="cart__header d-flex justify-content-between">
                <div class="cart__selectAll">
                    <input type="checkbox" id="selectAll">
                    <label for="selectAll">Выбрать все</label>
                </div>
                <div class="cart__deleteAll">Удалить выбранное</div>
            </div>
            <div class="cart__list">
                <div class="cart__item d-flex justify-content-between align-items-center">
                    <label for="1" class="d-flex align-items-center">
                        <input type="checkbox" id="1">
                        <div class="cart__itemImg"></div>
                        <div class="cart__itemText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus iure a consequuntur eos est placeat ipsum possimus, id nisi numquam repudiandae error fuga neque, autem voluptates inventore illo, fugit laborum maxime molestias repellendus hic cum. Labore similique assumenda omnis temporibus quos! Vitae ipsa repellat consequuntur, possimus voluptatum eaque modi.</div>
                    </label>
                    <div class="cart__itemPrice">7500</div>
                </div>
                <div class="hr"></div>
                <div class="cart__item d-flex justify-content-between align-items-center">
                    <label for="1" class="d-flex align-items-center">
                        <input type="checkbox" id="1">
                        <div class="cart__itemImg"></div>
                        <div class="cart__itemText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim natus iure a consequuntur eos est placeat ipsum possimus, id nisi numquam repudiandae error fuga neque, autem voluptates inventore illo, fugit laborum maxime molestias repellendus hic cum. Labore similique assumenda omnis temporibus quos! Vitae ipsa repellat consequuntur, possimus voluptatum eaque modi.</div>
                    </label>
                    <div class="cart__itemPrice">75500</div>
                </div>
            </div>
            <div class="summary">
                <div class="row">
                    <div class="summary__header col-12">Ваш заказ:</div>
                    <div class="col-6 summary__text">3 товара на сумму</div><div class="col-6 summary__header text-right">26000</div>
                    <div class="col-6 summary__text">Cкидка</div><div class="col-6 summary__header summary__header_color_red text-right">-400</div>
                    <div class="col-6 summary__header">Общая стоимость</div><div class="col-6 summary__header text-right">20000</div>
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
  name: 'Cart'
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
    }
    &__item {
        padding: 18px 24px;
    }
    &__itemImg {
        width: 80px;
        height: 80px;
        margin: 8px 16px;
        background: url('/images/Bitmap@2x-4.jpg') center center no-repeat;
        background-size: cover;
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