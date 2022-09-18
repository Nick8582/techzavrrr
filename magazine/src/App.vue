<!-- eslint-disable vue/no-deprecated-v-bind-sync -->
<!-- eslint-disable max-len -->
<!-- eslint-disable quotes -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable linebreak-style -->
<template>
  <component
  :is="currentPageComponent"
  :page-params="currentPageParams"/>
</template>

<script>
import MainPage from './pages/MainPage.vue';
import ProductPage from './pages/ProductPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import eventBus from './eventBus';

const routes = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    };
  },
  methods: {
    goToPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotFoundPage';
    },
  },
  components: { MainPage, ProductPage, NotFoundPage },
  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.goToPage(pageName, pageParams));
  },
};
</script>
