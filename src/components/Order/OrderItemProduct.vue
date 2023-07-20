<template>
  <li class="cart__order">
    <h3>{{ item.product.title }}</h3>
    <b>{{ priceFormat }} ₽</b>
    <span>x {{ item.amount || item.quantity }} товара</span>
    <span>Артикул: {{ item.productId }}</span>
  </li>
</template>

<script>
import numberFormat from "@/helpers/numberFormat";

export default {
  name: 'OrderItemProduct',
  props: ['item'],
  computed: {
    priceFormat() {
      console.log(this.item)
      return numberFormat((this.item.amount || this.item.quantity) * this.item.product.price)
    }
  }
}
</script>
