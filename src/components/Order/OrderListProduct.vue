<template>
  <div class="cart__block">
    <ul class="cart__orders">
      <OrderItemProduct v-for="item in products" :item="item" :key="item.productId" />
    </ul>

    <div class="cart__total">
      <p>Доставка: <b>500 ₽</b></p>
      <p>Итого: <b>{{ amount }}</b> товара на сумму <b>{{ totalPricePretty }} ₽</b></p>
    </div>

    <button class="cart__button button button--primery" v-show="button" type="submit">
      Оформить заказ
    </button>
  </div>
</template>

<script>
import numberFormat from "@/helpers/numberFormat";
import OrderItemProduct from "@/components/Order/OrderItemProduct";

export default {
  name: 'OrderListProduct',
  components: {OrderItemProduct},
  props: {
    products: Array,
    totalPrice: Number,
    amount: Number,
    button: Boolean,
  },
  computed: {
    totalPricePretty() {
      return numberFormat(this.totalPrice)
    },
    itemPricePretty(item) {
      return numberFormat(item)
    },
  }
}
</script>
