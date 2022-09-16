<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.image" :alt="product.title" />
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price"> {{ product.price }} ₽ </span>

    <ul class="colors colors--black">
      <li class="colors__item"  v-for="color in product.colorsId" :key="color">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            :value="color"
            v-model="colorM"
          />

          <span
            class="colors__value"
            :style="`background-color: ${colorItems[color-1].color}`">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import colors from '@/data/colors';

export default {
  name: 'ProductItem',
  data() {
    return {
      colorM: '',
      colorItems: colors,
    };
  },
  props: ['product', 'colors'],
  computed: {
    categories() {
      return colors;
    },
  },
};
</script>
