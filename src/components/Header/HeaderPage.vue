<template>
  <header class="header">
    <div class="header__wrapper container">
      <router-link :to="{name: 'home'}" class="header__info">Каталог</router-link>

      <router-link class="header__logo" :to="{name: 'home'}" >
        <img src="img/svg/logo-tech.svg" alt="Логотип интернет магазина Технозавррр" width="190" height="33">
      </router-link>

      <a class="header__tel" href="tel:8 800 600 90 09">
        8 800 600 90 09
      </a>

      <CartIndicator />
    </div>
  </header>
</template>

<script>
import CartIndicator from "@/components/Header/CartIndicator";
export default {
  name: 'HeaderPage',
  components: {CartIndicator}
}
</script>
