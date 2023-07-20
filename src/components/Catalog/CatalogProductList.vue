<template>
  <ul class="catalog__list">
    <CatalogProductItem v-for="product in products" :product="product" :key="product.id"/>
  </ul>
</template>

<script>
import CatalogProductItem from "@/components/Catalog/CatalogProductItem";

export default {
  name: 'CatalogProductList',
  components: {CatalogProductItem},
  props: {
    products: Array,
  },
}
</script>
