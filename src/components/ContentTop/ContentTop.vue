<template>
  <div class="content__top content__top--catalog">
    <h1 class="content__title">
      Каталог
    </h1>
    <span class="content__info">
        {{ countProducts }} товара
    </span>
  </div>
</template>

<script>
export default {
  name: 'ContentTop',
  props: {
    countProducts: Number
  }
}
</script>
