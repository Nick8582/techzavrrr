<!-- eslint-disable vue/no-deprecated-v-bind-sync -->
<!-- eslint-disable max-len -->
<!-- eslint-disable quotes -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable linebreak-style -->
<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> {{ countProducts }} товара </span>
    </div>

    <div class="content__catalog">
      <ProductFilter :color-id.sync="currentColor" :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo" :category-id.sync="filterCategoryId" />

      <section class="catalog">
        <ProductList :products="products" />

        <BasePagination v-model="page"
          :count="countProducts"
          :per-page="productsPerPage"
        />
      </section>
    </div>
  </main>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';
import ProductFilter from './components/ProductFilter.vue';

export default {
  name: 'App',
  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      page: 1,
      productsPerPage: 6,
      currentColor: 0,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        // eslint-disable-next-line max-len
        filteredProducts = filteredProducts.filter((product) => product.price > this.filterPriceFrom);
      }
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.filterPriceTo);
      }
      if (this.filterCategoryId > 0) {
        // eslint-disable-next-line max-len
        filteredProducts = filteredProducts.filter((product) => product.сategoryId === this.filterCategoryId);
      }
      if (this.currentColor > 0) {
        // eslint-disable-next-line max-len
        filteredProducts = filteredProducts.filter((product) => product.colorsId === this.currentColor);
      }
      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>
