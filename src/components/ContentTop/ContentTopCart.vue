<template>
  <div class="content__top">
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">
        <router-link class="breadcrumbs__link" :to="{name: 'home'}">
          Каталог
        </router-link>
      </li>
      <li class="breadcrumbs__item">
        <router-link class="breadcrumbs__link" :to="{name: 'cart'}">
          Корзина
        </router-link>
      </li>
      <li class="breadcrumbs__item" v-show="isOrder">
        <router-link class="breadcrumbs__link" :to="{name: 'order'}">
          Оформление заказа
        </router-link>
      </li>
    </ul>

    <h1 class="content__title">
      Корзина
    </h1>
    <span class="content__info">{{ $store.state.cartProducts.length }} товара </span>
  </div>
</template>

<script>
export default {
  name: 'ContentTopCart',
  computed: {
    isOrder() {
      return this.$route.name === 'order'
    },
  },
}
</script>
