<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="item.product.image.file.url" width="120" height="120" :alt="item.product.title">
    </div>
    <h3 class="product__title">
      {{ item.product.title }}
    </h3>
    <span class="product__code">Артикул: {{ item.product.id }}</span>
    <AppCounter :class-name="'product__counter'" v-model:product-amount="amount"/>
    <b class="product__price">{{ totalPricePretty }} ₽</b>
    <button class="product__del button-del"
            type="button"
            aria-label="Удалить товар из корзины"
            @click.prevent="deleteProduct(item.productId)">
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import AppCounter from "@/components/counter/AppCounter";
import numberFormat from "@/helpers/numberFormat";
import {mapActions} from "vuex";

export default {
  name: 'CartItem',
  components: {AppCounter},
  props: {
    item: Object,
  },
  computed: {
    totalPricePretty() {
      return numberFormat(this.item.amount * this.item.product.price);
    },
    amount: {
      get() {
        return this.item.amount;
      },
      set(value) {
        this.$store.dispatch('updateCartProductAmount', {productId: this.item.productId, amount: value})
      }
    },
  },
  methods: {
    ...mapActions({deleteProduct: 'deleteCartProduct'}),
  },
}
</script>
