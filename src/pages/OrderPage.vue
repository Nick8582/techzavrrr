<template>
  <ContentTopCart/>
  <section class="cart">
    <LoaderPage v-if="loading"/>
    <form class="cart__form form" v-else action="#" method="POST" @submit.prevent="order">
      <div class="cart__field">
        <div class="cart__data">
          <OrderInput
              title="ФИО"
              placeholder="Введите ваше полное имя"
              v-model="formData.name"
              :error="formError.name"/>

          <OrderInput
              title="Адрес доставки"
              placeholder="Введите ваш адрес"
              v-model="formData.address"
              :error="formError.address"/>

          <OrderInput
              title="Телефон"
              placeholder="Введите ваш телефон"
              type="tel"
              v-model="formData.phone"
              :error="formError.phone"/>

          <OrderInput
              title="Email"
              placeholder="Введите ваш Email"
              type="email"
              v-model="formData.email"
              :error="formError.email"/>

          <OrderTextarea
              title="Комментарий к заказу"
              placeholder="Ваши пожелания"
              v-model="formData.comment"
              :error="formError.comment"/>
        </div>

        <div class="cart__options">
          <h3 class="cart__title">Доставка</h3>
          <ul class="cart__options options">
            <li class="options__item">
              <label class="options__label">
                <input class="options__radio sr-only" type="radio" name="delivery" value="0" checked="">
                <span class="options__value">Самовывоз <b>бесплатно</b></span>
              </label>
            </li>
            <li class="options__item">
              <label class="options__label">
                <input class="options__radio sr-only" type="radio" name="delivery" value="500">
                <span class="options__value">Курьером <b>500 ₽</b></span>
              </label>
            </li>
          </ul>

          <h3 class="cart__title">Оплата</h3>
          <ul class="cart__options options">
            <li class="options__item">
              <label class="options__label">
                <input class="options__radio sr-only" type="radio" name="pay" value="card">
                <span class="options__value">Картой при получении</span>
              </label>
            </li>
            <li class="options__item">
              <label class="options__label">
                <input class="options__radio sr-only" type="radio" name="pay" value="cash">
                <span class="options__value">Наличными при получении</span>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <OrderListProduct
          :products="products"
          :amount="$store.state.cartProducts.length"
          :button="true"
          :totalPrice="totalPrice"/>
      <div class="cart__error form__error-block" v-if="formErrorMessage">
        <h4>Заявка не отправлена!</h4>
        <p>{{ formErrorMessage }}</p>
      </div>
    </form>
  </section>
</template>

<script>
import ContentTopCart from "@/components/ContentTop/ContentTopCart";
import gotoPage from "@/helpers/gotoPage";
import axios from "axios";
import {API_BASE_URL} from "@/config";
import {mapGetters} from "vuex";
import OrderInput from "@/components/Order/OrderInput";
import OrderTextarea from "@/components/Order/OrderTextarea";
import OrderListProduct from "@/components/Order/OrderListProduct";
import LoaderPage from "@/components/Loader/LoaderPage";

export default {
  name: 'OrderPage',
  components: {LoaderPage, OrderListProduct, OrderTextarea, OrderInput, ContentTopCart},
  data() {
    return {
      formData: {},
      formError: {},
      formErrorMessage: '',
      loading: false,
    };
  },
  methods: {
    gotoPage,
    order() {
      this.formError = {};
      this.formErrorMessage = '';
      this.loading = true;

      axios.post(`${API_BASE_URL}/api/orders`, {
        ...this.formData,
      }, {
        params: {
          userAccessKey: this.$store.state.userAccessKey,
        },
      }).then((response) => {
        this.$store.commit('resetCart');
        this.$store.commit('updateOrderInfo', response.data);
        this.$router.push({name: 'orderInfo', params: {id: response.data.id}});
      }).catch((error) => {
        this.formError = error.response.data.error.request || {};
        this.formErrorMessage = error.response.data.error.message;
      }).then(() => {
        this.loading = false;
      });
    },
  },
  computed: {
    ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice'})
  }
}
</script>
