<template>
  <ContentTop :countProducts="countProducts"/>
  <div class="content__catalog">
    <CatalogFilter
      v-model:priceFrom="filterPriceFrom"
      v-model:priceTo="filterPriceTo"
      v-model:categoryId="filterCategoryId"
      v-model:colorId="filterColorId"
    />
    <section class="catalog">
      <LoaderPage v-if="productsLoading"/>
      <LoaderErrorPage v-if="productsLoadingFailed" :rebootLoad="loadProducts" message="товаров"/>
      <h2 v-if="productsNot" class="notProductsFilter">Нет товаров по выбранным фильтрам</h2>
      <CatalogProductList :products="products" v-if="productVisible" />
      <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>
    </section>
  </div>
</template>

<script>
import ContentTop from "@/components/ContentTop/ContentTop";
import CatalogFilter from "@/components/Catalog/CatalogFilter";
import CatalogProductList from "@/components/Catalog/CatalogProductList";

import axios from 'axios';
import {API_BASE_URL} from "@/config";
import BasePagination from "@/components/Pagination/BasePaginatin";
import LoaderPage from "@/components/Loader/LoaderPage";
import LoaderErrorPage from "@/components/Loader/LoaderErrorPage";

export default {
  name: 'HomePage',
  components: {LoaderErrorPage, LoaderPage, BasePagination, CatalogProductList, CatalogFilter, ContentTop},
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      page: 1,
      productsPerPage: 6,
      filterColorId: 0,

      productsData: null,
      productsLoading: true,
      productsLoadingFailed: false,
      productVisible: false,
      productsNot: false,
    };
  },
  computed: {
    products() {
      return this.productsData ? this.productsData.items.map((product) => ({
        ...product,
        image: product.image.file.url,
      })) : [];
    },
    countProducts() {
      return this.productsData ? this.productsData.pagination.total : 0
    }
  },
  methods: {
    loadProducts() {
      this.productsLoading = true;
      this.productsLoadingFailed = false;
      this.productVisible = false;
      clearTimeout(this.loadProductsTimer);
      this.loadProductsTimer = setTimeout(() => {
        axios.get(`${API_BASE_URL}/api/products`, {
          params: {
            page: this.page,
            limit: this.productsPerPage,
            categoryId: this.filterCategoryId,
            minPrice: this.filterPriceFrom,
            maxPrice: this.filterPriceTo,
            colorId: this.filterColorId,
          },
        }).then((res) => this.productsData = res.data).catch(() => {
          this.productsLoadingFailed = true
        }).then(() => {
          this.productsLoading = false;
          this.productVisible = true;
          this.productsNot = this.productsData.items.length === 0;
        })
      }, 0)
    },
  },
  watch: {
    page() {
      this.loadProducts();
    },
    filterPriceFrom() {
      this.loadProducts();
    },
    filterPriceTo() {
      this.loadProducts();
    },
    filterCategoryId() {
      this.loadProducts();
    },
    filterColorId() {
      this.loadProducts();
    },
  },
  created() {
    this.loadProducts()
  }
}
</script>

<style>
.notProductsFilter {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>
