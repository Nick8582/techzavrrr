<!-- eslint-disable vue/no-deprecated-filter -->
<!-- eslint-disable max-len -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" href="#" :to="{name: 'product', params: {id: product.id}}">
      <img :src="product.image" :alt="product.title" />
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price"> {{ pricePretty }} ₽ </span>

    <ul class="colors colors--black">
      <li class="colors__item"  v-for="color in product.colors" :key="color.id">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            :value="color.id"
            v-model="colorM"
          />

          <span
            class="colors__value"
            :style="`background-color: ${color.code}`">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import colors from '@/data/colors';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  name: 'ProductItem',
  data() {
    return {
      colorM: '',
      colorItems: colors,
    };
  },
  props: ['product', 'colors'],
  methods: {
    gotoPage,
  },
  computed: {
    pricePretty() {
      return numberFormat(this.product.price);
    },
    categories() {
      return colors;
    },
  },
};
</script>
