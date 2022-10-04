<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'main' }">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'cart' }">
            Корзина
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Оформление заказа
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Заказ оформлен <span>№ {{ orderInfo.id }}</span>
      </h1>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <p class="cart__message">
            Благодарим за&nbsp;выбор нашего магазина.
            На&nbsp;Вашу почту придет письмо с&nbsp;деталями заказа.
            Наши менеджеры свяжутся с&nbsp;Вами в&nbsp;течение часа для уточнения деталей доставки.
          </p>

          <ul class="dictionary">
            <li class="dictionary__item" v-for="dict in dictionary" :key="dict.id">
              <span class="dictionary__key">
                {{ dict.key }}
              </span>
              <span class="dictionary__value">
                {{ dict.value }}
              </span>
            </li>
          </ul>
        </div>

        <OrderList
          :products="products"
          :amount="products.length"
          :totalPrice="orderInfo.totalPrice"
          :button="false"
        />
      </form>
    </section>
  </main>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import OrderList from '@/components/OrderList.vue';
import { mapGetters } from 'vuex';

export default {
  components: { OrderList },
  methods: {
    gotoPage,
  },
  created() {
    if (this.$store.state.orderInfo && this.$store.state.orderInfo.id === this.$router.params.id) {
      return;
    }
    this.$store.dispatch('loaderOrderInfo', this.$router.params.id);
  },
  computed: {
    ...mapGetters({ products: 'orderInfoBasket' }),
    orderInfo() {
      return this.$store.state.orderInfo || {};
    },
    loadOrderInfo() {
      return this.$store.state.loaderOrderInfo;
    },
    status() {
      return this.orderInfo.status ? this.orderInfo.status.title : '';
    },
    dictionary() {
      return [
        { key: 'Получатель', value: this.orderInfo.name, id: 1 },
        { key: 'Адрес доставки', value: this.orderInfo.address, id: 2 },
        { key: 'Телефон', value: this.orderInfo.phone, id: 3 },
        { key: 'Email', value: this.orderInfo.email, id: 4 },
        { key: 'Способ оплаты', value: 'Оплата картой', id: 5 },
        { key: 'Статус заказа', value: this.status, id: 6 },
      ];
    },
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.$store.commit('loadOrderInfoStatus', true);
        if (this.loaderOrderInfo && this.loaderOrderInfo.id === this.$route.params.id) {
          this.$store.commit('loadOrderInfoStatus', false);
          return;
        }
        this.$store.dispatch('loaderOrderInfo', this.$route.params.id);
      },
      immediate: true,
    },
  },
};
</script>
