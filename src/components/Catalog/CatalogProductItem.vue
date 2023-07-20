<template>
  <li class="catalog__item">
    <router-link :to="{name: 'product', params: {id: product.id}}" class="catalog__pic" >
      <img :src="product.image" :alt="product.title">
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">{{ pricePretty }} ₽</span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in product.colors" :key="color.id">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color-1" :value="color.id" v-model="colorNone">
          <span class="colors__value" :style="`background-color: ${color.code}`"></span>
        </label>
      </li>

    </ul>
  </li>
</template>

<script>
import gotoPage from "@/helpers/gotoPage";
import numberFormat from "@/helpers/numberFormat";

export default {
  name: 'CatalogProductItem',
  data() {
    return {
      colorNone: '',
    }
  },
  props: ['product', 'colors'],
  methods: {
    gotoPage,
  },
  computed: {
    pricePretty() {
      return numberFormat(this.product.price);
    },
  }
}
</script>
