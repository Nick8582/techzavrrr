<!-- eslint-disable vue/no-deprecated-filter -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="cart__block">
    <ul class="cart__orders">
      <li class="cart__order" v-for="item in products" :key="item.productId">
        <h3>{{ item.product.title }}</h3>
        <b>{{ (item.product.price * item.quantity) | numberFormat }} ₽</b>
        <span>Артикул: {{ item.product.id }}</span>
      </li>
    </ul>

    <div class="cart__total">
      <p>Доставка: <b>500 ₽</b></p>
      <p>Итого: <b>{{ amount }}</b> товара на сумму <b>{{ totalPrice | numberFormat }} ₽</b></p>
    </div>

    <button class="cart__button button button--primery" type="submit" v-if="button">
      Оформить заказ
    </button>
  </div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';

export default {
  props: {
    products: Array,
    totalPrice: Number,
    amount: Number,
    button: Boolean,
  },
  filters: {
    numberFormat,
  },
};
</script>
