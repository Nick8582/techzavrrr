<template>
  <ContentTopOrderInfo :order-info="orderInfo.id"/>

  <section class="cart">
    <form class="cart__form form" action="#" method="POST">
      <div class="cart__field">
        <p class="cart__message">
          Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет письмо с&nbsp;деталями заказа.
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

      <OrderListProduct :products="products" :amount="products.length" :totalPrice="orderInfo.totalPrice" :button="false" />
    </form>
  </section>
</template>
<script>
import ContentTopOrderInfo from "@/components/ContentTop/ContentTopOrderInfo";
import gotoPage from "@/helpers/gotoPage";
import {mapGetters} from "vuex";
import OrderListProduct from "@/components/Order/OrderListProduct";

export default {
  name: 'OrderInfoPage',
  components: {OrderListProduct, ContentTopOrderInfo},
  methods: {
    gotoPage,
  },
  computed: {
    ...mapGetters({products: 'orderInfoBasket'}),
    orderInfo() {
      return this.$store.state.orderInfo || {};
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
};
</script>
