<template>
  <ContentTopCart/>

  <section class="cart">
    <form class="cart__form form" action="#" method="POST">
      <div class="cart__field">
        <ul class="cart__list">
          <CartItem v-for="item in products" :key="item.id" :item="item"/>
        </ul>
      </div>

      <div class="cart__block">
        <p class="cart__desc">
          Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
        </p>
        <p class="cart__price">
          Итого: <span>{{ totalPricePretty }} ₽</span>
        </p>
        <router-link v-slot="{navigate}" :to="{name: 'order'}" custom>
          <button class="cart__button button button--primery" :disabled="!totalPrice" @click="navigate" type="submit">
            Оформить заказ
          </button>
        </router-link>
      </div>
    </form>
  </section>
</template>

<script>
import ContentTopCart from "@/components/ContentTop/ContentTopCart";
import CartItem from "@/components/Cart/CartItem";
import {mapGetters} from 'vuex';
import numberFormat from "@/helpers/numberFormat";

export default {
  name: 'CartPage',
  components: {CartItem, ContentTopCart},
  computed: {
    ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice'}),
    totalPricePretty() {
      return numberFormat(this.totalPrice)
    }
  }
}
</script>
