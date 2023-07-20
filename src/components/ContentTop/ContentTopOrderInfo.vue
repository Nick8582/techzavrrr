<template>
  <div class="content__top">
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">
        <router-link class="breadcrumbs__link" :to="{ name: 'home' }">
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
      Заказ оформлен <span>№ {{ orderInfo }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'ContentTopOrderInfo',
  props: {
    orderInfo: Number,
  }

}
</script>
