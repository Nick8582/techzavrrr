<template>
  <div class="content__top">
    <ul class="breadcrumbs">
      <li class="breadcrumbs__item">
        <router-link class="breadcrumbs__link" :to="{name: 'home'}">
          Каталог
        </router-link>
      </li>
      <li class="breadcrumbs__item">
        <router-link class="breadcrumbs__link" :to="{name: 'home'}">
          {{ product ? product.category.title : '' }}
        </router-link>
      </li>
      <li class="breadcrumbs__item">
        <a class="breadcrumbs__link">
          {{ product ? product.title : '' }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContentTopProduct',
  props: {
    product: Object,
  },
}
</script>
